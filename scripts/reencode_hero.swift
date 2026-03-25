import AVFoundation
import CoreVideo
import Foundation

enum ReencodeError: Error {
  case missingArguments
  case missingVideoTrack
  case invalidOutputSize
  case readerSetupFailed(String)
  case writerSetupFailed(String)
  case readFailed(String)
  case writeFailed(String)
}

func evenDimension(_ value: CGFloat) -> Int {
  let rounded = max(Int(abs(value).rounded()), 2)
  return rounded.isMultiple(of: 2) ? rounded : rounded - 1
}

func errorDescription(_ error: Error?) -> String {
  error?.localizedDescription ?? "Unknown AVFoundation error"
}

@main
struct ReencodeHero {
  static func main() async throws {
    let arguments = CommandLine.arguments

    guard arguments.count == 3 else {
      throw ReencodeError.missingArguments
    }

    let inputURL = URL(fileURLWithPath: arguments[1])
    let outputURL = URL(fileURLWithPath: arguments[2])
    let fileManager = FileManager.default

    if fileManager.fileExists(atPath: outputURL.path) {
      try fileManager.removeItem(at: outputURL)
    }

    let asset = AVURLAsset(url: inputURL)
    let videoTracks = try await asset.loadTracks(withMediaType: .video)

    guard let videoTrack = videoTracks.first else {
      throw ReencodeError.missingVideoTrack
    }

    let naturalSize = try await videoTrack.load(.naturalSize)
    let preferredTransform = try await videoTrack.load(.preferredTransform)
    let transformedSize = naturalSize.applying(preferredTransform)
    let outputWidth = evenDimension(transformedSize.width)
    let outputHeight = evenDimension(transformedSize.height)

    guard outputWidth > 0, outputHeight > 0 else {
      throw ReencodeError.invalidOutputSize
    }

    let reader = try AVAssetReader(asset: asset)
    let readerOutput = AVAssetReaderTrackOutput(
      track: videoTrack,
      outputSettings: [
        kCVPixelBufferPixelFormatTypeKey as String: Int(kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange),
      ]
    )
    readerOutput.alwaysCopiesSampleData = false

    guard reader.canAdd(readerOutput) else {
      throw ReencodeError.readerSetupFailed("Unable to attach the video track output.")
    }

    reader.add(readerOutput)

    let writer = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)
    writer.shouldOptimizeForNetworkUse = true
    let writerInput = AVAssetWriterInput(
      mediaType: .video,
      outputSettings: [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: outputWidth,
        AVVideoHeightKey: outputHeight,
        AVVideoCompressionPropertiesKey: [
          AVVideoAverageBitRateKey: 3_000_000,
          AVVideoExpectedSourceFrameRateKey: 30,
          AVVideoMaxKeyFrameIntervalKey: 30,
          AVVideoProfileLevelKey: AVVideoProfileLevelH264MainAutoLevel,
        ],
      ]
    )
    writerInput.expectsMediaDataInRealTime = false
    writerInput.transform = preferredTransform

    guard writer.canAdd(writerInput) else {
      throw ReencodeError.writerSetupFailed("Unable to attach the H.264 writer input.")
    }

    writer.add(writerInput)

    guard reader.startReading() else {
      throw ReencodeError.readFailed(errorDescription(reader.error))
    }

    guard writer.startWriting() else {
      throw ReencodeError.writeFailed(errorDescription(writer.error))
    }

    writer.startSession(atSourceTime: .zero)

    let queue = DispatchQueue(label: "com.bandaelectric.reencode-hero")
    let semaphore = DispatchSemaphore(value: 0)
    var streamingError: Error?

    writerInput.requestMediaDataWhenReady(on: queue) {
      while writerInput.isReadyForMoreMediaData {
        if let sampleBuffer = readerOutput.copyNextSampleBuffer() {
          if !writerInput.append(sampleBuffer) {
            streamingError = writer.error ?? ReencodeError.writeFailed("Failed while appending a video frame.")
            reader.cancelReading()
            writerInput.markAsFinished()
            semaphore.signal()
            return
          }
        } else {
          writerInput.markAsFinished()

          writer.finishWriting {
            semaphore.signal()
          }

          return
        }
      }
    }

    semaphore.wait()

    if let streamingError {
      throw streamingError
    }

    if reader.status == .failed {
      throw ReencodeError.readFailed(errorDescription(reader.error))
    }

    if writer.status == .failed || writer.status == .cancelled {
      throw ReencodeError.writeFailed(errorDescription(writer.error))
    }

    print("Exported \(outputURL.path)")
  }
}

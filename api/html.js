import { readFile } from 'node:fs/promises';
import path from 'node:path';

const OG_IMAGE_PATH = '/banda-og-share.jpg';

let templatePromise;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeReplacement(value) {
  return value.replaceAll('$', '$$$$');
}

function replaceTagAttribute(html, key, attribute, value) {
  const tagPattern = new RegExp(
    `<(?:meta|link)[^>]*data-meta-key=["']${escapeRegExp(key)}["'][^>]*>`,
    'i'
  );
  const attributePattern = new RegExp(
    `\\b${escapeRegExp(attribute)}=["'][^"']*["']`,
    'i'
  );

  return html.replace(tagPattern, (tag) =>
    tag.replace(attributePattern, `${attribute}="${escapeReplacement(value)}"`)
  );
}

function normalizeRoutePath(route) {
  if (!route || route === '/') {
    return '/';
  }

  const withLeadingSlash = route.startsWith('/') ? route : `/${route}`;

  return withLeadingSlash.replace(/\/+$/, '') || '/';
}

function getRequestOrigin(requestUrl, headers) {
  const url = new URL(requestUrl);
  const protocol = headers.get('x-forwarded-proto') ?? url.protocol.replace(':', '');
  const host = headers.get('x-forwarded-host') ?? headers.get('host') ?? url.host;

  return `${protocol}://${host}`;
}

async function loadTemplate() {
  if (!templatePromise) {
    const candidates = [
      path.join(process.cwd(), 'dist', 'index.html'),
      path.join(process.cwd(), 'index.html'),
    ];

    templatePromise = (async () => {
      for (const candidate of candidates) {
        try {
          return await readFile(candidate, 'utf8');
        } catch (error) {
          if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
            continue;
          }

          throw error;
        }
      }

      throw new Error('Unable to locate the HTML template for the Banda Electric app.');
    })();
  }

  return templatePromise;
}

function injectHostAwareMeta(html, canonicalUrl, ogImageUrl) {
  return [
    ['canonical', 'href', canonicalUrl],
    ['image_src', 'href', ogImageUrl],
    ['itemprop:image', 'content', ogImageUrl],
    ['og:url', 'content', canonicalUrl],
    ['og:image', 'content', ogImageUrl],
    ['og:image:url', 'content', ogImageUrl],
    ['og:image:secure_url', 'content', ogImageUrl],
    ['twitter:url', 'content', canonicalUrl],
    ['twitter:image', 'content', ogImageUrl],
  ].reduce(
    (currentHtml, [key, attribute, value]) =>
      replaceTagAttribute(currentHtml, key, attribute, value),
    html
  );
}

export default async function handler(request) {
  try {
    const template = await loadTemplate();
    const requestUrl = new URL(request.url);
    const origin = getRequestOrigin(request.url, request.headers);
    const routePath = normalizeRoutePath(requestUrl.searchParams.get('route'));
    const canonicalUrl = new URL(routePath, origin).toString();
    const ogImageUrl = new URL(OG_IMAGE_PATH, origin).toString();
    const html = injectHostAwareMeta(template, canonicalUrl, ogImageUrl);

    return new Response(html, {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    return new Response('Unable to render the Banda Electric HTML shell.', {
      status: 500,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
      },
    });
  }
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { company, companyLinks } from '../config/company';

export function EntryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Hook, 2: Details

  useEffect(() => {
    // Check if user has already seen/closed the popup in the last 7 days
    const lastSeen = localStorage.getItem('banda_popup_dismissed');
    const now = new Date().getTime();
    
    if (lastSeen) {
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (now - parseInt(lastSeen) < sevenDays) {
        return;
      }
    }

    // Delay the popup by 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('banda_popup_dismissed', new Date().getTime().toString());
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-xl bg-surface border border-secondary/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(246,255,3,0.15)] my-auto"
        >
          {/* Progress Bar (Hidden aesthetic) */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div 
              className="h-full bg-secondary shadow-[0_0_10px_#F6FF03]"
              initial={{ width: '0%' }}
              animate={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>

          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center space-y-8"
                >
                  <div className="inline-flex p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary mb-2">
                    <Zap className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
                    Need a fast quote for <span className="text-secondary">Banda Electric</span> service in Southern Alberta?
                  </h2>

                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="w-full py-5 bg-secondary text-primary font-bold uppercase tracking-widest rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(246,255,3,0.24)] flex items-center justify-center gap-3"
                    >
                      Show me the options
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={handleClose}
                      className="text-slate-500 hover:text-slate-300 font-mono text-[10px] uppercase tracking-[0.2em] py-2 transition-colors"
                    >
                      No thanks, continue to site.
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <div className="text-secondary font-mono text-[10px] uppercase tracking-widest border-b border-secondary/20 pb-2 inline-block">Transmission Received</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter">
                      Get the right <span className="text-secondary">electrical team</span> on your job
                    </h2>
                  </div>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                    Banda Electric serves industrial, residential, agricultural, and commercial clients across Southern Alberta, with preventative maintenance and emergency repair available when you need fast support.
                  </p>

                  <div className="bg-black/20 border border-white/5 rounded-xl p-6 space-y-4">
                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Why Clients Reach Out:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Industrial electrical', 'Residential upgrades', 'Agricultural power', 'Emergency repair'].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-white font-mono text-xs capitalize">
                          <CheckCircle2 className="w-3 h-3 text-secondary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-2 border-secondary/30 pl-4 py-1">
                    <p className="text-xs text-slate-400 uppercase leading-relaxed font-bold tracking-tight">
                      Lethbridge owned and operated, with two master electricians, 40+ years of combined experience, and a five-year warranty behind the work.
                    </p>
                  </div>

                  <a
                    href={companyLinks.phone}
                    className="w-full py-5 bg-secondary text-primary font-bold uppercase tracking-widest rounded-xl hover:brightness-110 flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(246,255,3,0.24)]"
                  >
                    <Phone className="w-5 h-5" />
                    Call {company.phoneDisplay}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute bottom-0 right-0 p-2 opacity-10 pointer-events-none">
            <span className="text-[8px] font-mono text-white uppercase tracking-tighter">REF: BANDA-QUOTE-POPUP</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

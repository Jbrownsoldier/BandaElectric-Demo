import re

hero_content = """import { Phone, Shield, ArrowRight, Zap, Grid, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 min-h-screen bg-primary overflow-hidden flex flex-col items-center justify-center">
      {/* Abstract Energy Conduit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="energy-conduit top-1/4 -left-1/4 rotate-12"></div>
        <div className="energy-conduit top-2/3 -right-1/4 -rotate-12"></div>
        <div className="energy-conduit top-1/3 left-1/2 -translate-x-1/2 rotate-90 opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl px-8 text-center flex flex-col items-center pb-20 mt-10">
        <span className="text-secondary font-headline font-bold tracking-[0.2em] uppercase text-sm mb-6 bg-secondary-fixed/10 px-4 py-1 rounded-full">
          LICENSED ELECTRICIAN IN YORK & THE GTA
        </span>
        
        <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-7xl text-white tracking-tighter max-w-5xl leading-[0.9] mb-8">
          Powering Toronto with <span className="text-secondary-container">Safe, Code-Compliant Work.</span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
         From EV charger installations and panel upgrades to troubleshooting and complete rewiring — 20 years of up-front pricing, ESA-inspected work, and a one-year workmanship warranty on every job.
        </p>

        <div className="relative w-full max-w-6xl aspect-[21/9] rounded-xl overflow-hidden shadow-2xl mb-16 border border-outline-variant/10">
          <img 
            alt="Futuristic Smart Grid Interface" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFCxQk39IRHCjPkfvu5J6bfIbHYYZU_uK6zDjZlU0UQOdWcciKU1zys-Jbd2uDkg0y9OwzN4MqHk9A7SlTRLD7tIsAz3XCwryJickr89Ku14a9J8N4z1F3CXaMsAP_LrnEt4dav9olvYGB_CxtOo6-hCKrymCxsiAvAO-AhO6vg4MkyWmica8TCEGXIiBTVCBcu2p3D2gZqzDEBbZj5PrHnLkVS7T25OHjpUGVqVIGgvpMvmi87YO_pwxQdcyLNS1vZOvZzlIQuFQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
          
          {/* Floating Glassmorphic Stats Overlay */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="glass-panel px-8 py-4 rounded-xl flex items-center gap-4 bg-surface/80 backdrop-blur-md shadow-[0_32px_32px_-4px_rgba(0,31,52,0.08)]">
              <div className="bg-secondary-fixed/20 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-secondary-container" />
              </div>
              <div className="text-left">
                <div className="text-white font-headline font-bold text-xl">ESA #7017720</div>
                <div className="text-slate-400 text-xs font-headline uppercase tracking-wider">Licensed</div>
              </div>
            </div>
            
            <div className="glass-panel px-8 py-4 rounded-xl flex items-center gap-4 bg-surface/80 backdrop-blur-md shadow-[0_32px_32px_-4px_rgba(0,31,52,0.08)]">
              <div className="bg-secondary-fixed/20 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-secondary-container" />
              </div>
              <div className="text-left">
                <div className="text-white font-headline font-bold text-xl">20+ Years</div>
                <div className="text-slate-400 text-xs font-headline uppercase tracking-wider">Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a 
            href="#contact-form"
            className="bg-secondary-container text-on-secondary-container font-headline font-extrabold tracking-wider uppercase px-12 py-5 rounded-lg text-lg shadow-[0_20px_40px_-10px_rgba(255,178,25,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="tel:+14164746904"
            className="text-white font-headline font-bold tracking-wider uppercase px-8 py-5 rounded-lg border border-outline-variant/30 hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            (416) 474-6904
          </a>
        </div>
      </div>
      
      {/* Section Transition */}
      <div className="w-full h-32 bg-gradient-to-b from-primary to-slate-900 mt-12 absolute bottom-0 left-0"></div>
    </section>
  );
}
"""

with open("src/components/Hero.tsx", "w") as f:
    f.write(hero_content)


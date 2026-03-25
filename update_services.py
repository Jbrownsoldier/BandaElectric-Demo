hero_content = """import { Plug, CircuitBoard, Wrench, HardHat, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section id="services" className="px-8 md:px-16 py-24 bg-primary space-y-32">
        {/* Header */}
        <div className="relative z-10 max-w-4xl pt-10">
            <span className="inline-block px-4 py-1 bg-secondary-container/20 text-secondary-container rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">What We Do</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-8">
                ADVANCED <br/><span className="text-secondary-container">COVERAGE.</span>
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                Electrical Services Built for Safety, Speed, and Long-Term Reliability by ESA-licensed experts (ECRA/ESA #7017720).
            </p>
        </div>

      {/* Service 01: EV Charger Installation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 relative group">
          <div className="absolute -inset-4 bg-secondary-container/10 rounded-xl blur-2xl group-hover:bg-secondary-container/20 transition-all duration-500"></div>
          <img className="relative rounded-xl w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="EV Charger" src="https://images.unsplash.com/photo-1691238478411-8250c6d7a40b?auto=format&fit=crop&q=80&w=2000" />
          <div className="absolute top-8 right-8 bg-secondary-container text-on-secondary-container font-black p-4 rounded-lg text-4xl">01</div>
        </div>
        <div className="lg:col-span-5 flex flex-col items-start lg:pl-12">
          <h2 className="font-headline text-4xl font-bold text-white mb-6 uppercase tracking-tight">EV Charger Installation</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Get a Level 2 home or commercial charging station installed quickly and to code. We handle permit applications, load assessments, and panel compatibility.
          </p>
          <ul className="space-y-4 mb-10 w-full">
            <li className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
              <Plug className="w-5 h-5 text-secondary-container" />
              <span className="font-medium text-white">Level 2 Stations</span>
            </li>
            <li className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
              <Wrench className="w-5 h-5 text-secondary-container" />
              <span className="font-medium text-white">Permit Applications</span>
            </li>
            <li className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
              <CircuitBoard className="w-5 h-5 text-secondary-container" />
              <span className="font-medium text-white">Load Assessments</span>
            </li>
          </ul>
          <Link to="/services/ev-charger-installation" className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-lg font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all">
            View Details
          </Link>
        </div>
      </div>

      {/* Service 02: Panels & Sub-Panels (Asymmetric Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 lg:pr-12">
          <h2 className="font-headline text-4xl font-bold text-white mb-6 uppercase tracking-tight">Panels & Sub-Panels</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Outdated 60A or 100A panels create safety hazards and limit your home. We upgrade to 200A+ capacity with minimal disruption, meeting all ESA standards.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-6 bg-slate-800/30 rounded-lg border-l-4 border-amber-500">
              <h4 className="text-white font-bold mb-2">200A+ Capacity</h4>
              <p className="text-xs text-slate-400">Handle modern loads safely.</p>
            </div>
            <div className="p-6 bg-slate-800/30 rounded-lg border-l-4 border-amber-500">
              <h4 className="text-white font-bold mb-2">ESA Standard</h4>
              <p className="text-xs text-slate-400">Strict compliance & safety.</p>
            </div>
          </div>
          <Link to="/services/panel-upgrades" className="text-amber-500 font-bold uppercase tracking-[0.3em] flex items-center gap-4 group">
            Service Details 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 relative group">
          <div className="absolute top-8 right-8 z-10 bg-secondary-container text-on-secondary-container font-black p-4 rounded-lg text-4xl">02</div>
          <img className="rounded-xl w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-opacity" alt="Electrical Panel" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000" />
        </div>
      </div>

      {/* Service 03: Rewiring & Renovations (Bento Style Grid) */}
      <div className="bg-slate-900 rounded-3xl p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary-container/5 to-transparent"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-amber-500 font-bold text-4xl mb-4 block">03</span>
            <h2 className="font-headline text-4xl font-bold text-white mb-4 uppercase">Rewiring & Renovations</h2>
            <p className="text-slate-400">Knob-and-tube or aluminum wiring puts your home and insurance at risk. We fully rewire older properties and handle all electrical rough-in work.</p>
          </div>
          <div className="flex gap-2">
             <Link to="/services/rewiring" className="bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-black uppercase text-sm tracking-widest hover:scale-105 transition-all outline-none">
                 Explore Rewiring
             </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
            <HardHat className="text-secondary-container w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Rough-ins</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Complete electrical framework for basements and home additions.</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
            <CircuitBoard className="text-secondary-container w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Knob-and-Tube Replacement</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Safe and code-compliant removal of hazardous legacy wiring.</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
            <Building2 className="text-secondary-container w-10 h-10 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4">Code Modernization</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Bringing century homes up to present-day electrical codes.</p>
          </div>
        </div>
      </div>

      {/* Service 04: Troubleshooting & Commercial (Minimalist / Technical) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-10">
        <div className="relative group">
          <div className="absolute top-8 left-8 z-10 bg-secondary-container text-on-secondary-container font-black p-4 rounded-lg text-4xl">04</div>
          <img className="rounded-xl aspect-square object-cover grayscale opacity-80 group-hover:grayscale-0 transition-opacity" alt="Technical professional" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" />
          <div className="absolute -bottom-8 -right-8 bg-amber-500 p-12 rounded-xl hidden md:block z-10 shadow-2xl">
            <span className="block text-slate-900 font-black text-6xl">FAST</span>
            <span className="text-slate-900 font-bold uppercase tracking-widest text-sm">Response Times</span>
          </div>
        </div>
        <div>
          <h2 className="font-headline text-4xl font-bold text-white mb-6 uppercase tracking-tight">Troubleshooting & Commercial</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
             Tripped breakers, flickering lights, or dead outlets signal deeper issues. We diagnose the root cause fast and fix it right the first time in both homes and businesses.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-amber-500 font-black text-xl">/</span>
              <div>
                <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-widest">Rapid Diagnostics</h4>
                <p className="text-slate-400 text-sm">Accurate fault finding to minimize your downtime.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-amber-500 font-black text-xl">/</span>
              <div>
                <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-widest">Load Balancing</h4>
                <p className="text-slate-400 text-sm">Three-phase power and heavy machinery hook-ups.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-amber-500 font-black text-xl">/</span>
              <div>
                <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-widest">Permanent Fixes</h4>
                <p className="text-slate-400 text-sm">No temporary bandages. Only code-compliant repairs.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/services/troubleshooting" className="text-amber-500 font-bold uppercase tracking-[0.3em] flex items-center gap-4 group">
            Electrical Troubleshooting 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}
"""

with open("src/components/Services.tsx", "w") as f:
    f.write(hero_content)


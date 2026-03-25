import { Link } from 'react-router-dom';
import { Factory, Home, Building2, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealItem } from './ScrollReveal';

export function HomeServicesPreview() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-24 bg-primary relative border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
                <span className="text-secondary font-headline uppercase font-black tracking-widest text-sm mb-4 block">Core Services</span>
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">Electrical <span className="text-secondary">Coverage</span></h2>
                <p className="text-slate-400 text-base sm:text-lg leading-relaxed">Banda Electric serves industrial, commercial, residential, and agricultural clients across Southern Alberta.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-white hover:text-secondary font-headline font-bold uppercase tracking-widest text-xs transition-colors group">
                View All Operations 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </ScrollReveal>

        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            <ScrollRevealItem>
              <div className="service-card group h-full">
                  <Factory className="card-icon mb-6 w-10 h-10" />
                  <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">Industrial Electrical</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Specialized industrial work, plant support, maintenance, and power distribution handled by experienced master electricians.</p>
              </div>
            </ScrollRevealItem>
            
            <ScrollRevealItem>
              <div className="service-card group h-full">
                  <Building2 className="card-icon mb-6 w-10 h-10" />
                  <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">Commercial Electrical</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Commercial upgrades, build-outs, maintenance, and service work designed to keep properties safe and operational.</p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="service-card group h-full">
                  <Home className="card-icon mb-6 w-10 h-10" />
                  <h3 className="text-xl font-headline font-bold text-white uppercase tracking-tight mb-4">Residential &amp; Agricultural</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Homes, acreages, shops, barns, seed plants, and feed mills all get the same quality-focused electrical care.</p>
              </div>
            </ScrollRevealItem>
        </ScrollReveal>

        <div className="mt-8 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center gap-2 text-white hover:text-secondary font-headline font-bold uppercase tracking-widest text-xs transition-colors">
                View All Operations 
                <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </section>
  );
}

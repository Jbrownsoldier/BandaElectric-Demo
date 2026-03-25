import { Link } from 'react-router-dom';
import { ArrowRight, Quote, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedRating() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });
  const display = Math.round(useCountUp(40, 1400, isVisible));
  return (
    <span ref={ref} className="text-5xl font-headline font-black text-white tracking-tighter tabular-nums">
      {display}+
    </span>
  );
}

export function HomeReviewsPreview() {
  return (
    <section className="px-6 lg:px-8 py-24 bg-surface relative overflow-hidden">
      {/* Pulsing background grid */}
      <div className="absolute inset-0 grid-pulse pointer-events-none" />
      
      {/* Floating ambient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none orb-float" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-[80px] pointer-events-none orb-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Stats Summary */}
            <ScrollReveal variant="fade-left">
            <div>
                <span className="text-secondary font-headline uppercase font-black tracking-widest text-sm mb-4 block">Why Banda</span>
                <h2 className="font-headline text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                    Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Experience</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Banda Electric combines local ownership, two master electricians, a safety-first culture, and quick turnaround backed by a five-year warranty.
                </p>

                <div className="flex items-center gap-6 mb-10">
                    <AnimatedRating />
                    <div className="h-12 w-px bg-white/10"></div>
                    <div>
                        <div className="flex gap-1 mb-1">
                            {[1, 2].map((item) => (
                                <CheckCircle2 key={item} className="w-5 h-5 text-secondary" />
                            ))}
                        </div>
                        <div className="text-sm text-slate-400 font-headline tracking-wider uppercase">Years Combined Experience</div>
                    </div>
                </div>

                <Link to="/reviews" className="btn btn-outline inline-flex flex-row items-center justify-center gap-2 group w-full sm:w-auto">
                    View Banda Highlights
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            </ScrollReveal>

            {/* Featured Quote */}
            <ScrollReveal variant="fade-right" delay={0.15}>
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary/20 rounded-lg backdrop-blur-sm border border-secondary/30 flex items-center justify-center z-20">
                    <Quote className="w-6 h-6 text-secondary" />
                </div>
                <div className="glass-card p-10 rounded-2xl relative z-10">
                    <div className="flex gap-1 mb-6">
                        {[1, 2, 3].map((item) => (
                            <span key={item} className="w-2.5 h-2.5 rounded-full bg-secondary/80" />
                        ))}
                    </div>
                    <p className="text-lg text-white font-medium leading-relaxed mb-8">
                        "Do you have an electrical need that needs to be done quickly and with an eye for quality? Banda Electric brings highly trained, industry-certified master electricians with years of experience."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary font-headline font-black shadow-lg shadow-secondary/20 border border-secondary/30">
                            BE
                        </div>
                        <div>
                            <div className="font-headline font-bold text-white uppercase tracking-tight">Banda Electric</div>
                            <div className="text-sm text-secondary font-mono">Lethbridge Owned &amp; Operated</div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

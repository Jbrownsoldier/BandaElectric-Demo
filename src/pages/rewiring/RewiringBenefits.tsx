import { ShieldCheck, TrendingUp, Zap, Home, FileCheck, ArrowRight } from 'lucide-react';

const benefits = [
 {
 icon: ShieldCheck,
 title: 'Experienced Agricultural Support',
 description:
 'Banda Electric brings master electricians and a support team experienced in agricultural environments where reliability matters as much as installation quality.',
 metric: '2',
 metricLabel: 'master electricians',
 },
 {
 icon: TrendingUp,
 title: 'Long-Term Reliability',
 description:
 'When agricultural systems are planned and maintained properly, the payoff is steadier operations, fewer surprises, and a cleaner path for future upgrades or expansion.',
 metric: '40+',
 metricLabel: 'years combined experience',
 },
 {
 icon: Zap,
 title: 'Built for Expanding Facilities',
 description:
 'Banda Electric frames agricultural work around both maintenance and design-build support, which is exactly what growing facilities need when electrical demand increases.',
 metric: 'Design',
 metricLabel: 'build support',
 },
 {
 icon: FileCheck,
 title: 'Warranty-Backed Work',
 description:
 'A five-year warranty on parts and labour gives agricultural clients stronger confidence that the work is intended to last beyond the initial visit.',
 metric: '5-Yr',
 metricLabel: 'warranty',
 },
 {
 icon: Home,
 title: 'Local Southern Alberta Coverage',
 description:
 'Banda Electric is based in Lethbridge and serves Southern Alberta communities, which matters when agricultural customers need follow-through, future service, and timely emergency help.',
 metric: 'Local',
 metricLabel: 'coverage',
 },
 {
 icon: ShieldCheck,
 title: 'Maintenance That Prevents Downtime',
 description:
 'Preventative maintenance, power quality analysis, line location, and emergency repair are all part of the Banda offer. That mix is especially useful on agricultural sites where downtime is costly.',
 metric: 'PM',
 metricLabel: 'plus repair support',
 },
];

export function RewiringBenefits() {
 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
 <div className="lg:sticky lg:top-28">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Why Agricultural Clients Stay with Banda
 </p>
 <h2 className="text-primary mb-5">
 What Strong Agricultural Electrical Support Actually Gives You
 </h2>
 <p className="text-gray-500 text-base leading-relaxed mb-8">
 Agricultural clients value experienced support, reliable maintenance, local
 coverage, and warranty-backed work that stands up over time.
 </p>

 <div className="bg-primary rounded-2xl p-7">
 <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-5">
 Our Standard on Every Rewire
 </p>
 <ul className="space-y-3.5">
 {[
 'Agricultural maintenance and repair support',
 'Design-build planning for expanding operations',
 'Power quality analysis when required',
 'Line location before site work',
 'Emergency response through 24-hour phone service',
 'Five-year warranty on supported work',
 'Lethbridge-based Southern Alberta coverage',
 ].map((item) => (
 <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
 <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"/>
 {item}
 </li>
 ))}
 </ul>

 <div className="mt-7 pt-6">
 <button className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary text-primary font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group text-sm">
 Request an Agricultural Quote
 <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"/>
 </button>
 </div>
 </div>
 </div>

 <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
 {benefits.map((benefit) => (
 <BenefitCard key={benefit.title} {...benefit} />
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

interface BenefitCardProps {
 icon: React.ElementType;
 title: string;
 description: string;
 metric: string;
 metricLabel: string;
}

function BenefitCard({ icon: Icon, title, description, metric, metricLabel }: BenefitCardProps) {
 return (
 <div className="group p-6 rounded-2xl bg-surface hover:border-secondary/30 hover:shadow-ambient transition-all duration-300">
 <div className="flex items-start gap-4 mb-4">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 shrink-0">
 <Icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300"strokeWidth={1.75} />
 </div>
 <div>
 <span className="font-bold text-2xl text-secondary tracking-tight">{metric}</span>
 <span className="block text-gray-400 text-xs mt-0.5">{metricLabel}</span>
 </div>
 </div>
 <h3 className="text-primary font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
 </div>
 );
}

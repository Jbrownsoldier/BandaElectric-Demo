import { ShieldCheck, Clock, Award, MessageSquare, Zap, MapPin } from 'lucide-react';
import { company } from '../../config/company';

const differentiators = [
 {
 icon: ShieldCheck,
 text: 'Two master electricians and a highly qualified support team with deep industrial field experience',
 },
 {
 icon: Clock,
 text: '40+ years of combined experience across industrial, commercial, agricultural, and specialty projects',
 },
 {
 icon: Award,
 text: 'Design-build, maintenance, and repair under one roof so projects do not stall between vendors',
 },
 {
 icon: MessageSquare,
 text: 'Detailed quotes prepared by experienced team members with a focus on practical, cost-effective solutions',
 },
 {
 icon: Zap,
 text: 'Preventative maintenance, power quality analysis, line location, and emergency repair all built into the service mix',
 },
 {
 icon: MapPin,
 text: 'Lethbridge-based coverage for Southern Alberta facilities that need a dependable long-term electrical partner',
 },
];

const stats = [
 { value: '2', label: 'Master Electricians' },
 { value: '40+', label: 'Years Combined' },
 { value: '24-Hr', label: 'Phone Service' },
 { value: '5-Yr', label: 'Warranty' },
];

export function PanelTrust() {
 return (
 <section className="bg-surface py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 <div>
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Why Choose Banda Electric
 </p>
 <h2 className="text-primary mb-5">
 Built for Complex Electrical Work Across Southern Alberta
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed mb-10">
 Banda Electric positions itself as a local contractor that can create,
 streamline, upgrade, maintain, and repair electrical operations without losing
 sight of quality, safety, or long-term reliability.
 </p>

 <ul className="space-y-5">
 {differentiators.map((item) => (
 <li key={item.text} className="flex items-start gap-4">
 <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
 <item.icon className="w-4 h-4 text-secondary"strokeWidth={1.75} />
 </div>
 <span className="text-gray-700 text-base leading-relaxed">{item.text}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="relative">
 <div className="absolute -top-6 -right-6 w-64 h-64 bg-secondary/5 rounded-3xl -z-10 hidden lg:block"/>
 <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/8 rounded-2xl -z-10 hidden lg:block"/>

 <div className="bg-primary rounded-3xl p-8 md:p-10 shadow-ambient">
 <div className="flex items-center gap-3 mb-8">
 <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
 <Zap className="w-5 h-5 text-primary"/>
 </div>
 <div>
 <p className="text-white font-semibold text-base">{company.name}</p>
 <p className="text-gray-400 text-sm">Lethbridge & Southern Alberta</p>
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4 mb-8">
 {stats.map((stat) => (
 <div
 key={stat.label}
 className="bg-primary-container border border-white/10 rounded-2xl p-5 hover:border-secondary/40 transition-colors duration-200"
 >
 <p className="text-white font-bold text-2xl tracking-tight leading-none mb-1.5">
 {stat.value}
 </p>
 <p className="text-gray-400 text-sm leading-snug">{stat.label}</p>
 </div>
 ))}
 </div>

 <div className="pt-7 space-y-3 mb-8">
 {[
 'Locally owned and operated in Lethbridge',
 'Construction, maintenance, and emergency repair',
 'Five-year warranty on supported work',
 'Airport, industrial, agricultural, and commercial experience',
 ].map((point) => (
 <div key={point} className="flex items-center gap-3">
 <ShieldCheck className="w-4 h-4 text-secondary shrink-0"strokeWidth={2} />
 <span className="text-gray-300 text-sm">{point}</span>
 </div>
 ))}
 </div>

 <button className="w-full bg-secondary hover:bg-secondary text-primary font-semibold rounded-xl py-3.5 px-6 transition-colors duration-200 text-sm tracking-wide">
 Request a Quote Today
 </button>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

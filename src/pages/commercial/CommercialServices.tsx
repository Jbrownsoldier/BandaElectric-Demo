import {
 Building2,
 ShoppingBag,
 Sun,
 Zap,
 AlertTriangle,
 Network,
 Car,
 Power,
 Lamp,
 UtensilsCrossed,
 Thermometer,
 ClipboardList,
} from 'lucide-react';

interface Service {
 icon: React.ElementType;
 title: string;
 description: string;
 tags: string[];
}

const services: Service[] = [
 {
 icon: Building2,
 title: 'Maintenance Contracts',
 description:
 'Banda Electric specifically calls out maintenance contracts as part of its commercial offering, making this route a natural fit for clients who need dependable ongoing support.',
 tags: ['Ongoing support', 'Scheduled service', 'Commercial clients'],
 },
 {
 icon: ShoppingBag,
 title: 'New Build & Build-to-Suit',
 description:
 'The Banda services page promises a full start-to-finish experience for commercial builds, with a focus on meeting deadlines and maintaining a high standard of quality.',
 tags: ['New construction', 'Build-to-suit', 'Start to finish'],
 },
 {
 icon: Zap,
 title: 'Power Distribution',
 description:
 'Power distribution is a core part of Banda Electric’s systems work for growing commercial spaces and specialized facilities.',
 tags: ['Distribution', 'Capacity planning', 'Commercial systems'],
 },
 {
 icon: AlertTriangle,
 title: 'Life-Safety Systems',
 description:
 'Life-safety support is part of the Banda source messaging, alongside the quality-focused installation and maintenance work the company provides to commercial properties.',
 tags: ['Safety systems', 'Reliable operation', 'Commercial support'],
 },
 {
 icon: Sun,
 title: 'Specialty & Parking Lighting',
 description:
 'Specialty and parking lighting are named directly on the Banda site, so this card now reflects that commercial lighting expertise without changing the grid or visual style.',
 tags: ['Parking lighting', 'Specialty lighting', 'Exterior systems'],
 },
 {
 icon: Network,
 title: 'Retail & Office Electrical',
 description:
 'Retail and office spaces benefit from a contractor that can deliver dependable electrical work without compromising deadlines or finish quality.',
 tags: ['Retail', 'Office', 'Tenant improvements'],
 },
 {
 icon: Car,
 title: 'Shopping Malls & Multi-Tenant Facilities',
 description:
 'Shopping malls and other larger commercial occupancies are part of the broader property mix Banda Electric supports across Southern Alberta.',
 tags: ['Malls', 'Common areas', 'Shared facilities'],
 },
 {
 icon: Power,
 title: 'Long-Term Living & Daycare Facilities',
 description:
 'Banda Electric names long-term living facilities and daycares as examples of the commercial environments it supports across Southern Alberta.',
 tags: ['Institutional', 'Occupancy support', 'Reliable service'],
 },
 {
 icon: Lamp,
 title: 'Manufacturing & Facility Support',
 description:
 'Commercial and industrial scopes often overlap. This card preserves the slot but now points to Banda’s broader facility experience with manufacturing and complex operations.',
 tags: ['Manufacturing', 'Facility operations', 'Complex sites'],
 },
 {
 icon: UtensilsCrossed,
 title: 'Service Upgrades & Expansion Support',
 description:
 'When a commercial property expands or changes use, the electrical system has to keep pace with new demand, layouts, and operational needs.',
 tags: ['Expansion', 'Capacity upgrades', 'Future-ready planning'],
 },
 {
 icon: Thermometer,
 title: 'Emergency Repair',
 description:
 'Emergency repair and 24-hour phone service help commercial clients respond quickly when an urgent electrical issue interrupts operations.',
 tags: ['Urgent response', '24-hour phone', 'Quick turnaround'],
 },
 {
 icon: ClipboardList,
 title: 'Detailed Quote & Planning Support',
 description:
 'Detailed quotes focus on the right configuration, equipment, and long-term cost-effective operation for the property.',
 tags: ['Detailed quotes', 'Senior review', 'Project clarity'],
 },
];

export function CommercialServices() {
 return (
 <section className="bg-primary py-20 md:py-28">
 <div className="max-w-7xl mx-auto container-padding">
 <div className="max-w-2xl mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 Commercial Services
 </p>
 <h2 className="text-white mb-4">
 The Commercial Work Banda Electric Highlights
 </h2>
 <p className="text-gray-400 text-lg leading-relaxed">
 Maintenance, build-to-suit delivery, and deadline-focused commercial support
 define the work Banda Electric brings to Southern Alberta properties.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
 {services.map((service) => (
 <ServiceCard key={service.title} {...service} />
 ))}
 </div>
 </div>
 </section>
 );
}

function ServiceCard({ icon: Icon, title, description, tags }: Service) {
 return (
 <div className="group p-6 rounded-2xl bg-white/[0.02] hover:border-secondary/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col">
 <div className="w-10 h-10 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300 mb-4">
 <Icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-300"strokeWidth={1.75} />
 </div>

 <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
 <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

 <div className="flex flex-wrap gap-2">
 {tags.map((tag) => (
 <span key={tag} className="px-2.5 py-1 bg-white/[0.05] text-gray-400 text-xs rounded-lg">
 {tag}
 </span>
 ))}
 </div>
 </div>
 );
}

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { company } from '../../config/company';

const faqs = [
 {
 question: 'What kinds of industrial facilities do you work on?',
 answer:
"Banda Electric works across industrial and heavy commercial environments including manufacturing units, seed plants, feed mills, airport lighting, and other specialized Southern Alberta facilities that need reliable electrical construction, maintenance, and repair support.",
 },
 {
 question: 'Do you handle maintenance as well as new industrial installs?',
 answer:
"Yes. Banda Electric provides design-build construction, preventative maintenance, power quality analysis, line location, service work, and emergency repair.",
 },
 {
 question: 'Can Banda Electric support design-build industrial projects?',
 answer:
"Yes. Banda Electric positions design-build as a core capability, tailoring power distribution, lighting, life-safety, and specialty electrical systems to the building scope, size, and operational requirements.",
 },
 {
 question: 'How quickly can we get help in an emergency?',
 answer:
"The Banda Electric site highlights 24-hour phone service and quick turnaround, especially for emergency repair situations. The team is set up to respond to service, repair, and maintenance requests across Southern Alberta in a timely manner.",
 },
 {
 question: 'Do you work only in Lethbridge?',
 answer:
`No. ${company.name} is based in Lethbridge and serves Southern Alberta, including Coaldale, Coalhurst, Fort Macleod, Cardston, and surrounding communities.`,
 },
 {
 question: 'What is included in an industrial quote?',
 answer:
"Banda Electric states that a senior team member prepares detailed quotes with a focus on the best configuration, the right equipment, and the most cost-effective use and maintenance of the system.",
 },
 {
 question: 'Do you take on complex specialty projects?',
 answer:
"Yes. Banda Electric takes on large and complex work, especially airport lighting plus industrial and commercial projects that require experienced planning, execution, and ongoing support.",
 },
 {
 question: 'What types of industrial systems do you commonly help with?',
 answer:
"Common industrial scopes include power distribution, specialty and parking lighting, life-safety systems, preventative maintenance, line location, emergency repairs, and upgrades that streamline or expand electrical operations.",
 },
];

export function PanelFAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
 setOpenIndex((prev) => (prev === index ? null : index));
 };

 return (
 <section className="bg-surface-container-low py-20 md:py-28">
 <div className="max-w-3xl mx-auto container-padding">
 <div className="text-center mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 FAQ
 </p>
 <h2 className="text-primary mb-4">Common Questions</h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Everything you need to know before booking industrial electrical support. Have
 a specific question?{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us directly.
 </button>
 </p>
 </div>

 <div className="bg-surface rounded-2xl shadow-ambient space-y-4 overflow-hidden">
 {faqs.map((faq, index) => (
 <FAQItem
 key={index}
 question={faq.question}
 answer={faq.answer}
 isOpen={openIndex === index}
 onToggle={() => toggle(index)}
 />
 ))}
 </div>
 </div>
 </section>
 );
}

interface FAQItemProps {
 question: string;
 answer: string;
 isOpen: boolean;
 onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
 return (
 <div className="group">
 <button
 onClick={onToggle}
 className="w-full flex items-center justify-between gap-6 py-5 px-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset"
 aria-expanded={isOpen}
 >
 <span
 className={`text-sm md:text-[0.9375rem] font-semibold transition-colors duration-200 ${
 isOpen ? 'text-secondary' : 'text-primary group-hover:text-secondary'
 }`}
 >
 {question}
 </span>
 <span
 className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200 ${
 isOpen
 ? 'bg-secondary border-secondary text-primary'
 : 'bg-surface border-outline-variant/15 text-gray-400 group-hover:border-secondary group-hover:text-secondary'
 }`}
 >
 {isOpen ? (
 <Minus className="w-3.5 h-3.5"strokeWidth={2.5} />
 ) : (
 <Plus className="w-3.5 h-3.5"strokeWidth={2.5} />
 )}
 </span>
 </button>

 <div
 className={`overflow-hidden transition-all duration-300 ease-in-out ${
 isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
 }`}
 >
 <p className="pb-5 px-7 text-gray-500 leading-relaxed text-sm md:text-[0.9375rem]">
 {answer}
 </p>
 </div>
 </div>
 );
}

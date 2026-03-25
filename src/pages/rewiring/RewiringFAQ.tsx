import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
 {
 question: 'What kinds of agricultural electrical work do you handle?',
 answer:
"Agricultural electrical is a core Banda Electric service line, including seed plants, feed mills, design-build work, maintenance, and broader farm-related support across Southern Alberta.",
 },
 {
 question: 'Do you work on seed plants and feed mills?',
 answer:
"Yes. The Banda Electric services page specifically names highly sophisticated seed plants and feed mills as examples of the agricultural work the company takes on.",
 },
 {
 question: 'Do you provide both maintenance and new agricultural installs?',
 answer:
"Yes. Banda Electric describes its agricultural offering as everything from maintenance through design-build, which makes this route suitable for both active-facility service needs and expansion or new-construction scopes.",
 },
 {
 question: 'Can Banda Electric help with barns, shops, and other farm structures?',
 answer:
"Yes. Banda Electric supports barns, shops, feed systems, irrigation support, and other farm-related electrical work across Southern Alberta.",
 },
 {
 question: 'How quickly can we get help for an agricultural electrical issue?',
 answer:
"Banda Electric notes that its 24-hour phone service is intended to guarantee quick turnaround, especially in emergencies. That same positioning now carries through to this agricultural route.",
 },
 {
 question: 'Do you only work in Lethbridge?',
 answer:
`No. Banda Electric is based in Lethbridge and serves Southern Alberta, including surrounding communities and agricultural sites that need local, dependable electrical support.`,
 },
 {
 question: "What's included in an agricultural electrical quote?",
 answer:
"The Banda Electric contact page says a senior member of the team prepares detailed quotes with attention to the right configuration, equipment selection, and cost-effective long-term use and maintenance.",
 },
 {
 question: 'Can you support agricultural expansions and new builds?',
 answer:
"Yes. Banda Electric's services page explicitly says the team enjoys all aspects of agricultural work, from maintenance to design-build, which makes it a fit for facility expansions, new structures, and system upgrades.",
 },
];

export function RewiringFAQ() {
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
 <h2 className="text-primary mb-4">Common Questions About Agricultural Electrical</h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Straightforward answers to what agricultural clients most often ask before
 committing to an electrical project.{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us
 </button>{' '}
 for anything specific to your project.
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

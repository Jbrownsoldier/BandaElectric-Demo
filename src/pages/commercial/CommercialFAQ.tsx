import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
 {
 question: 'What types of commercial properties do you work on?',
 answer:
"Banda Electric describes its commercial and industrial experience broadly, including shopping malls, long-term living facilities, daycares, manufacturing units, and other demanding properties that need dependable electrical support.",
 },
 {
 question: 'Do you handle maintenance contracts as well as new builds?',
 answer:
"Yes. The Banda Electric services page says the team supports clients from maintenance contracts to new build and build-to-suit projects, with a start-to-finish approach that protects schedules and quality.",
 },
 {
 question: 'What kinds of commercial systems does Banda Electric support?',
 answer:
"Banda Electric supports power distribution, specialty lighting, parking lighting, life-safety systems, maintenance, and repair as part of its broader commercial and industrial service mix.",
 },
 {
 question: 'Can you take on complete start-to-finish commercial projects?',
 answer:
"Yes. Banda Electric provides a full start-to-finish experience for commercial clients, from maintenance contracts through larger build-to-suit and new-build scopes.",
 },
 {
 question: 'Do you support urgent commercial service needs?',
 answer:
"Yes. Banda Electric notes that its 24-hour phone service is intended to guarantee quick turnaround, especially for emergencies, which makes that promise relevant for commercial support as well.",
 },
 {
 question: 'Do you only work in Lethbridge?',
 answer:
"No. Banda Electric is based in Lethbridge and serves Southern Alberta, including commercial clients in surrounding communities that need local project and service support.",
 },
 {
 question: 'How are commercial projects quoted?',
 answer:
"The Banda Electric contact page says a senior team member prepares detailed quotes with attention to the best configurations, equipment choices, and the most cost-effective use and maintenance of the electrical system.",
 },
 {
 question:"What sets Banda Electric apart for commercial work?",
 answer:
"Banda Electric stands out through local ownership, two master electricians, high standards for installation and maintenance, a five-year warranty, and a safety-first culture.",
 },
];

export function CommercialFAQ() {
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
 <h2 className="text-primary mb-4">
 Commercial Electrical Questions, Answered
 </h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 What commercial owners, operators, and project teams most often ask before
 engaging Banda Electric.{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us
 </button>{' '}
 with anything specific to your project.
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

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
 {
 question: 'What kinds of residential jobs do you handle?',
 answer:
 'Banda Electric handles residential electrical service calls, renovations, additions, lighting, garage power, outdoor circuits, and whole-home electrical upgrades across Lethbridge and Southern Alberta.',
 },
 {
 question: 'Do you work on renovations, additions, and garages?',
 answer:
 'Yes. Residential renovation work is a core fit for Banda Electric, whether you are updating a single room, wiring a garage or detached shop, or planning a larger addition that needs new circuits and careful load planning.',
 },
 {
 question: 'Can you help with acreage and detached building power?',
 answer:
 'Yes. Banda Electric works on homes, acreages, shops, barns, and other support buildings that need dependable wiring, service upgrades, lighting, or outdoor power distribution.',
 },
 {
 question: 'How quickly can I get a quote?',
 answer:
 'Banda Electric emphasizes quick, professional estimating. A senior member of the team prepares residential quotes with a focus on quality, the right configuration, and practical long-term value.',
 },
 {
 question: 'Do you offer emergency residential repair?',
 answer:
 'Yes. Banda Electric advertises 24-hour phone service and quick turnaround, especially for urgent electrical issues that need immediate attention.',
 },
 {
 question: 'Can you update older homes?',
 answer:
 'Yes. Older homes often need service upgrades, safer distribution, renovation wiring, or general electrical modernization, and Banda Electric fits that work into the closest residential solution for the property.',
 },
 {
 question: 'Do you serve communities outside Lethbridge?',
 answer:
 'Yes. Banda Electric is based in Lethbridge and promotes service across Southern Alberta. If your home, acreage, or rural site is outside the city, contact the team and they will confirm the best next step.',
 },
 {
 question: 'Do you stand behind your residential work?',
 answer:
 'Yes. Banda Electric stands behind its work with a five-year warranty and a strong focus on safety, quality, and total customer satisfaction.',
 },
];

export function EVFAQ() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

 const toggle = (index: number) => {
 setOpenIndex((prev) => (prev === index ? null : index));
 };

 return (
 <section className="bg-surface py-20 md:py-28">
 <div className="max-w-3xl mx-auto container-padding">
 <div className="text-center mb-14">
 <p className="text-secondary font-semibold tracking-wide uppercase text-sm mb-3">
 FAQ
 </p>
 <h2 className="text-primary mb-4">Common Questions</h2>
 <p className="text-gray-500 text-lg leading-relaxed">
 Everything you need to know about Banda Electric’s residential service. Still have a question?{' '}
 <button className="text-secondary font-semibold hover:underline underline-offset-2">
 Contact us directly.
 </button>
 </p>
 </div>

 <div className="space-y-4">
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
 className="w-full flex items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
 aria-expanded={isOpen}
 >
 <span
 className={`text-base md:text-[1.0625rem] font-semibold transition-colors duration-200 ${
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
 <p className="pb-6 text-gray-500 leading-relaxed text-[0.9375rem] md:text-base">
 {answer}
 </p>
 </div>
 </div>
 );
}

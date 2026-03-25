import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Are you locally owned and operated?',
    answer:
      'Yes. Banda Electric is Lethbridge-owned and operated and serves clients throughout Southern Alberta with a local crew that understands the pace and demands of the region.',
  },
  {
    question: 'What kinds of electrical work do you handle?',
    answer:
      'Banda Electric handles industrial, residential, agricultural, and commercial electrical work, along with preventative maintenance, power quality analysis, line location, airport light maintenance, and emergency repair.',
  },
  {
    question: 'Do you have master electricians on staff?',
    answer:
      'Yes. Banda Electric is led by two master electricians and a highly trained, industry-certified team with more than 40 years of combined experience.',
  },
  {
    question: 'Do you handle maintenance and emergency repair?',
    answer:
      'Yes. Preventative maintenance and emergency repair are core Banda Electric services, and the company advertises 24-hour phone service for quick turnaround when urgent electrical issues come up.',
  },
  {
    question: 'Do you work on agricultural facilities?',
    answer:
      'Yes. Banda Electric specifically serves agricultural clients, including seed plants, feed mills, farms, and other rural operations that need dependable power, upgrades, maintenance, and design-build support.',
  },
  {
    question: 'Can you take on commercial and industrial projects?',
    answer:
      'Yes. Banda Electric handles industrial and commercial electrical scopes ranging from upgrades and maintenance through to new installations, with a focus on quality, safety, and well-planned execution.',
  },
  {
    question: 'Do you offer residential electrical services too?',
    answer:
      'Absolutely. Residential service is one of Banda Electric’s core offerings, whether you need repairs, renovations, lighting, service upgrades, garage power, or whole-home electrical planning.',
  },
  {
    question: 'How do quotes work?',
    answer:
      'Banda Electric emphasizes quick, professional estimating. A senior member of the team prepares detailed quotes with an eye toward quality, practical configurations, and cost-effective long-term use.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Banda Electric is based in Lethbridge and promotes service across Southern Alberta. For nearby communities and rural jobs, the fastest way to confirm coverage is to call or request a quote.',
  },
  {
    question: 'Do you stand behind your work?',
    answer:
      'Yes. Banda Electric stands behind its work with a five-year warranty and a strong focus on safety, training, and customer satisfaction.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-primary py-20 md:py-24 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary font-headline font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Knowledge Base
          </p>
          <h2 className="text-white font-headline font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Quick answers about Banda Electric’s services, coverage, and quoting. Need project-specific help?{' '}
            <a href="#contact-form" className="text-secondary font-bold hover:underline underline-offset-4 tracking-wide">
              Contact our team.
            </a>
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              index={index}
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
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className={`group border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-surface shadow-[0_0_30px_rgba(0,0,0,0.5)] border-secondary/30' : 'bg-surface/50 hover:bg-surface'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <span className="font-headline font-black text-secondary/50 text-lg sm:text-xl tracking-tighter shrink-0">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <span
            className={`text-sm sm:text-base md:text-lg font-headline font-bold tracking-tight transition-colors duration-200 ${
              isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
            }`}
          >
            {question}
          </span>
        </div>
        <span
          className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? 'bg-secondary border-secondary text-primary rotate-180'
              : 'bg-transparent border-white/20 text-slate-400 group-hover:border-secondary group-hover:text-secondary'
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4" strokeWidth={3} />
          ) : (
            <Plus className="w-4 h-4" strokeWidth={3} />
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 ml-0 sm:ml-10 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5">
          {answer}
        </p>
      </div>
    </div>
  );
}

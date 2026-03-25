import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { HomeServicesPreview } from '../components/HomeServicesPreview';
import { HomeReviewsPreview } from '../components/HomeReviewsPreview';
import { FAQ } from '../components/FAQ';
import { ContactCTA } from '../components/ContactCTA';
import { SEO } from '../components/SEO';
import { JsonLd } from '../components/JsonLd';
import { faqPageSchema } from '../lib/schemas';

const HOME_FAQS = [
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

export function HomePage() {
  return (
    <>
      <SEO
        title="Electrical Contractor in Lethbridge | Banda Electric"
        description="Banda Electric is a Lethbridge electrical contractor serving Southern Alberta with industrial, residential, agricultural, and commercial electrical services, preventative maintenance, and emergency repair."
        canonical="/"
      />
      <JsonLd schema={faqPageSchema(HOME_FAQS)} />
      <main>
        <Hero />
        <TrustBar />
        <HomeServicesPreview />
        <HomeReviewsPreview />
        <FAQ />
        <ContactCTA />
      </main>
    </>
  );
}

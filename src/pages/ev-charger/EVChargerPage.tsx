import { EVHero } from './EVHero';
import { EVIntro } from './EVIntro';
import { EVBenefits } from './EVBenefits';
import { EVProcess } from './EVProcess';
import { EVFAQ } from './EVFAQ';
import { EVTrustBar } from './EVTrustBar';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';

const EV_FAQS = [
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

export function EVChargerPage() {
  return (
    <>
      <SEO
        title="Residential Electrical | Banda Electric | Lethbridge"
        description="Residential electrical services from Banda Electric in Lethbridge and Southern Alberta, including repairs, renovations, garage power, upgrades, and quick turnaround quoting."
        canonical="/ev-charger"
      />
      <JsonLd schema={serviceSchema({
        name: 'Residential Electrical',
        description: 'Residential electrical services for homes, acreages, garages, shops, renovations, and upgrades across Lethbridge and Southern Alberta.',
        url: 'https://bandaelectric-website.vercel.app/ev-charger',
        serviceType: 'Residential Electrical',
      })} />
      <JsonLd schema={faqPageSchema(EV_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Residential Electrical', path: '/ev-charger' },
      ])} />
      <main>
        <EVHero />
        <EVTrustBar />
        <EVIntro />
        <EVBenefits />
        <EVProcess />
        <EVFAQ />
        <ContactCTA />
      </main>
    </>
  );
}

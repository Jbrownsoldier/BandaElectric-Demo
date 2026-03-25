import { RewiringHero } from './RewiringHero';
import { RewiringTrustBar } from './RewiringTrustBar';
import { RewiringWhenNeeded } from './RewiringWhenNeeded';
import { RewiringRenovation } from './RewiringRenovation';
import { RewiringBenefits } from './RewiringBenefits';
import { RewiringFAQ } from './RewiringFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const REWIRING_FAQS = [
  {
    question: 'What kinds of agricultural electrical work do you handle?',
    answer:
      'Agricultural electrical is a core Banda Electric service line, including seed plants, feed mills, design-build work, maintenance, and broader farm-related support across Southern Alberta.',
  },
  {
    question: 'Do you work on seed plants and feed mills?',
    answer:
      'Yes. The Banda Electric services page specifically names highly sophisticated seed plants and feed mills as examples of the agricultural work the company takes on.',
  },
  {
    question: 'Do you provide both maintenance and new agricultural installs?',
    answer:
      'Yes. Banda Electric describes its agricultural offering as everything from maintenance through design-build, which makes this route suitable for both active-facility service needs and expansion or new-construction scopes.',
  },
  {
    question: 'Can Banda Electric help with barns, shops, and other farm structures?',
    answer:
      'Yes. Banda Electric supports barns, shops, feed systems, irrigation support, and other farm-related electrical work across Southern Alberta.',
  },
  {
    question: 'How quickly can we get help for an agricultural electrical issue?',
    answer:
      'Banda Electric notes that its 24-hour phone service is intended to guarantee quick turnaround, especially in emergencies. That same positioning now carries through to this agricultural route.',
  },
  {
    question: 'Do you only work in Lethbridge?',
    answer:
      `No. ${company.name} is based in Lethbridge and serves Southern Alberta, including surrounding communities and agricultural sites that need local, dependable electrical support.`,
  },
  {
    question: "What's included in an agricultural electrical quote?",
    answer:
      'The Banda Electric contact page says a senior member of the team prepares detailed quotes with attention to the right configuration, equipment selection, and cost-effective long-term use and maintenance.',
  },
  {
    question: 'Can you support agricultural expansions and new builds?',
    answer:
      'Yes. Banda Electric’s services page explicitly says it enjoys all aspects of agricultural work, from maintenance to design-build, which makes it a fit for facility expansions, new structures, and system upgrades.',
  },
];

export function RewiringPage() {
  return (
    <>
      <SEO
        title="Agricultural Electrical Services | Banda Electric"
        description="Agricultural electrical services for farms, seed plants, feed mills, shops, and expanding facilities in Lethbridge and Southern Alberta. Maintenance and design-build support from Banda Electric."
        canonical="/rewiring"
      />
      <JsonLd schema={serviceSchema({
        name: 'Agricultural Electrical Services',
        description: 'Agricultural electrical design-build, maintenance, repair, and expansion support for seed plants, feed mills, barns, shops, and farm facilities across Southern Alberta.',
        url: `${company.siteUrl}/rewiring`,
        serviceType: 'Agricultural Electrical',
      })} />
      <JsonLd schema={faqPageSchema(REWIRING_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Agricultural Electrical', path: '/rewiring' },
      ])} />
      <main>
        <RewiringHero />
        <RewiringTrustBar />
        <RewiringWhenNeeded />
        <RewiringRenovation />
        <RewiringBenefits />
        <RewiringFAQ />
        <ContactCTA />
      </main>
    </>
  );
}

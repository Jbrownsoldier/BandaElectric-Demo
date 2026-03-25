import { CommercialHero } from './CommercialHero';
import { CommercialTrustBar } from './CommercialTrustBar';
import { CommercialServices } from './CommercialServices';
import { CommercialWhyChoose } from './CommercialWhyChoose';
import { CommercialProcess } from './CommercialProcess';
import { CommercialFAQ } from './CommercialFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const COMMERCIAL_FAQS = [
  {
    question: 'What types of commercial properties do you work on?',
    answer:
      'Banda Electric describes its commercial and industrial experience broadly, including shopping malls, long-term living facilities, daycares, manufacturing units, and other demanding properties that need dependable electrical support.',
  },
  {
    question: 'Do you handle maintenance contracts as well as new builds?',
    answer:
      'Yes. The Banda Electric services page says the team supports clients from maintenance contracts to new build and build-to-suit projects, with a start-to-finish approach that protects schedules and quality.',
  },
  {
    question: 'What kinds of commercial systems does Banda Electric support?',
    answer:
      'Banda Electric supports power distribution, specialty lighting, parking lighting, life-safety systems, maintenance, and repair as part of its broader commercial and industrial service mix.',
  },
  {
    question: 'Can you take on complete start-to-finish commercial projects?',
    answer:
      'Yes. Banda Electric provides a full start-to-finish experience for commercial clients, from maintenance contracts through larger build-to-suit and new-build scopes.',
  },
  {
    question: 'Do you support urgent commercial service needs?',
    answer:
      'Yes. Banda Electric notes that its 24-hour phone service is intended to guarantee quick turnaround, especially for emergencies, which makes that promise relevant for commercial support as well.',
  },
  {
    question: 'Do you only work in Lethbridge?',
    answer:
      `No. ${company.name} is based in Lethbridge and serves Southern Alberta, including commercial clients in surrounding communities that need local project and service support.`,
  },
  {
    question: 'How are commercial projects quoted?',
    answer:
      'The Banda Electric contact page says a senior team member prepares detailed quotes with attention to the best configurations, equipment choices, and the most cost-effective use and maintenance of the electrical system.',
  },
  {
    question: 'What sets Banda Electric apart for commercial work?',
    answer:
      'Banda Electric stands out through local ownership, two master electricians, high standards for installation and maintenance, a five-year warranty, and a safety-first culture.',
  },
];

export function CommercialPage() {
  return (
    <>
      <SEO
        title="Commercial Electrical Contractor Lethbridge | Banda Electric"
        description="Commercial electrical contractor for maintenance, new build, build-to-suit, lighting, life-safety, and power distribution support in Lethbridge and Southern Alberta."
        canonical="/commercial"
      />
      <JsonLd schema={serviceSchema({
        name: 'Commercial Electrical Services',
        description: 'Commercial electrical maintenance, new build, build-to-suit, lighting, life-safety, and power distribution support for properties across Lethbridge and Southern Alberta.',
        url: `${company.siteUrl}/commercial`,
        serviceType: 'Commercial Electrical',
      })} />
      <JsonLd schema={faqPageSchema(COMMERCIAL_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Commercial Electrical', path: '/commercial' },
      ])} />
      <main>
        <CommercialHero />
        <CommercialTrustBar />
        <CommercialServices />
        <CommercialWhyChoose />
        <CommercialProcess />
        <CommercialFAQ />
        <ContactCTA />
      </main>
    </>
  );
}

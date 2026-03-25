import { TroubleHero } from './TroubleHero';
import { TroubleTrustBar } from './TroubleTrustBar';
import { TroubleIssues } from './TroubleIssues';
import { TroubleWhyFast } from './TroubleWhyFast';
import { TroubleProcess } from './TroubleProcess';
import { TroubleFAQ } from './TroubleFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const TROUBLE_FAQS = [
  {
    question: 'What does Banda Electric include in preventative maintenance?',
    answer:
      'The Banda Electric site specifically calls out preventative maintenance that includes power quality analysis and line location, alongside the broader maintenance and repair support it provides for industrial, commercial, agricultural, and residential systems.',
  },
  {
    question: 'Do you offer emergency electrical repair?',
    answer:
      'Yes. Emergency repair is part of Banda Electric’s core service mix, backed by 24-hour phone service for urgent electrical issues.',
  },
  {
    question: 'Can you help with hard-to-diagnose recurring issues?',
    answer:
      'Yes. Banda Electric approaches recurring issues with careful diagnosis, practical repair planning, and a focus on long-term reliability rather than guesswork.',
  },
  {
    question: 'Which types of properties do you service for maintenance calls?',
    answer:
      'Banda Electric works across industrial, commercial, agricultural, residential, and airport-related environments throughout Southern Alberta.',
  },
  {
    question: 'Do you only handle emergencies, or can we schedule planned service too?',
    answer:
      'Both. Banda Electric’s offering covers emergency repair as well as scheduled service, preventative maintenance, inspections, and upgrade planning for customers who want to reduce downtime before an emergency happens.',
  },
  {
    question: 'Can you support underground work and line location?',
    answer:
      'Yes. Line location is part of Banda Electric’s preventative maintenance services, making it a strong fit for excavation, upgrades, and site changes that require safer underground coordination.',
  },
  {
    question: 'How do quotes work for service and repair requests?',
    answer:
      'The Banda Electric contact page says a senior team member prepares detailed quotes with attention to the best configuration, equipment, and cost-effective long-term use and maintenance of the system.',
  },
  {
    question: 'Do you work outside Lethbridge for maintenance requests?',
    answer:
      `Yes. ${company.name} is based in Lethbridge and serves Southern Alberta communities, so the maintenance and emergency-repair positioning on this page extends beyond the city itself.`,
  },
];

export function TroubleshootingPage() {
  return (
    <>
      <SEO
        title="Preventative Maintenance & Emergency Repair | Banda Electric"
        description="Preventative maintenance, emergency repair, power quality analysis, and line location services for Banda Electric clients across Lethbridge and Southern Alberta."
        canonical="/troubleshooting"
      />
      <JsonLd schema={serviceSchema({
        name: 'Preventative Maintenance & Emergency Repair',
        description: 'Preventative maintenance, emergency repair, power quality analysis, and line location services for industrial, commercial, agricultural, and residential properties across Southern Alberta.',
        url: `${company.siteUrl}/troubleshooting`,
        serviceType: 'Electrical Maintenance',
      })} />
      <JsonLd schema={faqPageSchema(TROUBLE_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Maintenance & Emergency Repair', path: '/troubleshooting' },
      ])} />
      <main>
        <TroubleHero />
        <TroubleTrustBar />
        <TroubleIssues />
        <TroubleWhyFast />
        <TroubleProcess />
        <TroubleFAQ />
        <ContactCTA />
      </main>
    </>
  );
}

import { PanelHero } from './PanelHero';
import { PanelTrustBar } from './PanelTrustBar';
import { PanelProblemSolution } from './PanelProblemSolution';
import { PanelSigns } from './PanelSigns';
import { PanelProcess } from './PanelProcess';
import { PanelTrust } from './PanelTrust';
import { PanelFAQ } from './PanelFAQ';
import { ContactCTA } from '../../components/ContactCTA';
import { SEO } from '../../components/SEO';
import { JsonLd } from '../../components/JsonLd';
import { serviceSchema, faqPageSchema, breadcrumbSchema } from '../../lib/schemas';
import { company } from '../../config/company';

const PANEL_FAQS = [
  {
    question: 'What kinds of industrial facilities do you work on?',
    answer:
      'Banda Electric works across industrial and heavy commercial environments including manufacturing units, seed plants, feed mills, airport lighting, and other specialized Southern Alberta facilities that need reliable electrical construction, maintenance, and repair support.',
  },
  {
    question: 'Do you handle maintenance as well as new industrial installs?',
    answer:
      'Yes. Banda Electric provides design-build construction, preventative maintenance, power quality analysis, line location, service work, and emergency repair.',
  },
  {
    question: 'Can Banda Electric support design-build industrial projects?',
    answer:
      'Yes. Banda Electric positions design-build as a core capability, tailoring power distribution, lighting, life-safety, and specialty electrical systems to the building scope, size, and operational requirements.',
  },
  {
    question: 'How quickly can we get help in an emergency?',
    answer:
      'The Banda Electric site highlights 24-hour phone service and quick turnaround, especially for emergency repair situations. The team is set up to respond to service, repair, and maintenance requests across Southern Alberta in a timely manner.',
  },
  {
    question: 'Do you work only in Lethbridge?',
    answer:
      `No. ${company.name} is based in Lethbridge and serves Southern Alberta, including Coaldale, Coalhurst, Fort Macleod, Cardston, and surrounding communities.`,
  },
  {
    question: 'What is included in an industrial quote?',
    answer:
      'Banda Electric states that a senior team member prepares detailed quotes with a focus on the best configuration, the right equipment, and the most cost-effective use and maintenance of the system.',
  },
  {
    question: 'Do you take on complex specialty projects?',
    answer:
      'Yes. Banda Electric takes on large and complex work, especially airport lighting plus industrial and commercial projects that require experienced planning, execution, and ongoing support.',
  },
  {
    question: 'What types of industrial systems do you commonly help with?',
    answer:
      'Common industrial scopes include power distribution, specialty and parking lighting, life-safety systems, preventative maintenance, line location, emergency repairs, and upgrades that streamline or expand electrical operations.',
  },
];

export function PanelUpgradePage() {
  return (
    <>
      <SEO
        title="Industrial Electrical Services Lethbridge | Banda Electric"
        description="Industrial electrical contractor in Lethbridge and Southern Alberta. Design-build, preventative maintenance, power quality analysis, line location, emergency repair, and specialty facility support from Banda Electric."
        canonical="/panel-upgrade"
      />
      <JsonLd schema={serviceSchema({
        name: 'Industrial Electrical Services',
        description: 'Industrial electrical construction, preventative maintenance, emergency repair, power quality analysis, and line location services for facilities across Lethbridge and Southern Alberta.',
        url: `${company.siteUrl}/panel-upgrade`,
        serviceType: 'Industrial Electrical',
      })} />
      <JsonLd schema={faqPageSchema(PANEL_FAQS)} />
      <JsonLd schema={breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Industrial Electrical', path: '/panel-upgrade' },
      ])} />
      <main>
        <PanelHero />
        <PanelTrustBar />
        <PanelProblemSolution />
        <PanelSigns />
        <PanelProcess />
        <PanelTrust />
        <PanelFAQ />
        <ContactCTA />
      </main>
    </>
  );
}

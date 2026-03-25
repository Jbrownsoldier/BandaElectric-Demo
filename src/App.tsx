import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { CursorGlow } from './components/CursorGlow';
import { QuoteProvider } from './context/QuoteContext';
import { JsonLd } from './components/JsonLd';
import { globalSchema } from './lib/schemas';
const QuoteModal = lazy(() => import('./components/quote/QuoteModal').then(m => ({ default: m.QuoteModal })));
import { ScrollToTop } from './components/ScrollToTop';
import { EntryPopup } from './components/EntryPopup';

// Lazily load every page so each route only downloads its own JS chunk
const HomePage          = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const EVChargerPage     = lazy(() => import('./pages/ev-charger/EVChargerPage').then(m => ({ default: m.EVChargerPage })));
const PanelUpgradePage  = lazy(() => import('./pages/panel-upgrade/PanelUpgradePage').then(m => ({ default: m.PanelUpgradePage })));
const TroubleshootingPage = lazy(() => import('./pages/troubleshooting/TroubleshootingPage').then(m => ({ default: m.TroubleshootingPage })));
const RewiringPage      = lazy(() => import('./pages/rewiring/RewiringPage').then(m => ({ default: m.RewiringPage })));
const CommercialPage    = lazy(() => import('./pages/commercial/CommercialPage').then(m => ({ default: m.CommercialPage })));
const ServicesPage      = lazy(() => import('./pages/services/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AreasPage         = lazy(() => import('./pages/areas/AreasPage').then(m => ({ default: m.AreasPage })));
const ReviewsPage       = lazy(() => import('./pages/reviews/ReviewsPage').then(m => ({ default: m.ReviewsPage })));
const AboutPage         = lazy(() => import('./pages/about/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage       = lazy(() => import('./pages/contact/ContactPage').then(m => ({ default: m.ContactPage })));

export default function App() {
  return (
    <HelmetProvider>
      <JsonLd schema={globalSchema()} />
    <QuoteProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 relative pb-[100px] lg:pb-0">
          <CursorGlow />
          <Navigation />
          <Suspense fallback={
            <div style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b0b0b' }}>
              <div style={{ width: 36, height: 36, border: '3px solid #F6FF03', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ev-charger" element={<EVChargerPage />} />
              <Route path="/panel-upgrade" element={<PanelUpgradePage />} />
              <Route path="/troubleshooting" element={<TroubleshootingPage />} />
              <Route path="/rewiring" element={<RewiringPage />} />
              <Route path="/commercial" element={<CommercialPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/areas" element={<AreasPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
          <Footer />
          <MobileBottomBar />
          <QuoteModal />
          <EntryPopup />
        </div>
      </BrowserRouter>
    </QuoteProvider>
    </HelmetProvider>
  );
}

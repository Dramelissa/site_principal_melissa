
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import AboutSection from './components/AboutSection';
import ServicesHero from './components/ServicesHero';
import PatientJourney from './components/PatientJourney';
import Footer from './components/Footer';

import { getUtmParamsFromUrl, storeUtmParams } from './lib/utm';

const ServicesPage = React.lazy(() => import('./components/ServicesPage'));
const TrajectoryPage = React.lazy(() => import('./components/TrajectoryPage'));
const ContactModal = React.lazy(() => import('./components/ContactModal'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'procedimentos' | 'trajectory'>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Capture and store UTM params on mount
    const params = getUtmParamsFromUrl();
    storeUtmParams(params);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#procedimentos')) {
        setCurrentPage('procedimentos');
        const parts = hash.split('/');
        if (parts.length > 1) {
          setScrollTarget(parts[1]);
        } else {
          setScrollTarget(null);
        }
      } else if (hash.startsWith('#trajetoria')) {
        setCurrentPage('trajectory');
        setScrollTarget(null);
      } else {
        setCurrentPage('home');
        setScrollTarget(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  useEffect(() => {
    if (scrollTarget) {
      const scrollToElement = (attempts: number) => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setScrollTarget(null);
        } else if (attempts > 0) {
          setTimeout(() => scrollToElement(attempts - 1), 200);
        }
      };
      setTimeout(() => scrollToElement(5), 100);
    }
  }, [currentPage, scrollTarget]);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen selection:bg-[#C9A84C] selection:text-white">
      <Header onOpenContact={openModal} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOpenContact={openModal} />
            <section className="relative z-10 -mt-20 px-4 md:px-8 max-w-7xl mx-auto">
              <InfoCards />
            </section>
            <AboutSection />
            <PatientJourney />
            <ServicesHero onOpenContact={openModal} />
          </>
        ) : currentPage === 'procedimentos' ? (
          <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#C9A84C] border-t-transparent rounded-full animate-spin"></div></div>}>
            <ServicesPage onOpenContact={openModal} />
          </React.Suspense>
        ) : (
          <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#C9A84C] border-t-transparent rounded-full animate-spin"></div></div>}>
            <TrajectoryPage onOpenContact={openModal} />
          </React.Suspense>
        )}
      </main>
      <Footer onOpenContact={openModal} />
      <React.Suspense fallback={null}>
        {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </React.Suspense>
    </div>
  );
};

export default App;

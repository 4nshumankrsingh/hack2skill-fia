import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsHackathon from './components/WhatIsHackathon';
import WhyParticipate from './components/WhyParticipate';
import HowToParticipate from './components/HowToParticipate';
import Challenges from './components/Challenges';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const Rewards = lazy(() => import('./components/Rewards'));
const FAQ = lazy(() => import('./components/FAQ'));

function SectionFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary-light/30 border-t-primary-light rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0612] text-white font-manrope">
      {/* Fixed background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-[-10%] w-1/2 h-1/2 bg-[#4c1d95]/20 blur-[120px] hidden lg:block" />
        <div className="absolute top-[80vh] left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-[#5b21b6]/20 blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#5b21b6]/15 blur-[120px] hidden lg:block" />
        <div className="absolute top-1/2 left-[-10%] w-1/2 h-1/2 bg-[#4c1d95]/15 blur-[120px] hidden lg:block" />
        <div className="absolute top-3/4 right-0 w-1/2 h-1/2 bg-[#5b21b6]/20 blur-[120px] hidden lg:block" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[#4c1d95]/20 blur-[150px] hidden lg:block" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <WhatIsHackathon />
        <WhyParticipate />
        <HowToParticipate />
        <Challenges />
        <Timeline />

        <Suspense fallback={<SectionFallback />}>
          <Rewards />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <FAQ />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
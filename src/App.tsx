import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0612] text-white font-manrope">
      {/* Fixed background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-1/2 h-1/2 bg-[#4c1d95]/20 blur-[120px] hidden lg:block" />
        <div className="absolute top-[80vh] left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-[#5b21b6]/20 blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[#5b21b6]/15 blur-[120px] hidden lg:block" />
        <div className="absolute top-1/2 left-[-10%] w-1/2 h-1/2 bg-[#4c1d95]/15 blur-[120px] hidden lg:block" />
        <div className="absolute top-3/4 right-0 w-1/2 h-1/2 bg-[#5b21b6]/20 blur-[120px] hidden lg:block" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[#4c1d95]/20 blur-[150px] hidden lg:block" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />

        {/* Placeholder sections for remaining phases */}
        <section id="how-to-participate" className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-text-dim">How to Participate (Phase 3)</p>
        </section>
        <section id="challenges" className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-text-dim">Challenges (Phase 3)</p>
        </section>
        <section id="timeline" className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-text-dim">Timeline (Phase 3)</p>
        </section>
        <section id="why-participate" className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-text-dim">Why Participate (Phase 3)</p>
        </section>
        <section id="rewards" className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-text-dim">Rewards (Phase 4)</p>
        </section>
        <section id="faq" className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-text-dim">FAQ (Phase 4)</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
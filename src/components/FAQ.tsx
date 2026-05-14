import { useState } from 'react';
import Reveal from './ui/Reveal';
import { faqs, FAQ as FAQType } from '../data/faqs';

export default function FAQ() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative px-5 pb-20 md:pb-24 min-h-screen z-10">
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full h-[1000px] z-0 pointer-events-none opacity-20 blur-[90px]"
        style={{
          top: '80px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse 100% 50% at center, rgba(76,29,149,1) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute left-1/2 w-full h-[700px] z-0 pointer-events-none mix-blend-screen"
        style={{
          top: '80px',
          transform: 'translate(-50%, -50%)',
          maskImage: 'radial-gradient(ellipse 100% 40% at center, black 5%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 40% at center, black 5%, transparent 80%)',
        }}
      >
        <img
          src="/gallery/FAQbrain.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Black fade overlay — fades brain into black background */}
      <div
        className="absolute left-0 w-full pointer-events-none z-[1]"
        style={{
          top: '350px',
          height: '600px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 6, 18, 0.85) 35%, #0a0612 70%)',
        }}
      />

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-center text-xs md:text-sm font-medium uppercase tracking-[0.4em] text-white mb-14 md:mb-20">
          FREQUENTLY ASKED QUESTION
        </p>

        <div className="border-t border-white/10 relative z-10">
          {faqs.map((faq: FAQType, index: number) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                className="border-b border-white/10 py-7 md:py-12"
                onMouseEnter={() => setHoveredId(faq.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex flex-col gap-3 md:hidden">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-7 h-7 flex items-center justify-center text-[12px] font-bold mt-0.5 transition-colors duration-200 ${
                        hoveredId === faq.id
                          ? 'bg-[#7C3AED] text-white'
                          : 'bg-white/10 text-text-dim'
                      }`}
                    >
                      {faq.id}
                    </div>
                    <h3
                      className={`text-[15px] font-medium leading-tight transition-colors duration-200 ${
                        hoveredId === faq.id ? 'text-[#7C3AED]' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-sm text-white leading-relaxed pl-10">
                    {faq.answer}
                  </p>
                </div>
                <div className="hidden md:grid md:grid-cols-[60px_1fr_1.5fr] md:items-start">
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-[12px] font-bold transition-colors duration-200 ${
                      hoveredId === faq.id
                        ? 'bg-[#7C3AED] text-white'
                        : 'bg-white/10 text-text-dim'
                    }`}
                  >
                    {faq.id}
                  </div>

                  <div className="px-10">
                    <h3
                      className={`text-[17px] font-medium leading-tight transition-colors duration-200 ${
                        hoveredId === faq.id ? 'text-[#7C3AED]' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[15px] text-white leading-relaxed max-w-xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
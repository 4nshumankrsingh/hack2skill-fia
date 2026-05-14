import Reveal from './ui/Reveal';

function CrossIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-40 pointer-events-none"
    >
      <path
        d="M12 4V20M4 12H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BracketWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center group ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-white"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M 12 0 L 0 0 L 0 12" />
        <path d="M 0 88 L 0 100 L 12 100" />
        <path d="M 88 0 L 100 0 L 100 12" />
        <path d="M 100 88 L 100 100 L 88 100" />
      </svg>
      {children}
    </div>
  );
}

export default function WhatIsHackathon() {
  return (
    <section id="what-is" className="relative py-24 px-6 bg-transparent z-10 overflow-hidden">
      {/* Left glow */}
      <div
        className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Right glow */}
      <div
        className="absolute top-2/3 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <Reveal>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
              WHAT IS THE
              <br />
              HACKATHON?
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted to uncover
              pioneering ideas in science, technology, and system design. As technological
              advancements accelerate globally, this initiative aims to bridge academic
              knowledge with practical implementation.
            </p>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-12 max-w-xl">
              Participants will work on challenge statements designed by leading R&amp;D
              units, applying theoretical expertise to build innovative prototypes and
              solutions with potential real&#8209;world application.
            </p>

            <div className="mt-16">
              <span className="block text-white text-lg font-medium mb-6">
                Submission Closing In:
              </span>
              <div className="flex flex-wrap gap-10 items-stretch">
                {/* Timer Box */}
                <BracketWrapper>
                  <div className="bg-[#363539] text-white text-xl font-medium px-10 py-5 min-w-[260px] flex items-center justify-center border border-white/5">
                    16d 12h 42m 31s
                  </div>
                </BracketWrapper>

                {/* Register Now Button */}
                <BracketWrapper>
                  <a
                    href="#register"
                    className="relative text-white text-xl font-medium px-10 py-5 min-w-[260px] flex items-center justify-center transition-all duration-200 hover:brightness-110 border border-white/5"
                    style={{
                      background: 'linear-gradient(131.57deg, #7C3AED 2.28%, #A78BFA 53.69%, #EEE7FB 95.92%)',
                    }}
                  >
                    Register Now
                  </a>
                </BracketWrapper>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Gallery — Absolute positioned collage */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto" style={{ width: '699px', height: '920px' }}>
            {/* 1. typing.jpg — top:109, left:78 */}
            <div
              className="absolute overflow-hidden cursor-pointer z-20 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-125 hover:shadow-2xl border border-white/5 bg-[#111]"
              style={{ top: 109, left: 78, width: 146, height: 268 }}
            >
              <img src="/hackathon/typing.jpg" alt="Typing on laptop" loading="lazy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -left-2"><CrossIcon /></div>
              <div className="absolute -bottom-2 -right-2"><CrossIcon /></div>
            </div>

            {/* 2. globe.jpg — top:0, left:375 */}
            <div
              className="absolute overflow-hidden cursor-pointer z-10 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-125 hover:shadow-2xl border border-white/5 bg-[#111]"
              style={{ top: 0, left: 375, width: 324, height: 377 }}
            >
              <img src="/hackathon/globe.jpg" alt="Globe" loading="lazy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -left-2"><CrossIcon /></div>
            </div>

            {/* 3. VR.jpg — top:377, left:0 */}
            <div
              className="absolute overflow-hidden cursor-pointer z-30 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-125 hover:shadow-2xl border border-white/5 bg-[#111]"
              style={{ top: 377, left: 0, width: 375, height: 223 }}
            >
              <img src="/hackathon/VR.jpg" alt="VR headset" loading="lazy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -right-2"><CrossIcon /></div>
            </div>

            {/* 4. presentation.jpg — top:600, left:78 */}
            <div
              className="absolute overflow-hidden cursor-pointer z-40 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-125 hover:shadow-2xl border border-white/5 bg-[#111]"
              style={{ top: 600, left: 78, width: 297, height: 320 }}
            >
              <img src="/hackathon/presentation.jpg" alt="Presentation" loading="lazy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* 5. students.jpg — top:600, left:375 */}
            <div
              className="absolute overflow-hidden cursor-pointer z-20 transition-all duration-300 hover:scale-105 hover:z-50 hover:brightness-125 hover:shadow-2xl border border-white/5 bg-[#111]"
              style={{ top: 600, left: 375, width: 324, height: 188 }}
            >
              <img src="/hackathon/students.jpg" alt="Students" loading="lazy" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-2 -left-2"><CrossIcon /></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 bg-transparent z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gallery/hero-section-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          loading="eager"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0612] to-transparent z-10" />
      </div>

      {/* Hero Glow (Desktop) */}
      <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full z-[-1] animate-pulse-glow opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        {/* ============ MOBILE LAYOUT ============ */}
        <div className="flex flex-col items-center lg:hidden">
          {/* Title */}
          <Reveal>
            <h1 className="flex flex-col items-center font-satoshi">
              <span className="text-[clamp(2.5rem,10vw,3.5rem)] font-black text-white leading-[1.1] tracking-[-0.05em] uppercase">
                CODE THE
              </span>
              <span className="text-[clamp(2.5rem,10vw,3.5rem)] font-black leading-[1.1] tracking-[-0.05em] uppercase text-transparent [-webkit-text-stroke:1px_#a855f7] opacity-80 mt-1">
                FUTURE
              </span>
            </h1>
          </Reveal>

          {/* Character */}
          <Reveal delay={0.15}>
            <div className="relative z-30 pointer-events-none w-[220px] h-[360px] sm:w-[240px] sm:h-[400px]">
              <motion.img
                src="/gallery/lady.png"
                alt="Hackathon Character"
                className="absolute inset-0 w-full h-full object-contain object-bottom"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={0.2}>
            <p className="font-bold tracking-[0.2em] text-[9px] sm:text-[10px] uppercase mt-2">
              WHERE INNOVATION BECOMES REALITY
            </p>
          </Reveal>

          {/* CTA Button - Mobile */}
          <Reveal delay={0.3}>
            <div className="relative mt-6 mb-8 p-[6px]">
              {/* Square brackets SVG */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="square"
              >
                <path d="M 10 0 L 0 0 L 0 10" />
                <path d="M 90 0 L 100 0 L 100 10" />
                <path d="M 0 90 L 0 100 L 10 100" />
                <path d="M 100 90 L 100 100 L 90 100" />
              </svg>
              <a
                href="#register"
                className="relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white whitespace-nowrap transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(131.57deg, rgba(124, 58, 237, 0.74) 2.28%, rgba(167, 139, 250, 0.74) 53.69%, rgba(238, 231, 251, 0.74) 95.92%)',
                  borderRadius: '2px',
                  color: '#FFFFFF',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                }}
              >
                Register Now
              </a>
            </div>
          </Reveal>
        </div>

        {/* ============ DESKTOP LAYOUT ============ */}
        <div className="hidden lg:flex items-center justify-between w-full h-full">
          {/* Left: Character + Tagline */}
          <div className="relative z-30 pointer-events-none translate-y-10">
            <Reveal>
              <img
                src="/gallery/lady.png"
                alt="Hackathon Character"
                className="w-[350px] h-[500px] object-contain object-bottom"
              />
              <p className="mt-6 text-sm font-bold tracking-[0.2em] uppercase text-left">
                WHERE INNOVATION BECOMES REALITY
              </p>
            </Reveal>
          </div>

          {/* Center/Right: Title (positioned absolutely) */}
          <div className="absolute left-[17%] top-[5%] pointer-events-none z-10">
            <Reveal>
              <h1 className="relative font-satoshi">
                <span className="text-[80px] font-black text-white leading-[1.1] tracking-[-0.05em] uppercase block relative z-20">
                  CODE THE
                </span>
                <span className="text-[80px] font-black leading-[1.1] tracking-[-0.05em] uppercase text-transparent [-webkit-text-stroke:1px_#a855f7] opacity-80 block absolute top-[95%] left-20 z-10">
                  FUTURE
                </span>
              </h1>
            </Reveal>
          </div>

          {/* Bottom Right: CTA - Desktop */}
          <div className="absolute bottom-20 right-12 z-50">
            <Reveal delay={0.2}>
              <div className="relative p-[8px]">
                {/* Square brackets SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                >
                  <path d="M 10 0 L 0 0 L 0 10" />
                  <path d="M 90 0 L 100 0 L 100 10" />
                  <path d="M 0 90 L 0 100 L 10 100" />
                  <path d="M 100 90 L 100 100 L 90 100" />
                </svg>
                <a
                  href="#register"
                  className="relative inline-flex items-center justify-center text-white font-bold whitespace-nowrap transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(131.57deg, rgba(124, 58, 237, 0.74) 2.28%, rgba(167, 139, 250, 0.74) 53.69%, rgba(238, 231, 251, 0.74) 95.92%)',
                    borderRadius: '2px',
                    width: '262px',
                    height: '85px',
                    fontSize: '1.5rem',
                    color: '#FFFFFF',
                    textShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
                  }}
                >
                  Register Now
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
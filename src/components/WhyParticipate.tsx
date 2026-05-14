import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const benefits = [
  {
    title: 'Mentorship from Experts',
    description:
      'Gain invaluable insights and guidance from experienced technologists and domain experts.',
  },
  {
    title: 'Networking',
    description:
      'Connect with peers, professionals, and innovation leaders from across the nation.',
  },
  {
    title: 'Internship Opportunities',
    description:
      'Stand a chance to secure internships at top institutions and innovation labs.',
  },
  {
    title: 'Real-World Impact',
    description:
      'Contribute to meaningful challenges that aim to improve lives and systems at scale.',
  },
];

function AstronautCenter() {
  return (
    <div className="relative flex items-center justify-center w-full h-[280px] pointer-events-none overflow-hidden">
      <div className="absolute w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_70%)] blur-[18px] z-0" />

      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full border border-[#8b5cf6]/40 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />
      </motion.div>

      <motion.div
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-primary/30 z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />

        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a78bfa]/80 shadow-[0_0_5px_2px_rgba(139,92,246,0.6)]" />
      </motion.div>

      <motion.img
        src="/gallery/astronaut.png"
        alt="Floating astronaut"
        className="relative z-20 w-[120px] h-[160px] object-contain"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function DesktopAstronautCenter() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[860px] h-[860px] flex-shrink-0 z-10 pointer-events-none">
      {/* Glow */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.10)_0%,rgba(109,40,217,0.04)_50%,transparent_75%)] blur-[40px] z-0" />

      {/* Ring 1 */}
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full border border-[#8b5cf6]/40 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-primary/30 z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />

        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a78bfa]/80 shadow-[0_0_5px_2px_rgba(139,92,246,0.6)]" />
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full border border-primary/20 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />
      </motion.div>

      <div className="absolute w-[860px] h-[860px] rounded-full border border-primary/10 z-0" />

      {/* Astronaut */}
      <motion.img
        src="/gallery/astronaut.png"
        alt="Floating astronaut"
        className="relative z-20 w-[280px] h-[350px] object-contain"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function WhyParticipate() {
  return (
    <section
      id="why-participate"
      className="relative py-24 bg-transparent flex flex-col items-center z-10 overflow-hidden"
    >
      <h2 className="block text-center text-sm md:text-base font-bold uppercase tracking-[0.35em] text-[#a855f7] mb-16">
        Why Participate?
      </h2>

      {/* ───────── MOBILE LAYOUT ───────── */}
      <div className="flex flex-col items-center w-full gap-0 lg:hidden">
        <div className="w-full flex flex-col">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="bg-primary p-6 border-b border-white/10">
              <h3 className="text-lg font-black uppercase leading-tight mb-1">
                {benefit.title}
              </h3>

              <p className="text-white/85 text-xs leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <AstronautCenter />

        <div className="w-full flex flex-col">
          {benefits.slice(2, 4).map((benefit, index) => (
            <div
              key={index}
              className={`bg-primary p-6 ${
                index === 0 ? 'border-b border-white/10' : ''
              }`}
            >
              <h3 className="text-lg font-black uppercase leading-tight mb-1">
                {benefit.title}
              </h3>

              <p className="text-white/85 text-xs leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ───────── DESKTOP LAYOUT ───────── */}
      <div className="hidden lg:grid w-full grid-cols-[1fr_auto_1fr] items-stretch relative">
        {/* LEFT PANEL */}
        <Reveal>
          <div className="relative bg-primary flex flex-col justify-center gap-16 py-16 pl-14 pr-20 text-right h-full">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div key={index} className="relative">
                {/* RIGHT SIDE CONNECTOR */}
                <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 flex items-center z-20">
                  {/* white strip */}
                  <div className="w-4 h-14 bg-white" />

                  {/* purple extension */}
                  <div className="w-16 h-14 bg-primary" />
                </div>

                <h3 className="text-[2.15rem] font-black uppercase leading-tight mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/90 text-sm leading-relaxed font-medium ml-auto max-w-[260px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CENTER SPACER */}
        <div className="relative w-[520px] flex-shrink-0" />

        {/* RIGHT PANEL */}
        <Reveal>
          <div className="relative bg-primary flex flex-col justify-center gap-16 py-16 pr-14 pl-20 text-left h-full">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div key={index} className="relative">
                {/* LEFT SIDE CONNECTOR */}
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center z-20">
                  {/* purple extension */}
                  <div className="w-16 h-14 bg-primary" />

                  {/* white strip */}
                  <div className="w-4 h-14 bg-white" />
                </div>

                <h3 className="text-[2.15rem] font-black uppercase leading-tight mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/90 text-sm leading-relaxed font-medium max-w-[260px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* CENTER ASTRONAUT */}
        <DesktopAstronautCenter />
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import Reveal from './ui/Reveal';

const benefits = [
  {
    title: 'National Recognition',
    description: 'Get recognized at a national level for your innovative solutions and technical prowess.',
  },
  {
    title: 'Networking',
    description: 'Connect with peers, professionals, and innovation leaders from across the nation.',
  },
  {
    title: 'Skill Enhancement',
    description: 'Hone your technical skills and learn new technologies through hands-on building.',
  },
  {
    title: 'Real-World Impact',
    description: 'Contribute to meaningful challenges that aim to improve lives and systems at scale.',
  },
];

function AstronautCenter() {
  return (
    <div className="relative flex items-center justify-center w-full h-[280px] pointer-events-none overflow-hidden">
      {/* Glow Core */}
      <div className="absolute w-[120px] h-[120px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.7)_0%,rgba(109,40,217,0.3)_50%,transparent_70%)] blur-[14px] z-0 animate-pulse-glow" />

      {/* Orbit Rings */}
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

      <div className="absolute w-[360px] h-[360px] rounded-full border border-primary/10 z-0" />

      {/* Astronaut */}
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
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[900px] h-[900px] flex-shrink-0 z-10 pointer-events-none">
      {/* Glows */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.7)_0%,rgba(109,40,217,0.3)_50%,transparent_70%)] blur-[20px] z-0 animate-pulse-glow" />
      <div className="absolute w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,transparent_40%,rgba(124,58,237,0.25)_60%,transparent_75%)] blur-[8px] z-0 animate-pulse-glow [animation-delay:1.5s]" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,transparent_50%,rgba(91,33,182,0.2)_70%,transparent_85%)] blur-[30px] z-0 animate-pulse-glow [animation-duration:5s]" />

      {/* Orbit Rings */}
      <motion.div
        className="absolute w-[340px] h-[340px] rounded-full border border-[#8b5cf6]/40 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />
      </motion.div>
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full border border-dashed border-primary/30 z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_3px_rgba(139,92,246,0.9),0_0_16px_6px_rgba(109,40,217,0.5)]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a78bfa]/80 shadow-[0_0_5px_2px_rgba(139,92,246,0.6)]" />
      </motion.div>
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
    <section id="why-participate" className="relative py-24 bg-transparent flex flex-col items-center z-10">
      <h2 className="block text-center text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-white mb-16">
        Why Participate?
      </h2>

      <div className="flex flex-col items-center w-full gap-0 lg:hidden">
        {/* Top Cards */}
        <div className="w-full flex flex-col">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="bg-primary p-6 border-b border-white/10">
              <h3 className="text-lg font-black uppercase leading-tight mb-1">{benefit.title}</h3>
              <p className="text-white/85 text-xs leading-relaxed font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Astronaut Center */}
        <AstronautCenter />

        {/* Bottom Cards */}
        <div className="w-full flex flex-col">
          {benefits.slice(2, 4).map((benefit, index) => (
            <div
              key={index}
              className={`bg-primary p-6 ${
                index === 0 ? 'border-b border-white/10' : ''
              }`}
            >
              <h3 className="text-lg font-black uppercase leading-tight mb-1">{benefit.title}</h3>
              <p className="text-white/85 text-xs leading-relaxed font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex relative w-full flex-row items-center justify-between gap-0">
        {/* Left Cards */}
        <Reveal>
          <div className="relative bg-primary p-10 w-[32%] z-20 flex flex-col gap-10 text-right pl-20 pr-10">
            {/* Side Decor */}
            <div className="absolute top-0 right-0 h-full flex items-center pointer-events-none translate-x-full">
              <div className="flex flex-col gap-[60px]">
                <div className="w-5 h-[60px] bg-white -mx-[5px]" />
                <div className="w-20 h-[60px] bg-primary" />
                <div className="w-5 h-[60px] bg-white -mx-[5px]" />
                <div className="w-20 h-[60px] bg-primary" />
              </div>
            </div>

            {benefits.slice(0, 2).map((benefit, index) => (
              <div key={index}>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2">{benefit.title}</h3>
                <p className="text-white/90 text-xs leading-relaxed font-medium ml-auto max-w-[240px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Center Astronaut */}
        <DesktopAstronautCenter />

        {/* Right Cards */}
        <Reveal>
          <div className="relative bg-primary p-10 w-[32%] z-20 flex flex-col gap-10 text-left pr-20 pl-10 ml-auto">
            {/* Side Decor */}
            <div className="absolute top-0 left-0 h-full flex items-center flex-row-reverse pointer-events-none -translate-x-full">
              <div className="flex flex-col gap-[60px]">
                <div className="w-20 h-[60px] bg-primary" />
                <div className="w-5 h-[60px] bg-white -mx-[5px]" />
                <div className="w-20 h-[60px] bg-primary" />
                <div className="w-5 h-[60px] bg-white -mx-[5px]" />
              </div>
            </div>

            {benefits.slice(2, 4).map((benefit, index) => (
              <div key={index}>
                <h3 className="text-2xl font-black uppercase leading-tight mb-2">{benefit.title}</h3>
                <p className="text-white/90 text-xs leading-relaxed font-medium max-w-[240px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
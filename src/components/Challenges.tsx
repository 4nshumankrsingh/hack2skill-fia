import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { challenges } from '../data/challenges';

export default function Challenges() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleChallenge = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="challenges" className="relative py-24 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Purple section label */}
        <p className="text-center text-sm font-bold uppercase tracking-[0.4em] text-[#a855f7] mb-24">
          Challenges
        </p>

        <div className="border-t border-white/10">
          {challenges.map((challenge) => {
            const isActive = activeId === challenge.id;

            return (
              <div
                key={challenge.id}
                className={`border-b border-white/10 cursor-pointer transition-colors hover:bg-white/[0.01] ${
                  isActive ? 'bg-white/[0.04]' : ''
                }`}
                onClick={() => toggleChallenge(challenge.id)}
              >
                {/* ============ MOBILE LAYOUT ============ */}
                <div className="flex flex-col p-5 md:hidden">
                  {/* Header - ID and arrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-text-dim">[{challenge.id}]</span>
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ArrowUpRight
                        size={16}
                        className={isActive ? 'text-primary-light' : 'text-white/20'}
                      />
                    </motion.span>
                  </div>

                  {/* Description - ALWAYS VISIBLE */}
                  <p className="text-sm text-text-muted leading-relaxed mt-3">
                    {challenge.desc}
                  </p>

                  {/* Learn More - appears on click */}
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden flex flex-col gap-4 mt-3"
                    >
                      <div className="relative w-full h-[200px] border border-white/10 overflow-hidden shadow-2xl">
                        <img
                          src={challenge.img}
                          alt={`Challenge ${challenge.id}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      {/* Learn More button with visible square brackets */}
                      <div className="relative w-fit mt-2 p-1">
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="square"
                        >
                          <path d="M 10 0 L 0 0 L 0 10" />
                          <path d="M 90 0 L 100 0 L 100 10" />
                          <path d="M 0 90 L 0 100 L 10 100" />
                          <path d="M 100 90 L 100 100 L 90 100" />
                        </svg>
                        <button className="px-8 py-2.5 bg-gradient-to-r from-primary-deep to-[#8b5cf6] text-white text-[13px] font-medium hover:brightness-110 transition-all">
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* ============ DESKTOP LAYOUT ============ */}
                <div className="hidden md:flex flex-row items-start p-8 gap-12">
                  {/* Number */}
                  <div
                    className={`flex-shrink-0 w-20 flex items-start justify-start transition-colors ${
                      isActive ? 'text-white' : 'text-text-dim'
                    }`}
                  >
                    <span className="text-lg font-bold font-mono tracking-[-0.05em]">
                      [{challenge.id}]
                    </span>
                  </div>

                  {/* Image (expands on active) */}
                  <div
                    className={`flex-shrink-0 w-[340px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 ${
                      isActive ? 'h-[240px]' : 'h-16'
                    }`}
                  >
                    <img
                      src={challenge.img}
                      alt={`Challenge ${challenge.id}`}
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                    />
                  </div>

                  {/* Content - Description ALWAYS VISIBLE */}
                  <div className="flex-grow pt-1">
                    <p className="text-[15px] text-text-muted leading-relaxed max-w-xl">
                      {challenge.desc}
                    </p>

                    {/* Learn More - appears on click */}
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="relative w-fit p-1">
                          <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="square"
                          >
                            <path d="M 10 0 L 0 0 L 0 10" />
                            <path d="M 90 0 L 100 0 L 100 10" />
                            <path d="M 0 90 L 0 100 L 10 100" />
                            <path d="M 100 90 L 100 100 L 90 100" />
                          </svg>
                          <button className="px-8 py-3 bg-gradient-to-r from-primary-deep to-[#8b5cf6] text-white font-bold hover:brightness-110 transition-all shadow-[0_10px_15px_rgba(88,28,135,0.2)]">
                            Learn More
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 pt-1"
                  >
                    <ArrowUpRight
                      size={20}
                      className={isActive ? 'text-primary-light' : 'text-white/20'}
                    />
                  </motion.span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { challenges } from '../data/challenges';

export default function Challenges() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleChallenge = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="challenges" className="relative py-24 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Challenges"
          title=""
          className="mb-24"
        />

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
                <div className="flex flex-col p-5 gap-3 md:hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-text-dim">[{challenge.id}]</span>
                      <h3
                        className={`text-[15px] font-bold transition-colors ${
                          isActive ? 'text-primary-light' : 'text-white'
                        }`}
                      >
                        {challenge.title}
                      </h3>
                    </div>
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

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden flex flex-col gap-4"
                      >
                        <div className="relative w-full h-[200px] border border-white/10 overflow-hidden shadow-2xl">
                          <img
                            src={challenge.img}
                            alt={`Challenge ${challenge.id}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {challenge.desc}
                        </p>
                        <div className="relative w-fit mt-2">
                          <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/60" />
                          <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/60" />
                          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/60" />
                          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/60" />
                          <button className="px-8 py-2.5 bg-gradient-to-r from-primary-deep to-[#8b5cf6] text-white text-[13px] font-medium hover:brightness-110 transition-all">
                            Learn More
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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

                  {/* Content */}
                  <div className="flex-grow pt-1">
                    <h3
                      className={`text-xl font-bold mb-3 transition-colors ${
                        isActive ? 'text-primary-light' : 'text-white'
                      }`}
                    >
                      {challenge.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden flex flex-col gap-6"
                        >
                          <p className="text-[15px] text-text-muted leading-relaxed max-w-xl">
                            {challenge.desc}
                          </p>
                          <div className="relative w-fit">
                            <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/60" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/60" />
                            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/60" />
                            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/60" />
                            <button className="px-8 py-3 bg-gradient-to-r from-primary-deep to-[#8b5cf6] text-white font-bold hover:brightness-110 transition-all shadow-[0_10px_15px_rgba(88,28,135,0.2)]">
                              Learn More
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
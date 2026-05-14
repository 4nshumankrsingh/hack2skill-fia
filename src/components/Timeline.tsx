import { useState } from 'react';
import Reveal from './ui/Reveal';
import { timelineEvents } from '../data/timeline';
import { useDragScroll } from '../hooks/useDragScroll';

export default function Timeline() {
  const { ref, onMouseDown } = useDragScroll();
  const [activeIndex, setActiveIndex] = useState(
    () => Math.max(timelineEvents.findIndex((e) => e.active), 0)
  );

  const activeEvent = timelineEvents[activeIndex];

  return (
    <section id="timeline" className="relative py-24 pb-12 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <p className="text-center text-sm font-bold uppercase tracking-[0.4em] text-[#a855f7] mb-4">
          Hackathon Schedule
        </p>

        {/* Slider control */}
        <div className="flex items-center gap-4 max-w-xl mx-auto mb-14">
          <span className="text-xs text-white/40 whitespace-nowrap">Phase</span>
          <input
            type="range"
            min={0}
            max={timelineEvents.length - 1}
            step={1}
            value={activeIndex}
            onChange={(e) => setActiveIndex(Number(e.target.value))}
            className="flex-1 accent-[#a855f7] cursor-pointer"
          />
          <span className="text-xs font-medium text-[#a855f7] min-w-[6rem] text-right">
            {timelineEvents[activeIndex]?.title?.split(' ').slice(0, 2).join(' ')}
          </span>
        </div>

        {/* ── Mobile vertical layout ── */}
        <ol className="flex flex-col relative pl-0 md:hidden">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-primary-light/20" />

          {timelineEvents.map((event, index) => {
            const isPast = index < activeIndex;
            const isCurrent = index === activeIndex;
            const dotActive = isPast || isCurrent;

            return (
              <Reveal key={index} delay={index * 0.1}>
                <li
                  className="flex items-start gap-4 pb-8 relative last:pb-0 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <div
                    className={`flex-shrink-0 mt-1 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                      isCurrent
                        ? 'border-primary-light bg-primary-light shadow-[0_0_0_4px_rgba(168,85,247,0.15)]'
                        : dotActive
                        ? 'border-primary-light/60 bg-primary-light/60'
                        : 'border-primary-light/30 bg-transparent'
                    }`}
                  >
                    {isCurrent && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>

                  <div className="flex flex-col gap-2 pt-[2px]">
                    <h3
                      className={`text-sm font-bold leading-tight transition-colors duration-300 ${
                        isCurrent
                          ? 'text-primary-light'
                          : dotActive
                          ? 'text-primary-light/60'
                          : 'text-primary-light/40'
                      }`}
                    >
                      {event.title}
                    </h3>
                    <div className="w-24 h-[3px] border border-primary-light/30 relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-primary-light transition-all duration-700 ease-out"
                        style={{ width: dotActive ? '100%' : '0%' }}
                      />
                    </div>
                    <p className={`text-[13px] font-medium transition-colors duration-300 ${
                      isCurrent ? 'text-white' : 'text-white/50'
                    }`}>
                      {event.date}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>

        {/* ── Desktop horizontal layout ── */}
        <ol
          ref={ref}
          onMouseDown={onMouseDown}
          className="hidden md:flex overflow-x-auto gap-8 pb-4 cursor-grab select-none scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {timelineEvents.map((event, index) => {
            const isPast = index < activeIndex;
            const isCurrent = index === activeIndex;
            const isFuture = index > activeIndex;

            return (
              <Reveal key={index} delay={index * 0.08}>
                <li
                  className="flex-shrink-0 w-[220px] flex flex-col items-start cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <h3
                    className={`text-base font-bold mb-5 h-12 leading-tight transition-colors duration-300 ${
                      isCurrent
                        ? 'text-primary-light'
                        : isPast
                        ? 'text-primary-light/60'
                        : 'text-primary-light/35'
                    }`}
                  >
                    {event.title}
                  </h3>

                  <div className="w-full h-[3px] mb-5 border border-primary-light/20 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-primary-light transition-all duration-700 ease-out"
                      style={{ width: isFuture ? '0%' : '100%' }}
                    />
                  </div>

                  <div className="flex items-center w-full mb-4">
                    <div
                      className={`w-[14px] h-[14px] rounded-full border-2 flex-shrink-0 transition-all duration-300 ${
                        isCurrent
                          ? 'border-primary-light bg-primary-light shadow-[0_0_0_4px_rgba(168,85,247,0.18)]'
                          : isPast
                          ? 'border-primary-light/60 bg-primary-light/60'
                          : 'border-primary-light/25 bg-transparent'
                      }`}
                    />
                    <div className="flex-1 h-px bg-primary-light/15 relative overflow-hidden ml-2">
                      <div
                        className="absolute inset-0 bg-primary-light/50 transition-all duration-700 ease-out"
                        style={{ width: isPast ? '100%' : isCurrent ? '50%' : '0%' }}
                      />
                    </div>
                  </div>

                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    isCurrent ? 'text-white' : 'text-white/45'
                  }`}>
                    {event.date}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>

        {/* ── Active event detail card ── */}
        {activeEvent && (
          <div
            key={activeIndex}
            className="mt-8 px-5 py-4 rounded-xl border border-primary-light/20 bg-primary-light/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-sm font-bold text-primary-light">
                {activeEvent.title}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2 py-0.5 rounded-full">
                Current
              </span>
            </div>
            <p className="text-sm text-white/60">{activeEvent.date}</p>
          </div>
        )}

      </div>
    </section>
  );
}
import Reveal from './ui/Reveal';
import { timelineEvents } from '../data/timeline';
import { useDragScroll } from '../hooks/useDragScroll';

export default function Timeline() {
  const { ref, onMouseDown } = useDragScroll();

  return (
    <section id="timeline" className="relative py-24 pb-12 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[0.4em] text-[#a855f7] mb-16">
          Hackathon Schedule
        </p>
        <ol className="flex flex-col relative pl-0 md:hidden">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-primary-light/20" />

          {timelineEvents.map((event, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <li className="flex items-start gap-4 pb-8 relative last:pb-0">
                <div
                  className={`flex-shrink-0 mt-1 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center z-10 ${
                    event.active
                      ? 'border-primary-light bg-primary-light'
                      : 'border-primary-light/40 bg-transparent'
                  }`}
                >
                  {event.active && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>

                <div className="flex flex-col gap-2 pt-[2px]">
                  <h3
                    className={`text-sm font-bold leading-tight ${
                      event.active ? 'text-primary-light' : 'text-primary-light/60'
                    }`}
                  >
                    {event.title}
                  </h3>
                  <div className="w-24 h-[3px] border border-primary-light/30 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-primary-light transition-all duration-1000 ease-out ${
                        event.active ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                  <p className="text-[13px] text-white/80 font-medium">{event.date}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <ol
          ref={ref}
          onMouseDown={onMouseDown}
          className="hidden md:flex overflow-x-auto gap-8 pb-12 cursor-grab select-none scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {timelineEvents.map((event, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <li className="flex-shrink-0 w-[300px] flex flex-col items-start pointer-events-none">
                <h3
                  className={`text-lg font-bold mb-6 h-14 ${
                    event.active ? 'text-primary-light' : 'text-primary-light/60'
                  }`}
                >
                  {event.title}
                </h3>
                <div className="w-full h-3 mb-6 border border-primary-light/30 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-primary-light transition-all duration-1000 ease-out ${
                      event.active ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
                <p className="text-base text-white font-medium">{event.date}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
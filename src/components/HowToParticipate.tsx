import { UserPlus, FileText, Search, MonitorPlay, Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const steps = [
  {
    icon: UserPlus,
    step: 'Step 1',
    title: 'Team Formation',
    description: 'Assemble a team of 3-4 passionate students from any Indian institution.',
  },
  {
    icon: FileText,
    step: 'Step 2',
    title: 'Idea Submission',
    description: 'Submit your innovative proposal based on the provided challenge statements.',
  },
  {
    icon: Search,
    step: 'Step 3',
    title: 'Initial Screening',
    description: 'Our jury evaluates the submissions based on creativity, feasibility, and impact.',
  },
  {
    icon: MonitorPlay,
    step: 'Step 4',
    title: 'Pitching Round',
    description: 'Shortlisted teams will present their prototypes to an expert panel.',
  },
  {
    icon: Send,
    step: 'Step 5',
    title: 'Final Results',
    description: 'Winners are announced and rewarded for their groundbreaking solutions.',
  },
];

export default function HowToParticipate() {
  return (
    <section id="how-to-participate" className="relative py-24 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading label="How to participate?" title="" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-10 mt-16">
          {steps.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div
                className={`flex flex-col items-center text-center sm:items-start sm:text-left ${
                  index === steps.length - 1
                    ? 'col-span-2 md:col-span-1 justify-self-center md:justify-self-auto max-w-[280px] md:max-w-none mx-auto'
                    : ''
                }`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#2a1a4a] border border-[#4c2d8a] flex items-center justify-center mb-5 md:mb-8 shadow-[0_10px_15px_rgba(88,28,135,0.2)]">
                  <item.icon className="w-7 h-7 md:w-9 md:h-9 text-primary-light" />
                </div>

                <span className="text-[10px] font-black text-primary-light tracking-[0.2em] uppercase px-3 py-1 bg-primary-light/10 rounded-full border border-primary-light/20 mb-3">
                  {item.step}
                </span>
                <h3 className="text-lg md:text-[22px] font-black leading-tight tracking-[-0.02em] mb-3 md:mb-5">
                  {item.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {word}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-[15px] text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { FileText, Users, Mountain, Rocket, Lightbulb } from 'lucide-react';
import Reveal from './ui/Reveal';

const steps = [
  {
    icon: FileText,
    title: 'Register for Hackathon',
    description: 'Sign up now to participatein the hackathon.',
  },
  {
    icon: Users,
    title: 'Form your Teams',
    description: 'Collaborate with like-minded individuals to form teams.',
  },
  {
    icon: Mountain,
    title: 'Choose a Challenge',
    description: 'Select from the list of challenges provided.',
  },
  {
    icon: Rocket,
    title: 'Innovate and Develop',
    description: 'Work on your solutions, supported by resources and mentorship.',
  },
  {
    icon: Lightbulb,
    title: 'Submit Your Solution',
    description: 'Present your innovative ideas for evaluation.',
  },
];

export default function HowToParticipate() {
  return (
    <section id="how-to-participate" className="relative py-24 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Purple Section Label */}
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.4em] text-[#a855f7] mb-16">
          How to participate?
        </h2>

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
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#2a1a4a] border border-[#4c2d8a] flex items-center justify-center mb-5 md:mb-8 shadow-[0_10px_15px_rgba(88,28,135,0.2)]">
                  <item.icon className="w-7 h-7 md:w-9 md:h-9 text-[#a855f7]" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-[22px] font-black leading-tight tracking-[-0.02em] mb-3 md:mb-5">
                  {item.title}
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
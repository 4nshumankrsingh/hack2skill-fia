import Reveal from './ui/Reveal';

const rewards = [
  {
    title: 'Mentorship from Experts',
    description: 'Work under the guidance of domain professionals and technology mentors.',
  },
  {
    title: 'Recognition and Internship Opportunities',
    description: 'Outstanding performers may receive offers for internships or collaboration opportunities.',
  },
];

export default function Rewards() {
  return (
    <section id="rewards" className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-bold uppercase tracking-[0.4em] text-[#a855f7] mb-16">
          Rewards and Benefits
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-2xl md:max-w-none mx-auto mt-12">
          {rewards.map((reward, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="group bg-white/5 backdrop-blur-sm border-l-2 border-r-2 border-primary/60 border-t-0 border-b-0 rounded-3xl p-6 md:p-8 hover:border-primary/90 transition-all duration-300 cursor-default">
                <h3 className="text-primary-light text-lg md:text-xl font-bold mb-3 md:mb-4 leading-tight group-hover:text-[#c084fc] transition-colors">
                  {reward.title}
                </h3>
                <p className="text-sm md:text-[15px] text-text-muted leading-relaxed">
                  {reward.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
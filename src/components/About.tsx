import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

const categories = [
  { title: 'Undergraduate Students' },
  { title: 'Graduate/ Postgraduate Students' },
  { title: 'PhD Students/ Research Scholars' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-transparent py-12 px-6 md:py-24 z-10"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0612] to-transparent z-0 pointer-events-none" />

      {/* Decorative blocks - Left */}
      <div className="hidden lg:flex absolute top-[20%] left-0 flex-col gap-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`left-${i}`}
            className={`w-20 h-10 bg-primary ${i % 2 === 1 ? 'translate-x-20' : ''}`}
          />
        ))}
      </div>

      {/* Decorative blocks - Right */}
      <div className="hidden lg:flex absolute top-[20%] right-0 flex-col items-end gap-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={`right-${i}`}
            className={`w-20 h-10 bg-primary ${i % 2 === 1 ? '-translate-x-20' : ''}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SectionHeading
          label="About Hackathon"
          title="WHO CAN PARTICIPATE?"
          description="Open to students from all Indian institutions, this hackathon welcomes creative minds across three major categories:"
        />

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors group cursor-default">
                {/* Dot Ring */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/40 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <h3 className="text-lg font-bold">{cat.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import Reveal from './ui/Reveal';

const categories = [
  { title1: 'Undergraduate', title2: 'Students' },
  { title1: 'Graduate/ Postgraduate', title2: 'Students' },
  { title1: 'PhD Students/', title2: 'Research Scholars' },
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

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-[#a855f7] mb-4">
          About Hackathon
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-6">
          <span className="block">WHO CAN</span>
          <span className="block">PARTICIPATE?</span>
        </h2>

        {/* Description */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating platform designed to
          foster innovation and creativity in the domain of advanced technology and futuristic
          solutions. Organized by the National Center for Applied Research and supported by
          Hack2skill, this hackathon invites undergraduate students, graduate/postgraduate
          students, and PhD researchers to collaborate and solve critical challenges.
        </p>

        {/* Apply Now Button */}
        <div className="mb-16">
          <button className="px-10 py-4 rounded-full bg-primary text-white font-semibold text-lg hover:bg-primary/80 transition-colors">
            Apply Now
          </button>
        </div>

        {/* Who Can Participate Sub-label */}
        <p className="text-sm font-semibold uppercase tracking-widest text-[#a855f7] mb-8">
          Who Can Participate?
        </p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {categories.map((cat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-colors cursor-default flex items-center justify-center min-h-[140px] overflow-visible">
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: '-80px',
                    left: '-80px',
                    width: '220px',
                    height: '220px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(168, 85, 247, 0.1) 45%, transparent 70%)',
                  }}
                />
                <div className="relative z-10 text-center">
                  <span className="text-lg font-bold block">{cat.title1}</span>
                  <span className="text-lg font-bold block">{cat.title2}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-white/60 text-sm">
          Note: Working Professionals are not eligible to participate in the hackathon.
        </p>
      </div>
    </section>
  );
}
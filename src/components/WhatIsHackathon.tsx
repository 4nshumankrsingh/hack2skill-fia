import Reveal from './ui/Reveal';

const galleryImages = [
  { src: '/hackathon/typing.jpg', alt: 'Typing on laptop' },
  { src: '/hackathon/globe.jpg', alt: 'Globe' },
  { src: '/hackathon/VR.jpg', alt: 'VR headset' },
  { src: '/hackathon/presentation.jpg', alt: 'Presentation' },
  { src: '/hackathon/students.jpg', alt: 'Students' },
];

export default function WhatIsHackathon() {
  return (
    <section id="what-is" className="relative py-24 px-6 bg-transparent z-10">
      <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <Reveal>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
              WHAT IS THE
              <br />
              HACKATHON?
            </h2>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 max-w-xl">
              The Lorem Ipsum Innovation Hackathon is a flagship event crafted to uncover
              pioneering ideas in science, technology, and system design. As technological
              advancements accelerate globally, this initiative aims to bridge academic
              knowledge with practical implementation.
            </p>
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-12 max-w-xl">
              Participants will work on challenge statements designed by leading R&amp;D
              units, applying theoretical expertise to build innovative prototypes and
              solutions with potential real‑world application.
            </p>

            {/* Submission Timer & CTA */}
            <div className="mt-16">
              <span className="block text-white text-lg font-medium mb-6">
                Submission Closing In:
              </span>
              <div className="flex flex-wrap gap-10 items-stretch">
                {/* Timer Box */}
                <div className="relative border border-white/5 bg-[#363539] text-white text-xl font-medium px-10 py-5 min-w-[260px] flex items-center justify-center"
                  style={{
                    // Corner brackets via pseudo-elements handled with inline style? We'll use simple borders.
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                  }}>
                  16d 12h 42m 31s
                </div>

                {/* Register Now Box */}
                <a
                  href="#register"
                  className="relative border border-white/5 text-white text-xl font-medium px-10 py-5 min-w-[260px] flex items-center justify-center transition-all duration-200 hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, #42296b, #55447a)',
                  }}
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal delay={0.2}>
          <div className="relative h-[500px] lg:h-[600px] w-full max-w-[500px] lg:max-w-[600px] mx-auto">
            {galleryImages.map((img, idx) => {
              const positions = [
                'top-[15%] left-[5%] w-[120px] h-[180px] z-20 lg:w-[160px] lg:h-[240px] lg:top-[10%] lg:left-[10%]',
                'top-[10%] right-[10%] w-[180px] h-[180px] z-10 lg:w-[240px] lg:h-[240px] lg:top-[5%] lg:right-[5%]',
                'top-[40%] left-[15%] w-[220px] h-[140px] z-30 lg:w-[280px] lg:h-[180px] lg:top-[40%] lg:left-[10%]',
                'bottom-[5%] left-[25%] w-[140px] h-[220px] z-20 lg:w-[180px] lg:h-[280px] lg:bottom-0 lg:left-[20%]',
                'bottom-[20%] right-[5%] w-[180px] h-[120px] z-10 lg:w-[240px] lg:h-[160px] lg:bottom-[20%] lg:right-0',
              ];
              return (
                <div
                  key={idx}
                  className={`absolute border border-white/5 bg-[#111] cursor-pointer transition-all duration-300 hover:scale-105 hover:z-[50] hover:brightness-125 hover:shadow-2xl ${positions[idx]}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
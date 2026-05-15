import { useState } from 'react';
import Reveal from './ui/Reveal';

function CrossIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        d="M8.44446 0.22168C8.69049 0.220525 8.90703 0.30693 9.07825 0.480469C9.24799 0.652582 9.33313 0.867719 9.33313 1.11133V7.55566H15.7775C16.0227 7.55566 16.2392 7.6412 16.4103 7.81348C16.5804 7.98496 16.6659 8.20016 16.6671 8.44434C16.6683 8.69037 16.5819 8.90691 16.4083 9.07812C16.2362 9.24786 16.0211 9.33301 15.7775 9.33301H9.33313V15.7773C9.33313 16.0226 9.24759 16.2391 9.07532 16.4102C8.90383 16.5803 8.68864 16.6658 8.44446 16.667C8.19843 16.6681 7.98188 16.5817 7.81067 16.4082C7.64093 16.2361 7.55579 16.021 7.55579 15.7773V9.33301H1.11145C0.866181 9.33301 0.649716 9.24747 0.478638 9.0752C0.308481 8.90371 0.223014 8.68852 0.221802 8.44434C0.220647 8.1983 0.307052 7.98176 0.480591 7.81055C0.652705 7.64081 0.867841 7.55566 1.11145 7.55566H7.55579V1.11133C7.55579 0.866059 7.64132 0.649594 7.8136 0.478516C7.98508 0.308359 8.20028 0.222892 8.44446 0.22168Z"
        fill="white"
        stroke="white"
        strokeWidth="0.444444"
      />
    </svg>
  );
}

function BracketWrapper({ children }: { children: React.ReactNode; className?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center p-[6px]">
      <span className="absolute top-0 left-0 w-3 h-3 border-t-[3px] border-l-[3px] border-white z-10 pointer-events-none" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-[3px] border-r-[3px] border-white z-10 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-[3px] border-l-[3px] border-white z-10 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-[3px] border-r-[3px] border-white z-10 pointer-events-none" />
      {children}
    </div>
  );
}

interface HoverImageProps {
  src: string;
  alt: string;
  style: React.CSSProperties;
  zIndex: number;
  label: string;
}

function HoverImage({ src, alt, style, zIndex, label }: HoverImageProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const tiltX = hovered ? mousePos.y * -8 : 0;
  const tiltY = hovered ? mousePos.x * 8 : 0;
  const glowX = hovered ? 50 + mousePos.x * 40 : 50;
  const glowY = hovered ? 50 + mousePos.y * 40 : 50;

  return (
    <div
      className="absolute cursor-pointer border border-white/5 bg-[#111]"
      style={{
        ...style,
        zIndex: hovered ? 50 : zIndex,
        overflow: 'hidden',
        transform: hovered
          ? `scale(1.06) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
          : 'scale(1) rotateX(0deg) rotateY(0deg)',
        transition: hovered
          ? 'transform 0.1s ease-out, box-shadow 0.2s ease-out'
          : 'transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease-out',
        boxShadow: hovered
          ? '0 20px 60px rgba(124,58,237,0.45), 0 8px 24px rgba(0,0,0,0.6)'
          : '0 0 0 transparent',
        transformStyle: 'preserve-3d',
        perspective: '600px',
        willChange: 'transform',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        style={{
          opacity: hovered ? 1 : 0.8,
          transition: 'opacity 0.3s ease, filter 0.3s ease',
          filter: hovered ? 'saturate(1.15) contrast(1.05)' : 'saturate(1) contrast(1)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.12) 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: hovered ? 'opacity 0.2s ease' : 'opacity 0.4s ease',
          mixBlendMode: 'screen',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-center gap-2"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
          transform: hovered ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        <span className="text-white/90 text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(167,139,250,0.5)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  );
}

export default function WhatIsHackathon() {
  return (
    <section id="what-is" className="relative py-24 px-6 bg-transparent z-10 overflow-hidden">
      <div
        className="absolute top-1/3 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-2/3 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

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
              solutions with potential real&#8209;world application.
            </p>

            <div className="mt-16">
              <span className="block text-white text-lg font-medium mb-6">
                Submission Closing In:
              </span>
              <div className="flex flex-wrap gap-10 items-stretch">
                {/* Timer Box */}
                <BracketWrapper>
                  <div className="bg-[#363539] text-white text-xl font-medium px-10 py-5 min-w-[260px] flex items-center justify-center border border-white/5">
                    16d 12h 42m 31s
                  </div>
                </BracketWrapper>

                {/* Register Now Button */}
                <BracketWrapper>
                  <a
                    href="#register"
                    className="relative text-white text-xl font-medium px-10 py-5 min-w-[260px] flex items-center justify-center transition-all duration-200 hover:brightness-110 border border-white/5"
                    style={{
                      background: 'linear-gradient(131.57deg, #7C3AED 2.28%, #A78BFA 53.69%, #EEE7FB 95.92%)',
                    }}
                  >
                    Register Now
                  </a>
                </BracketWrapper>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Gallery */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto" style={{ width: '699px', height: '920px', perspective: '1000px' }}>
            {/* 1. typing.jpg */}
            <HoverImage
              src="/hackathon/typing.jpg"
              alt="Typing on laptop"
              label="Build"
              zIndex={20}
              style={{ top: 109, left: 78, width: 146, height: 268 }}
            />
            <div className="absolute z-50 pointer-events-none" style={{ top: 367, left: 68 }}><CrossIcon /></div>
            <div className="absolute z-50 pointer-events-none" style={{ top: 367, left: 214 }}><CrossIcon /></div>

            {/* 2. globe.jpg */}
            <HoverImage
              src="/hackathon/globe.jpg"
              alt="Globe"
              label="Connect"
              zIndex={10}
              style={{ top: 0, left: 375, width: 324, height: 377 }}
            />
            <div className="absolute z-50 pointer-events-none" style={{ top: 367, left: 365 }}><CrossIcon /></div>

            {/* 3. VR.jpg */}
            <HoverImage
              src="/hackathon/VR.jpg"
              alt="VR headset"
              label="Innovate"
              zIndex={30}
              style={{ top: 377, left: 0, width: 375, height: 223 }}
            />
            <div className="absolute z-50 pointer-events-none" style={{ top: 590, left: 365 }}><CrossIcon /></div>

            {/* 4. presentation.jpg */}
            <HoverImage
              src="/hackathon/presentation.jpg"
              alt="Presentation"
              label="Present"
              zIndex={40}
              style={{ top: 600, left: 78, width: 297, height: 320 }}
            />
            <div className="absolute z-50 pointer-events-none" style={{ top: 590, left: 68 }}><CrossIcon /></div>

            {/* 5. students.jpg */}
            <HoverImage
              src="/hackathon/students.jpg"
              alt="Students"
              label="Collaborate"
              zIndex={20}
              style={{ top: 600, left: 375, width: 324, height: 188 }}
            />
            <div className="absolute z-50 pointer-events-none" style={{ top: 778, left: 365 }}><CrossIcon /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0612] pt-40 pb-12 overflow-hidden z-10">
      {/* Decorative image — ONLY in footer */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%)',
        }}
      >
        <img
          src="/gallery/footer-artboard.png"
          alt=""
          className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pt-20 border-t border-white/10">
          {/* Brand */}
          <div className="max-w-md">
            <a href="#hero" className="inline-block mb-6">
              <img
                src="/gallery/hack2skill-logo.png"
                alt="Hack2Skill Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed">
              A webpage design assigned by Hack2Skill for the assessment of React Developer Intern role.
            </p>
          </div>

          {/* Links, Social Icons & Copyright */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <div className="flex items-center gap-5 mb-6">
              {/* GitHub */}
              <a
                href="https://github.com/4nshumankrsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anshuman-kumar-singh-078b01316/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="#hero"
                className="text-zinc-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap gap-6 mb-8">
              <a
                href="#"
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              &copy; 2026 Future Intelligence Agency. All rights reserved.
              <br />
              Powered by Hack2Skill.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
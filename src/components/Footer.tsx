export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-32 pb-12 overflow-hidden z-10">
      {/* Decorative image */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0 opacity-80">
        <img
          src="/gallery/footer-artboard.png"
          alt=""
          className="w-full h-full object-contain object-bottom scale-150 translate-y-1/4"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 pt-20 border-t border-white/10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="text-4xl font-black tracking-tight mb-6">
              FIA<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Future Intelligence Agency - Bridging the gap between theory and futuristic implementation.
            </p>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
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
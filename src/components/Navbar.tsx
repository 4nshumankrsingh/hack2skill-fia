import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#how-to-participate', label: 'How to participate?' },
  { href: '#challenges', label: 'Challenges' },
  { href: '#timeline', label: 'Schedules' },
  { href: '#rewards', label: 'Rewards' },
  { href: '#faq', label: 'FAQs' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  return (
    <nav className="fixed top-4 left-3 right-3 md:top-6 md:left-4 md:right-4 z-50 flex flex-col items-center pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-3 md:pr-3 py-2 bg-white border border-white/20 shadow-xl transition-shadow duration-300 ${
            scrolled ? 'shadow-2xl' : 'shadow-xl'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
          >
            <img
              src="/gallery/hack2skill-logo.png"
              alt="FIA Hackathon Logo"
              className="h-5 md:h-6 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-800 hover:text-primary transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sign In Button */}
          <div className="flex items-center gap-1">
            <button
              className="hidden lg:inline-block px-4 py-2 md:px-6 md:py-2 bg-primary text-white rounded-full text-sm font-bold shadow-[0_4px_6px_rgba(124,58,237,0.2)] hover:bg-primary-deep transition-colors duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light/50"
              aria-label="Sign In"
            >
              Sign In
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-zinc-800 rounded-full hover:bg-zinc-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute top-16 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden pointer-events-auto lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col p-5 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[15px] font-semibold text-zinc-800 py-3 border-b border-zinc-100 last:border-none hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
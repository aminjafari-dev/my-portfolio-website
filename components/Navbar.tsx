import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ensureGsap } from '../lib/gsap';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const navRef = useRef<HTMLElement | null>(null);

  // Drop-in animation
  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 1.6 }
    );
  }, []);

  // Section-aware theming via data-theme attribute on <section>
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-theme]'));
    if (!sections.length) return;

    const update = () => {
      const probeY = 80;
      let current: 'light' | 'dark' = 'light';
      for (const s of sections) {
        const rect = s.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          current = (s.dataset.theme as 'light' | 'dark') ?? 'light';
          break;
        }
      }
      setTheme(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const isLight = theme === 'light';
  const fg = isLight ? 'text-ink' : 'text-paper';
  const fgMuted = isLight ? 'text-ink/60' : 'text-paper/60';
  const border = isLight ? 'border-ink/10' : 'border-paper/10';
  const surface = isLight ? 'bg-paper/70' : 'bg-ink/70';
  const buttonSolid = isLight
    ? 'bg-ink text-paper hover:bg-ink-soft'
    : 'bg-paper text-ink hover:bg-paper-soft';
  const logoSquare = isLight ? 'bg-ink text-paper' : 'bg-paper text-ink';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${fg}`}
    >
      <div className={`mx-3 md:mx-6 mt-3 md:mt-4 rounded-2xl backdrop-blur-md border ${border} ${surface} transition-colors duration-500`}>
        <div className="flex items-center justify-between px-4 md:px-5 h-14 md:h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <span className={`w-9 h-9 md:w-10 md:h-10 rounded-md grid place-items-center font-display text-base md:text-lg tracking-tight ${logoSquare}`}>
              AJ
            </span>
            <span className="hidden sm:block text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold">
              Design by <span className="opacity-60">Amin</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-xs uppercase tracking-[0.2em] font-medium rounded-md transition-opacity hover:opacity-100 ${fgMuted}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${buttonSolid}`}
            >
              Hire Me
            </a>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md ${fg}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden border-t ${border} px-4 py-3 flex flex-col gap-2`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-[0.2em] py-2 ${fgMuted}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={`mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-semibold ${buttonSolid}`}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ensureGsap } from '../lib/gsap';

const SOCIAL_LINKS = [
  { href: 'https://github.com/aminjafari-dev', label: 'GitHub' },
  { href: 'https://linkedin.com/in/aminjafari-dev', label: 'LinkedIn' },
  {
    href: 'https://stackoverflow.com/users/19699656/aminjafari-dev',
    label: 'Stack Overflow',
  },
] as const;

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const giantRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      if (giantRef.current) {
        gsap.from(giantRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: { trigger: giantRef.current, start: 'top 90%' },
        });
      }
    }, footerRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      data-theme="light"
      className="relative bg-paper text-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-28 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex items-start gap-4">
            <span className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-ink/20 grid place-items-center shrink-0">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
            </span>
            <h2
              className="font-display uppercase leading-[0.9] tracking-tight max-w-md"
              style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
            >
              Let&apos;s work
              <br />
              together
            </h2>
          </div>

          <a
            href="#contact"
            className="self-start md:self-end inline-flex items-center gap-3 px-6 py-4 rounded-full bg-ink text-paper text-xs uppercase tracking-[0.25em] font-semibold hover:bg-ink-soft transition-colors"
          >
            Send me a message
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div ref={giantRef} className="mt-16 md:mt-24">
          <h2
            className="font-display uppercase leading-[0.85] tracking-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(80px, 18vw, 320px)' }}
          >
            Amin Jafari
          </h2>
        </div>

        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-ink/15 flex flex-col md:flex-row gap-5 md:gap-8 md:items-center md:justify-between text-xs uppercase tracking-[0.2em] text-ink/60">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <span>© {new Date().getFullYear()} Amin Jafari</span>
            <span className="hidden md:inline opacity-40">·</span>
            <span>Built with React + GSAP</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

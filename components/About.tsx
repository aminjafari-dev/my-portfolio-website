import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Marquee from './Marquee';
import { HERO_SUBTITLE, MARQUEE_ITEMS } from '../constants';
import { ensureGsap } from '../lib/gsap';

const About: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const targets = [titleRef.current, paragraphRef.current, statusRef.current].filter(
      Boolean
    ) as HTMLElement[];
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      targets.forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          delay: i * 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      data-theme="dark"
      className="relative bg-ink text-paper overflow-hidden"
    >
      <Marquee
        items={MARQUEE_ITEMS}
        speed={28}
        className="border-y border-paper/10 py-5"
        itemClassName="font-display uppercase text-3xl md:text-5xl tracking-tight"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36 relative">
        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-paper/60">
          02 / 07
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div ref={titleRef} className="lg:col-span-6 flex items-start gap-3">
            <h2
              className="font-display uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(80px, 13vw, 220px)' }}
            >
              /About
            </h2>
            <ArrowUpRight
              className="w-10 h-10 md:w-16 md:h-16 mt-2 md:mt-3 stroke-[1.25]"
              aria-hidden="true"
            />
          </div>

          <div className="lg:col-span-6 lg:pt-10 flex flex-col gap-8">
            <p
              ref={paragraphRef}
              className="text-lg md:text-2xl leading-relaxed text-paper/85 max-w-2xl"
            >
              {HERO_SUBTITLE}
            </p>

            <div ref={statusRef} className="flex items-start gap-3 text-xs md:text-sm uppercase tracking-[0.2em] text-paper/60 max-w-md">
              <span className="block w-2 h-2 mt-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                Currently leading Flutter
                <br />
                at Entekhab Group, Esfahan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

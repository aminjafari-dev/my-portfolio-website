import React, { useEffect, useRef } from 'react';
import Marquee from './Marquee';
import { SKILLS, SKILL_TAGS } from '../constants';
import { ensureGsap } from '../lib/gsap';

const HALF = Math.ceil(SKILL_TAGS.length / 2);
const ROW_A = SKILL_TAGS.slice(0, HALF);
const ROW_B = SKILL_TAGS.slice(HALF);

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.from(headRef.current, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
        });
      }
      ScrollTrigger.batch(cardRefs.current.filter(Boolean) as HTMLElement[], {
        start: 'top 90%',
        onEnter: (els) =>
          gsap.from(els, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'expo.out',
            stagger: 0.06,
          }),
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      data-theme="light"
      className="relative bg-paper text-ink overflow-hidden"
    >
      {/* Tag marquees */}
      <div className="border-y border-ink/10 py-4 space-y-2 bg-paper">
        <Marquee
          items={ROW_A}
          speed={40}
          className="text-xl md:text-3xl"
          itemClassName="font-display uppercase tracking-tight"
          separator={<span aria-hidden className="mx-6 opacity-40">/</span>}
        />
        <Marquee
          items={ROW_B}
          speed={45}
          reverse
          className="text-xl md:text-3xl"
          itemClassName="font-display uppercase tracking-tight text-ink/40"
          separator={<span aria-hidden className="mx-6 opacity-40">/</span>}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-ink/60">
          04 / 07
        </div>

        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h2
              className="font-display uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(64px, 11vw, 180px)' }}
            >
              /Skills
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-ink/70 max-w-xl">
              The toolbox I reach for. Strong on Flutter and the surrounding production stack —
              Bloc, TDD, Firebase, CI/CD — with full-stack instincts honed across .NET and
              React/Node services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="border border-ink/15 rounded-2xl p-5 md:p-6 hover:border-ink transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-md bg-ink text-paper grid place-items-center group-hover:scale-105 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink/50">
                  {skill.category}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-3">{skill.name}</h3>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-ink/15 overflow-hidden">
                  <div
                    className="h-full bg-ink"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-[11px] font-mono text-ink/60">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

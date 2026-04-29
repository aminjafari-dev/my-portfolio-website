import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Languages, Plus, Minus } from 'lucide-react';
import { EXPERIENCE, EDUCATION, LANGUAGES } from '../constants';
import { ensureGsap } from '../lib/gsap';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [openId, setOpenId] = useState<string | null>(EXPERIENCE[0]?.id ?? null);

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
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'expo.out',
          delay: i * 0.04,
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });
    }, sectionRef);
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      data-theme="dark"
      className="relative bg-ink-soft text-paper overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-paper/60">
          03 / 07
        </div>

        <div ref={headRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-12 xl:gap-x-16 mb-12 md:mb-20">
          <div className="lg:col-span-7">
            <h2
              className="font-display uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(64px, 11vw, 180px)' }}
            >
              /Experience
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-paper/70 max-w-xl">
              A decade in mobile and web — seven years on production Flutter. From savings and
              enterprise apps to organization-wide engineering standards.
            </p>
          </div>
        </div>

        <ul className="border-t border-paper/15">
          {EXPERIENCE.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <li
                key={item.id}
                ref={(el) => { rowRefs.current[idx] = el; }}
                className="border-b border-paper/15 border-dotted"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full text-left py-7 md:py-9 grid grid-cols-12 gap-3 md:gap-6 items-baseline group"
                >
                  <span className="col-span-12 md:col-span-3 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-paper/60">
                    {item.period}
                  </span>
                  <span
                    className="col-span-10 md:col-span-7 font-display uppercase leading-[0.95] tracking-tight"
                    style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
                  >
                    {item.role}
                    <span className="block md:inline md:ml-3 text-paper/45 normal-case font-sans text-base md:text-lg tracking-normal">
                      {item.company}
                    </span>
                  </span>
                  <span className="col-span-2 md:col-span-2 flex justify-end">
                    <span className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-paper/30 grid place-items-center transition-transform group-hover:rotate-90">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="pb-8 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 md:pl-[25%]">
                      {item.description.map((line, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-[15px] leading-relaxed text-paper/75 flex gap-3"
                        >
                          <span aria-hidden="true" className="text-paper/40 mt-1.5">—</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          <div className="border border-paper/15 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 text-paper/60">
              <GraduationCap className="w-5 h-5" />
              <span className="text-[11px] uppercase tracking-[0.2em]">Education</span>
            </div>
            <p className="text-lg md:text-xl font-medium">{EDUCATION.degree}</p>
            <p className="text-paper/60 text-sm mt-1">{EDUCATION.school}</p>
            <p className="text-paper/40 text-xs mt-1 font-mono uppercase tracking-[0.2em]">
              {EDUCATION.date}
            </p>
          </div>
          <div className="border border-paper/15 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4 text-paper/60">
              <Languages className="w-5 h-5" />
              <span className="text-[11px] uppercase tracking-[0.2em]">Languages</span>
            </div>
            <ul className="space-y-2">
              {LANGUAGES.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between text-sm md:text-base"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-paper/55">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

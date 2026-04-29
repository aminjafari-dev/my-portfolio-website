import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../constants';
import { ensureGsap } from '../lib/gsap';

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    if (!sectionRef.current || !cardRef.current) return;

    let mm: gsap.MatchMedia | null = null;
    const ctx = gsap.context(() => {
      mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        const trigger = ScrollTrigger.create({
          trigger: cardRef.current!,
          start: 'top top+=96',
          end: '+=160%',
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          onUpdate: (self) => {
            const idx = Math.min(
              PROCESS_STEPS.length - 1,
              Math.floor(self.progress * PROCESS_STEPS.length)
            );
            setActive(idx);
          },
        });

        return () => trigger.kill();
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => {
      mm?.revert();
      ctx.revert();
    };
  }, []);


  return (
    <section
      id="process"
      ref={sectionRef}
      data-theme="light"
      className="relative bg-paper text-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-20 md:py-28 relative">
        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-ink/60 z-10">
          06 / 07
        </div>

        <div className="mb-10 md:mb-14 max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-ink/55">
            Process / Capabilities
          </span>
          <h2
            className="font-display uppercase leading-[0.9] tracking-tight mt-3"
            style={{ fontSize: 'clamp(40px, 6vw, 88px)' }}
          >
            How I take products from idea to scale.
          </h2>
        </div>

        <div
          ref={cardRef}
          className="bg-ink text-paper rounded-[28px] md:rounded-[36px] p-6 md:p-12 lg:p-16 min-h-[80vh] md:min-h-[86vh] grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 overflow-hidden"
        >
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-2 md:gap-3">
                {PROCESS_STEPS.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActive(i)}
                      className="text-left"
                    >
                      <span
                        className={`block font-display uppercase leading-[0.85] tracking-tight transition-colors duration-500 ${
                          isActive ? 'text-paper' : 'text-paper/15 hover:text-paper/40'
                        }`}
                        style={{ fontSize: 'clamp(56px, 11vw, 168px)' }}
                      >
                        {step.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 md:mt-12 max-w-xl">
              <p
                key={PROCESS_STEPS[active].id}
                className="text-base md:text-lg leading-relaxed text-paper/80"
              >
                {PROCESS_STEPS[active].description}
              </p>
              <div className="mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-mono text-paper/50">
                <span>{String(active + 1).padStart(2, '0')}</span>
                <span className="block w-12 h-px bg-paper/30" />
                <span>{String(PROCESS_STEPS.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px] md:min-h-0">
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden bg-paper/5">
              {PROCESS_STEPS.map((step, i) => (
                <img
                  key={step.id}
                  src={step.imageUrl}
                  alt={`${step.label} step`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ensureGsap } from '../lib/gsap';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const titleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const headRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Cursor follow + reveal animations
  useEffect(() => {
    const { gsap, ScrollTrigger } = ensureGsap();
    const list = listRef.current;
    const thumb = thumbRef.current;
    if (!list || !thumb) return;

    const xTo = gsap.quickTo(thumb, 'x', { duration: 0.5, ease: 'expo.out' });
    const yTo = gsap.quickTo(thumb, 'y', { duration: 0.5, ease: 'expo.out' });

    let primed = false;
    const onMove = (e: PointerEvent) => {
      const rect = thumb.getBoundingClientRect();
      const tx = e.clientX - rect.width / 2;
      const ty = e.clientY - rect.height / 2;
      if (!primed) {
        gsap.set(thumb, { x: tx, y: ty });
        primed = true;
      }
      xTo(tx);
      yTo(ty);
    };
    const onEnter = () => gsap.to(thumb, { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'expo.out' });
    const onLeave = () => {
      primed = false;
      gsap.to(thumb, { autoAlpha: 0, scale: 0.92, duration: 0.4, ease: 'expo.out' });
    };

    list.addEventListener('pointermove', onMove);
    list.addEventListener('pointerenter', onEnter);
    list.addEventListener('pointerleave', onLeave);

    const ctx = gsap.context(() => {
      titleRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          yPercent: 110,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });
      if (headRef.current) {
        gsap.from(headRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%' },
        });
      }
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scale: 0.85,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' },
        });
      }
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      list.removeEventListener('pointermove', onMove);
      list.removeEventListener('pointerenter', onEnter);
      list.removeEventListener('pointerleave', onLeave);
      ctx.revert();
    };
  }, []);

  // Spin CTA on hover
  const ctaSpin = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const { gsap } = ensureGsap();
    const el = ctaRef.current;
    const spin = ctaSpin.current;
    if (!el || !spin) return;
    let tween: gsap.core.Tween | null = null;
    const onEnter = () => {
      tween = gsap.to(spin, { rotate: 360, duration: 6, ease: 'none', repeat: -1 });
    };
    const onLeave = () => {
      tween?.kill();
      gsap.to(spin, { rotate: 0, duration: 0.6, ease: 'expo.out' });
    };
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      tween?.kill();
    };
  }, []);

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0];

  return (
    <section
      id="projects"
      ref={sectionRef}
      data-theme="light"
      className="relative bg-paper text-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative">
        <div className="absolute top-8 right-6 md:top-10 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-ink/60">
          05 / 07
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-20 items-end">
          <div ref={headRef} className="lg:col-span-7">
            <p className="text-2xl md:text-4xl leading-tight font-display uppercase tracking-tight max-w-2xl">
              Selected work — products I helped architect, build, and ship across Flutter mobile,
              web, and full-stack teams.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <a
              ref={ctaRef}
              href="#contact"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-ink grid place-items-center group hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              <span
                ref={ctaSpin}
                className="absolute inset-0 grid place-items-center"
                aria-hidden="true"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="cta-circle"
                      d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text className="fill-current text-[14px] uppercase tracking-[0.25em] font-medium">
                    <textPath href="#cta-circle">
                      Get in touch · Get in touch ·&nbsp;
                    </textPath>
                  </text>
                </svg>
              </span>
              <ArrowUpRight className="w-7 h-7 md:w-8 md:h-8 stroke-[1.5] relative z-10" />
            </a>
          </div>
        </div>

        <div
          ref={listRef}
          className="border-t border-ink/20 border-dotted relative"
          onPointerLeave={() => setActiveId(null)}
        >
          {PROJECTS.map((project, i) => {
            const isActive = activeId === project.id;
            return (
              <a
                key={project.id}
                href={project.link}
                onPointerEnter={() => setActiveId(project.id)}
                className="group relative grid grid-cols-12 items-center gap-3 md:gap-6 py-7 md:py-10 border-b border-ink/20 border-dotted transition-opacity"
                style={{ opacity: activeId && !isActive ? 0.35 : 1 }}
              >
                <span className="col-span-2 md:col-span-1 font-mono text-xs md:text-sm text-ink/55">
                  0{i + 1}
                </span>
                <span className="col-span-10 md:col-span-7 overflow-hidden leading-[0.95]">
                  <span
                    ref={(el) => { titleRefs.current[i] = el; }}
                    className="font-display uppercase tracking-tight inline-block"
                    style={{ fontSize: 'clamp(36px, 6vw, 96px)' }}
                  >
                    {project.title}
                  </span>
                </span>
                <span className="hidden md:block md:col-span-3 text-right text-xs md:text-sm uppercase tracking-[0.2em] text-ink/60">
                  {project.category}
                </span>
                <span className="hidden md:flex md:col-span-1 justify-end">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </span>
                <span className="col-span-12 md:hidden text-[11px] uppercase tracking-[0.2em] text-ink/55">
                  {project.category}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-semibold text-ink hover:opacity-70 transition-opacity"
          >
            View all our work
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Cursor-tracking thumbnail */}
      <div
        ref={thumbRef}
        className="pointer-events-none fixed top-0 left-0 z-30 w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl opacity-0 will-change-transform"
        aria-hidden="true"
      >
        <img
          src={activeProject?.imageUrl}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
          key={activeProject?.id}
        />
      </div>
    </section>
  );
};

export default Projects;

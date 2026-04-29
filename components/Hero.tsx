import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { ensureGsap } from '../lib/gsap';

const HERO_VIDEO_SRC = '/hero-scrub.mp4';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgTextRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const floatLeftRef = useRef<HTMLDivElement | null>(null);
  const floatRightRef = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const tl = gsap.timeline({ delay: 1.5 });

    if (bgTextRef.current) {
      tl.from(bgTextRef.current, {
        yPercent: 18,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
      });
    }
    if (portraitRef.current) {
      tl.from(
        portraitRef.current,
        { scale: 0.92, opacity: 0, duration: 1.2, ease: 'expo.out' },
        '-=0.9'
      );
    }
    [floatLeftRef.current, floatRightRef.current, paginationRef.current].forEach((el, i) => {
      if (!el) return;
      tl.from(el, { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, `-=${0.6 - i * 0.1}`);
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Scroll-controlled video: pin the hero and scrub the video's currentTime
  // proportionally to scroll progress. Waits for metadata so duration is known.
  useEffect(() => {
    const { ScrollTrigger } = ensureGsap();
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let st: ScrollTrigger | null = null;

    const setup = () => {
      if (!video.duration || !isFinite(video.duration)) return;
      st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=120%',
        pin: true,
        pinSpacing: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const t = self.progress * video.duration;
          if (!Number.isNaN(t)) {
            try {
              video.currentTime = t;
            } catch {
              /* seeking can throw if the buffer isn't ready; ignore */
            }
          }
        },
      });
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1 && video.duration && isFinite(video.duration)) {
      setup();
    } else {
      const onMeta = () => {
        setup();
        video.removeEventListener('loadedmetadata', onMeta);
      };
      video.addEventListener('loadedmetadata', onMeta);
    }

    return () => {
      st?.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      data-theme="light"
      className="relative min-h-screen w-full bg-paper text-ink overflow-hidden"
    >
      {/* Scroll-controlled background video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Decorative concentric circles */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-0">
        <svg
          width="120%"
          height="120%"
          viewBox="0 0 1200 1200"
          className="opacity-[0.07]"
          aria-hidden="true"
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <circle
              key={i}
              cx="600"
              cy="600"
              r={50 + i * 40}
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Pagination */}
      <div
        ref={paginationRef}
        className="absolute top-24 right-6 md:top-28 md:right-10 text-[11px] tracking-[0.2em] uppercase font-mono text-ink/60"
      >
        01 / 07
      </div>

      {/* Massive background name */}
      <div
        ref={bgTextRef}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none px-2"
      >
        <h1
          className="font-display uppercase whitespace-nowrap leading-[0.85] tracking-tight text-ink"
          style={{ fontSize: 'clamp(72px, 16vw, 260px)' }}
        >
          Amin&nbsp;Jafari
        </h1>
      </div>

      {/* Foreground portrait */}
      <div
        ref={portraitRef}
        className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[68vw] max-w-[480px] md:max-w-[560px]"
      >
        <div className="relative">
          <img
            src="/0.jpeg"
            alt="Portrait of Amin Jafari"
            className="w-full h-auto object-cover rounded-t-[40px] shadow-2xl"
            style={{ aspectRatio: '4 / 5' }}
          />
        </div>
      </div>

      {/* Floating tags */}
      <div
        ref={floatLeftRef}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 max-w-[170px] md:max-w-[210px]"
      >
        <div className="flex items-start gap-2 text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium text-ink/70 leading-snug">
          <span className="block w-2 h-2 mt-1 rounded-full bg-ink" />
          <span>
            Senior Flutter Engineer
            <br />
            &amp; Team Lead
          </span>
        </div>
      </div>

      <div
        ref={floatRightRef}
        className="absolute right-4 md:right-10 bottom-8 md:bottom-12 z-20 flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium text-ink/70"
      >
        <span>Scroll down</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
};

export default Hero;

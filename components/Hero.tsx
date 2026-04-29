import React, { useEffect, useRef, useState } from 'react';
import { ensureGsap } from '../lib/gsap';

const DESKTOP_HERO_VIDEO_SRC = '/hero-scrub.mp4';
const MOBILE_HERO_VIDEO_SRC = '/hero-scrub-vertical.mp4';
const MOBILE_VIDEO_QUERY = '(orientation: portrait), (max-width: 640px)';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState(DESKTOP_HERO_VIDEO_SRC);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_VIDEO_QUERY);
    const updateVideoSource = () => {
      setVideoSrc(mediaQuery.matches ? MOBILE_HERO_VIDEO_SRC : DESKTOP_HERO_VIDEO_SRC);
    };

    updateVideoSource();
    mediaQuery.addEventListener('change', updateVideoSource);

    return () => {
      mediaQuery.removeEventListener('change', updateVideoSource);
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
    let disposed = false;

    const setup = () => {
      if (disposed || st) return;
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

    const onMeta = () => {
      setup();
      video.removeEventListener('loadedmetadata', onMeta);
    };

    if (video.readyState >= 1 && video.duration && isFinite(video.duration)) {
      setup();
    } else {
      video.addEventListener('loadedmetadata', onMeta);
    }

    return () => {
      disposed = true;
      video.removeEventListener('loadedmetadata', onMeta);
      st?.kill();
    };
  }, [videoSrc]);

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
        src={videoSrc}
        className="pointer-events-none absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;

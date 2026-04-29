import React, { useEffect, useRef, useState } from 'react';
import { ensureGsap } from '../lib/gsap';

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const tl = gsap.timeline({
      onComplete: () => {
        setDone(true);
        onComplete?.();
      },
    });

    gsap.set(textRef.current, { opacity: 0, y: 12 });

    tl.to(textRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .to(textRef.current, { opacity: 0, y: -12, duration: 0.5, ease: 'power3.in' }, '+=0.6')
      .to(overlayRef.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.1');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
      aria-hidden="true"
    >
      <div ref={textRef} className="text-paper text-sm md:text-base tracking-[0.2em] uppercase">
        Design by <span className="font-semibold">Amin</span>
      </div>
    </div>
  );
};

export default Preloader;

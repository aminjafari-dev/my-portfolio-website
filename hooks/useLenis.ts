import { useEffect } from 'react';
import Lenis from 'lenis';
import { ensureGsap, gsap } from '../lib/gsap';

export function useLenis() {
  useEffect(() => {
    const { ScrollTrigger } = ensureGsap();

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.off('scroll', onScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}

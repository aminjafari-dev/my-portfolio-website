import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function ensureGsap() {
  if (registered) return { gsap, ScrollTrigger };
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export const EASE = {
  out: 'expo.out',
  inOut: 'expo.inOut',
  smooth: 'power3.out',
} as const;

export { gsap, ScrollTrigger };

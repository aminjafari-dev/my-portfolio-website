import React, { useEffect, useRef } from 'react';
import { ensureGsap } from '../lib/gsap';

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  separator?: React.ReactNode;
  className?: string;
  trackClassName?: string;
  itemClassName?: string;
}

const DEFAULT_SEP = <span aria-hidden="true" className="mx-8 opacity-60">✷</span>;

const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 30,
  reverse = false,
  separator = DEFAULT_SEP,
  className = '',
  trackClassName = '',
  itemClassName = '',
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    const track = trackRef.current;
    if (!track) return;

    const tween = reverse
      ? gsap.fromTo(
          track,
          { xPercent: -50 },
          { xPercent: 0, duration: speed, repeat: -1, ease: 'none' }
        )
      : gsap.fromTo(
          track,
          { xPercent: 0 },
          { xPercent: -50, duration: speed, repeat: -1, ease: 'none' }
        );

    return () => {
      tween.kill();
    };
  }, [speed, reverse]);

  const renderRow = (key: string) => (
    <div
      key={key}
      className={`flex shrink-0 items-center whitespace-nowrap ${itemClassName}`}
      aria-hidden={key === 'b'}
    >
      {items.map((item, i) => (
        <span key={`${key}-${i}`} className="flex items-center shrink-0">
          <span>{item}</span>
          {separator}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden ${className}`} role="marquee">
      <div
        ref={trackRef}
        className={`flex w-max will-change-transform ${trackClassName}`}
      >
        {renderRow('a')}
        {renderRow('b')}
      </div>
    </div>
  );
};

export default Marquee;

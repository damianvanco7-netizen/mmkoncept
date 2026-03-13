import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 4,
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <div ref={containerRef}>
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed">
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;

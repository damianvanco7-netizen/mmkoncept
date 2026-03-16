import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  const lines = [
    "MM Concept connects advanced technology with human intention",
    "from vision to architecture to execution.",
  ];

  const splitText = useMemo(() => {
    let wordIndex = 0;
    return lines.flatMap((line, lineIdx) => {
      const words = line.split(/(\s+)/).map((word) => {
        if (word.match(/^\s+$/)) return word;
        return (
          <span className="word inline-block" key={wordIndex++}>
            {word}
          </span>
        );
      });
      if (lineIdx < lines.length - 1) {
        words.push(<br key={`br-${lineIdx}`} />);
      }
      return words;
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const label = labelRef.current;
    if (!section || !content || !label) return;

    const wordElements = content.querySelectorAll(".word");
    const triggers: ScrollTrigger[] = [];

    // Ensure absolutely no blur
    gsap.set(wordElements, { filter: "none", willChange: "opacity" });

    // Pin the section for: text animation (120%) + reading pause (30%) + slide-over (50%) = 200%
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
    });
    triggers.push(pinTrigger);

    // Label fade in
    const labelAnim = gsap.fromTo(
      label,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=15%",
          scrub: true,
        },
      }
    );
    if (labelAnim.scrollTrigger) triggers.push(labelAnim.scrollTrigger);

    // Word opacity reveal — no blur, finishes at 120%
    const wordAnim = gsap.fromTo(
      wordElements,
      { opacity: 0.08 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top+=10%",
          end: "+=120%",
          scrub: true,
        },
      }
    );
    if (wordAnim.scrollTrigger) triggers.push(wordAnim.scrollTrigger);

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="h-screen bg-card flex items-center section-padding"
    >
      <div className="w-full">
        <p
          ref={labelRef}
          className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10 opacity-0"
        >
          Origin
        </p>
        <div ref={contentRef}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-relaxed max-w-5xl">
            {splitText}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

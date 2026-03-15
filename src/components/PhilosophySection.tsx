import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  const text =
    "Virtual Village emerged from life experiences where critical moments collided with digital complexity. This led to the ambition to create a coherent, trustworthy, human-centered digital environment for urban life.";

  const splitText = useMemo(() => {
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const label = labelRef.current;
    if (!section || !content || !label) return;

    const wordElements = content.querySelectorAll(".word");

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,
      pinSpacing: true,
    });

    gsap.fromTo(
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

    gsap.fromTo(
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

    // blur removed per design request

    return () => {
      pinTrigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
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

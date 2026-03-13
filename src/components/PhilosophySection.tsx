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

    // Pin the section while text reveals
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,
      pinSpacing: true,
    });

    // Fade in the label first
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

    // Word-by-word opacity reveal
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

    // Word-by-word blur reveal
    gsap.fromTo(
      wordElements,
      { filter: "blur(5px)" },
      {
        filter: "blur(0px)",
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
      <div className="max-w-4xl mx-auto">
        <p
          ref={labelRef}
          className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10 opacity-0"
        >
          Origin
        </p>
        <div ref={contentRef}>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed">
            {splitText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

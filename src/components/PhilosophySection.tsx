import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const lines = [
    "At MM Concept, we bridge the gap between high-level corporate strategy",
    "and human-centric digital solutions.",
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
    const cards = cardsRef.current;
    if (!section || !content || !label || !cards) return;

    const wordElements = content.querySelectorAll(".word");
    const triggers: ScrollTrigger[] = [];

    gsap.set(wordElements, { filter: "none", willChange: "opacity" });

    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
    });
    triggers.push(pinTrigger);

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
          end: "+=100%",
          scrub: true,
        },
      }
    );
    if (wordAnim.scrollTrigger) triggers.push(wordAnim.scrollTrigger);

    const cardsAnim = gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "+=120%",
          end: "+=60%",
          scrub: true,
        },
      }
    );
    if (cardsAnim.scrollTrigger) triggers.push(cardsAnim.scrollTrigger);

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="min-h-screen bg-card flex items-center section-padding py-20"
    >
      <div className="w-full">
        <p
          ref={labelRef}
          className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10 opacity-0"
        >
          Projects & Services
        </p>
        <div ref={contentRef}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-relaxed max-w-5xl">
            {splitText}
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 opacity-0">
          {/* Virtual Village Card */}
          <div className="p-8 neu-card group cursor-pointer flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Virtual Village</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
              </p>
            </div>
            <button className="pill-button text-sm mt-6 self-start inline-flex items-center gap-2">
              Explore Virtual Village <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Consulting & Strategy Card */}
          <div className="p-8 neu-card group cursor-pointer flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Consulting & Strategy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
              </p>
            </div>
            <button className="pill-button text-sm mt-6 self-start inline-flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

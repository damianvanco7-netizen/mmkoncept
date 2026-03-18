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
    "At mm concept, we bridge the gap between high-level corporate strategy",
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
    const cardElements = cards.querySelectorAll(".service-card");
    const triggers: ScrollTrigger[] = [];

    gsap.set(wordElements, { filter: "none", willChange: "opacity" });

    // Pin text section
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
          end: "+=120%",
          scrub: true,
        },
      }
    );
    if (wordAnim.scrollTrigger) triggers.push(wordAnim.scrollTrigger);

    // Cards scroll-triggered fade in
    cardElements.forEach((card, i) => {
      const cardAnim = gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
      if (cardAnim.scrollTrigger) triggers.push(cardAnim.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Pinned text reveal */}
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
            Projects & Services
          </p>
          <div ref={contentRef}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-relaxed max-w-5xl">
              {splitText}
            </h2>
          </div>
        </div>
      </section>

      {/* Cards section — scrolls naturally after pin */}
      <section className="bg-card section-padding pb-24 pt-10" ref={cardsRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="service-card neu-card-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Virtual Village</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
              </p>
            </div>
            <button className="pill-button-dark text-sm self-start flex items-center gap-2">
              Explore Village <ArrowRight size={16} />
            </button>
          </div>

          <div className="service-card neu-card-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">Consulting & Strategy</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
              </p>
            </div>
            <button className="pill-button-dark text-sm self-start flex items-center gap-2">
              Learn more <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhilosophySection;

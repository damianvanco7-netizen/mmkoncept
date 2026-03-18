import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
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
    const inner = innerRef.current;
    const content = contentRef.current;
    const label = labelRef.current;
    const cards = cardsRef.current;
    if (!section || !inner || !content || !label || !cards) return;

    const wordElements = content.querySelectorAll(".word");
    const cardElements = cards.querySelectorAll(".service-card");
    const triggers: ScrollTrigger[] = [];

    gsap.set(wordElements, { willChange: "opacity" });
    gsap.set(cards, { opacity: 0, y: 40 });
    gsap.set(cardElements, { opacity: 0, y: 20 });

    // Pin the section
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
    });
    triggers.push(pinTrigger);

    // Label fade in (0-10%)
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
          end: "+=10%",
          scrub: true,
        },
      }
    );
    if (labelAnim.scrollTrigger) triggers.push(labelAnim.scrollTrigger);

    // Word reveal (5-50%)
    const wordAnim = gsap.fromTo(
      wordElements,
      { opacity: 0.08 },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top+=5%",
          end: "+=90%",
          scrub: true,
        },
      }
    );
    if (wordAnim.scrollTrigger) triggers.push(wordAnim.scrollTrigger);

    // Cards container fade in (55-75%)
    const cardsContainerAnim = gsap.to(cards, {
      opacity: 1,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top-=110%",
        end: "+=40%",
        scrub: true,
      },
    });
    if (cardsContainerAnim.scrollTrigger) triggers.push(cardsContainerAnim.scrollTrigger);

    // Individual card stagger (60-80%)
    cardElements.forEach((card, i) => {
      const cardAnim = gsap.to(card, {
        opacity: 1,
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: `top top-=${115 + i * 8}%`,
          end: "+=30%",
          scrub: true,
        },
      });
      if (cardAnim.scrollTrigger) triggers.push(cardAnim.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="h-screen bg-card overflow-hidden section-padding"
    >
      <div ref={innerRef} className="w-full h-full flex flex-col justify-start pt-[12vh]">
        {/* Claim text */}
        <div>
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

        {/* Service cards — same pinned container */}
        <div ref={cardsRef} className="mt-16 md:mt-20">
          <p className="text-base text-muted-foreground mb-10">Explore our two core pillars:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
            <div className="service-card flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Virtual Village</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
              </p>
              <button className="text-foreground text-sm font-medium self-start flex items-center gap-2 hover:gap-3 transition-all">
                Explore Village <ArrowRight size={16} />
              </button>
            </div>

            <div className="service-card flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Consulting & Strategy</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
              </p>
              <button className="text-foreground text-sm font-medium self-start flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

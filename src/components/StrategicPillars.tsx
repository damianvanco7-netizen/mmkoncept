import { useEffect, useRef, useState } from "react";
import { Shield, Layers, Brain } from "lucide-react";

const pillars = [
  {
    id: "ai",
    label: "Contextual AI Layer",
    icon: Brain,
    title: "STAR Pro",
    description:
      "An adaptive intelligence layer built on advanced multimodal AI models. It integrates contextual signals — user preferences, real-time location, behavior patterns and environmental inputs — to guide navigation and support relevant decisions across the ecosystem.",
    tags: ["Multimodal AI", "Real-time Context", "Adaptive Navigation", "Decision Support"],
  },
  {
    id: "modularity",
    label: "System Modularity",
    icon: Layers,
    title: "System Modularity",
    description:
      "A unified platform architecture serving Citizens (B2C), Cities & Municipalities (B2G), and Local Businesses (B2B). Standardized core layers with locally adaptable modules.",
    tags: ["Standardized Core", "Local Adaptation", "Global Scale", "Long-term Infrastructure"],
  },
  {
    id: "ethics",
    label: "Ethical Data Environment",
    icon: Shield,
    title: "Ethical Data Environment",
    description:
      "Trust-based digital framework aligned with European data governance and AI regulation standards. Privacy-by-design architecture, transparent data usage, responsible AI principles.",
    tags: ["Privacy-by-Design", "EU AI Act Aligned", "Digital Sovereignty", "User Autonomy"],
  },
];

const StrategicPillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="pillars" className="py-28 md:py-36 bg-card section-padding">
      <div className="w-full">
        {/* Header — left aligned like Vectura */}
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Strategic Pillars
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground max-w-4xl">
            Built on Three Foundations
          </h2>
        </div>

        {/* Two-column scroll layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Left — Sticky navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-[40vh]">
              <nav className="flex flex-col gap-1">
                {pillars.map((pillar, i) => (
                  <button
                    key={pillar.id}
                    onClick={() => {
                      cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="text-left transition-all duration-300"
                  >
                    <span
                      className={`flex items-center gap-3 text-lg font-medium transition-all duration-300 ${
                        i === activeIndex
                          ? "text-foreground"
                          : "text-muted-foreground/40"
                      }`}
                    >
                      {i === activeIndex && (
                        <span className="inline-block w-4 text-muted-foreground/60">↳</span>
                      )}
                      {pillar.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right — Scrollable cards */}
          <div className="flex flex-col gap-16">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  ref={(el) => { cardRefs.current[i] = el; }}
                >
                  {/* Image placeholder */}
                  <div className="w-full aspect-[16/10] rounded-2xl bg-muted/30 neu-card flex items-center justify-center mb-8 overflow-hidden">
                    <div className="w-16 h-16 rounded-2xl neu-inset flex items-center justify-center">
                      <Icon className="w-8 h-8 text-muted-foreground/50" />
                    </div>
                  </div>

                  {/* Content below card */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    {/* Left — title + description */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Right — pill tags */}
                    <div className="flex flex-wrap md:flex-col gap-2 md:w-56 flex-shrink-0">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-xs font-medium rounded-full neu-inset text-foreground whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile label */}
                  <p className="lg:hidden text-xs font-semibold tracking-widest text-muted-foreground uppercase mt-6">
                    {pillar.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;

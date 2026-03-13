import { useState } from "react";
import { Shield, Layers, Brain, ArrowRight } from "lucide-react";

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
  const active = pillars[activeIndex];
  const Icon = active.icon;

  return (
    <section id="pillars" className="py-32 md:py-44 bg-card section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header — right-aligned like Vectura */}
        <div className="text-right mb-20">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Strategic Pillars</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Built on Three
            <br />
            Foundations
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl ml-auto">
            Core architectural layers designed for scalability, ethics, and intelligent automation.
          </p>
        </div>

        {/* Two-column layout: tabs left, content right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-start">
          {/* Left — Vertical tabs */}
          <div className="flex flex-col gap-2">
            {pillars.map((pillar, i) => (
              <button
                key={pillar.id}
                onClick={() => setActiveIndex(i)}
                className={`group flex items-center justify-between text-left px-6 py-5 rounded-2xl transition-all duration-300 ${
                  i === activeIndex
                    ? "neu-card"
                    : "hover:bg-muted/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <pillar.icon className={`w-5 h-5 transition-colors duration-300 ${
                    i === activeIndex ? "text-foreground" : "text-muted-foreground/40"
                  }`} />
                  <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                    i === activeIndex ? "text-foreground" : "text-muted-foreground/50"
                  }`}>
                    {pillar.label}
                  </span>
                </div>
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                  i === activeIndex
                    ? "text-foreground opacity-100 translate-x-0"
                    : "text-muted-foreground/30 opacity-0 -translate-x-2"
                }`} />
              </button>
            ))}
          </div>

          {/* Right — Active pillar content */}
          <div
            key={active.id}
            className="p-10 md:p-12 neu-card animate-in fade-in slide-in-from-right-4 duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center">
                <Icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">{active.label}</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{active.title}</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">{active.description}</p>
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full neu-inset text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;

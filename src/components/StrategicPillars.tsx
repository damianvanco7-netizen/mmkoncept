import { useState } from "react";
import mockup1 from "@/assets/vv-app-mockup-1.jpg";
import mockup2 from "@/assets/vv-app-mockup-2.jpg";
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
  const active = pillars[activeIndex];
  const Icon = active.icon;

  return (
    <section id="pillars" className="py-28 md:py-36 bg-card section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Strategic Pillars</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Built on Three Foundations
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-16">
          {pillars.map((pillar, i) => (
            <button
              key={pillar.id}
              onClick={() => setActiveIndex(i)}
              className={`px-4 md:px-6 py-3 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                i === activeIndex
                  ? "neu-card text-foreground shadow-md"
                  : "text-muted-foreground/50 hover:text-muted-foreground"
              }`}
            >
              {pillar.label}
            </button>
          ))}
        </div>

        {/* Active Pillar Content — uniform layout */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 neu-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center">
                <Icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">{active.label}</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{active.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{active.description}</p>
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full neu-inset text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-foreground w-6" : "bg-muted-foreground/30 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;

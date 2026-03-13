import { Heart, Building2, Palette, Car, GraduationCap, Store } from "lucide-react";
import ConcentricCircles from "@/components/ConcentricCircles";

const modules = [
  {
    icon: Heart,
    title: "Health",
    description: "Unified access to healthcare services, emergency support and wellness resources.",
    size: "md:col-span-2",
  },
  {
    icon: Building2,
    title: "City",
    description: "Municipal services, civic participation and urban infrastructure access.",
    size: "md:col-span-1",
  },
  {
    icon: Palette,
    title: "Culture",
    description: "Local events, cultural venues and community engagement.",
    size: "md:col-span-1",
  },
  {
    icon: Car,
    title: "Mobility",
    description: "Integrated transport, routing and urban mobility solutions.",
    size: "md:col-span-1",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning platforms, skill development and educational resources.",
    size: "md:col-span-1",
  },
  {
    icon: Store,
    title: "Local Economy",
    description: "Support for local businesses, marketplace and commerce.",
    size: "md:col-span-2",
  },
];

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="relative py-28 md:py-36 bg-warm-white section-padding overflow-hidden">
      <ConcentricCircles />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Modules</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            A Living Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Six integrated modules creating a seamless digital experience for urban life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {modules.map(({ icon: Icon, title, description, size }) => (
            <div
              key={title}
              className={`${size} p-8 neu-card group cursor-default`}
            >
              <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;

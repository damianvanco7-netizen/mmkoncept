import { Heart, Building2, Palette, Car, GraduationCap, Store } from "lucide-react";

const modules = [
  {
    icon: Building2,
    title: "Municipal Services",
    description: "Streamlined access to city administration, permits and public infrastructure.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Unified access to healthcare services, emergency support and wellness resources.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning platforms, skill development and educational resources.",
  },
  {
    icon: Car,
    title: "Mobility",
    description: "Integrated transport, routing and urban mobility solutions.",
  },
  {
    icon: Palette,
    title: "Culture",
    description: "Local events, cultural venues and community engagement.",
  },
  {
    icon: Store,
    title: "Local Economy",
    description: "Support for local businesses, marketplace and commerce.",
  },
];

const VirtualVillageIntro = () => {
  return (
    <section
      id="virtual-village"
      className="relative rounded-t-[2.5rem] bg-warm-white text-foreground py-28 md:py-36 section-padding z-20 -mt-16"
    >
      <div className="w-full">
        {/* Label */}
        <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-muted-foreground">
          Flagship Platform
        </p>

        {/* Heading + Subtitle row — Vectura layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          {/* Left — Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-3xl">
            Virtual Village —{" "}
            <span className="text-muted-foreground">
              One Ecosystem. Clear Structure. Contextual Intelligence.
            </span>
          </h2>

          {/* Right — Subtitle, bottom-aligned with heading */}
          <div className="md:max-w-sm flex-shrink-0">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Virtual Village is a modular AI-powered digital ecosystem — unified,
              personalised, structured, and seamless for citizens, cities and
              services.
            </p>
          </div>
        </div>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-8 neu-card group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 neu-inset">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualVillageIntro;

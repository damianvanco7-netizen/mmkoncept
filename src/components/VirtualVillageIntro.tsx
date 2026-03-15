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
      className="relative -mt-8 rounded-t-[2.5rem] bg-primary text-primary-foreground py-28 md:py-36 section-padding z-10"
    >
      <div className="w-full">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-primary-foreground/50">
            Flagship Platform
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 max-w-4xl">
            Virtual Village —{" "}
            <span className="text-primary-foreground/60">
              One Ecosystem. Clear Structure. Contextual Intelligence.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl leading-relaxed">
            Virtual Village is a modular AI-powered digital ecosystem — unified,
            personalised, structured, and seamless for citizens, cities and
            services.
          </p>
        </div>

        {/* 3x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-8 neu-card-dark group cursor-default"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "hsl(18 40% 10%)",
                  boxShadow:
                    "inset 3px 3px 6px hsl(18 100% 2%), inset -3px -3px 6px hsl(18 30% 12%)",
                }}
              >
                <Icon className="w-5 h-5 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed">
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

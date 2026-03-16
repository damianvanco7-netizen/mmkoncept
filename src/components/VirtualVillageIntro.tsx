import { Heart, Building2, Palette, Car, GraduationCap, Store } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileCarousel from "@/components/MobileCarousel";
import cityVvHero from "@/assets/city-vv-hero.png";

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

const ModuleCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="p-8 neu-card group cursor-default h-full flex flex-col">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 neu-inset">
      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const VirtualVillageIntro = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="virtual-village"
      className="relative rounded-t-[2.5rem] bg-warm-white text-foreground py-28 md:py-36 section-padding z-10 -mt-[100vh]"
    >
      <div className="w-full">
        <p className="text-sm font-semibold tracking-widest uppercase mb-6 text-muted-foreground">
          Flagship Platform
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight max-w-3xl text-foreground">
            Virtual Village — One Ecosystem. Clear Structure. Contextual Intelligence.
          </h2>
          <div className="md:max-w-sm flex-shrink-0">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Virtual Village is a modular AI-powered digital ecosystem — unified,
              personalised, structured, and seamless for citizens, cities and
              services.
            </p>
          </div>
        </div>

        {isMobile ? (
          <MobileCarousel itemsPerPage={2}>
            {modules.map(({ icon, title, description }) => (
              <ModuleCard key={title} icon={icon} title={title} description={description} />
            ))}
          </MobileCarousel>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map(({ icon, title, description }) => (
              <ModuleCard key={title} icon={icon} title={title} description={description} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VirtualVillageIntro;

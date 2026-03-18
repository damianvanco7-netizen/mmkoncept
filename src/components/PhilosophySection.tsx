import { ArrowRight } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className="py-28 md:py-36 bg-card section-padding"
    >
      <div className="w-full max-w-5xl">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10">
          Projects & Services
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-relaxed mb-16 md:mb-20">
          At mm concept, we bridge the gap between high-level corporate strategy
          <br />
          and human-centric digital solutions.
        </h2>

        <p className="text-base text-muted-foreground mb-10">Explore our two core pillars:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Virtual Village</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
            </p>
            <button className="pill-button text-xs !py-2 !px-5 self-start">
              Explore Village
            </button>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Consulting & Strategy</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
            </p>
            <button className="pill-button text-xs !py-2 !px-5 self-start">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

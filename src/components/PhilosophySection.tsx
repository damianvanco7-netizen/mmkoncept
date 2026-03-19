import { useNavigate } from "react-router-dom";

const PhilosophySection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="philosophy"
      className="py-28 md:py-36 section-padding"
    >
      <div className="w-full">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10">
          Projects & Services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-relaxed">
              At mm concept, we bridge the gap between high-level corporate strategy
              and human-centric digital solutions.
            </h2>
          </div>

          {/* Right: two pillars stacked */}
          <div className="flex flex-col gap-16 md:gap-20 md:pt-4">
            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Virtual Village</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
              </p>
              <button onClick={() => navigate("/virtual-village")} className="pill-button text-xs !py-2 !px-5 self-start">
                Explore Village
              </button>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Consulting & Strategy</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
              </p>
              <button onClick={() => navigate("/consulting")} className="pill-button text-xs !py-2 !px-5 self-start">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

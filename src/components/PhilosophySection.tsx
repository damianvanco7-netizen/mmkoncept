import { useNavigate } from "react-router-dom";
import TiltCard from "./TiltCard";

const PhilosophySection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="philosophy"
      className="py-28 md:py-36 section-padding"
    >
      <div className="w-full">
        <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-10">
          Projects & Services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left: heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-relaxed">
              We bridge the gap between high-level corporate strategy
              and human-centric digital solutions.
            </h2>
          </div>

          {/* Right: two card pillars stacked */}
          <div className="flex flex-col gap-8 md:pt-4">
            <TiltCard
              className="rounded-2xl p-8 md:p-10 tilt-card-hover"
              onClick={() => navigate("/virtual-village")}
              tiltMaxX={6}
              tiltMaxY={6}
              scale={1.02}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Virtual Village</h3>
              <p className="text-white/60 leading-relaxed">
                Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
              </p>
            </TiltCard>

            <TiltCard
              className="rounded-2xl p-8 md:p-10 tilt-card-hover"
              onClick={() => navigate("/consulting")}
              tiltMaxX={6}
              tiltMaxY={6}
              scale={1.02}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Consulting & Strategy</h3>
              <p className="text-white/60 leading-relaxed">
                Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
              </p>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

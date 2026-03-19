import { useNavigate } from "react-router-dom";

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  boxShadow: '4px 4px 12px rgba(0,0,0,0.3), -4px -4px 12px rgba(255,255,255,0.05)',
  cursor: 'pointer',
};

const cardHoverIn = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.boxShadow = '5px 5px 14px rgba(0,0,0,0.4), -5px -5px 14px rgba(255,255,255,0.08)';
  e.currentTarget.style.transform = 'translateY(-2px)';
};

const cardHoverOut = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.boxShadow = '4px 4px 12px rgba(0,0,0,0.3), -4px -4px 12px rgba(255,255,255,0.05)';
  e.currentTarget.style.transform = 'translateY(0)';
};

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
            <div
              className="rounded-2xl p-8 md:p-10 transition-all duration-300"
              style={cardStyle}
              onMouseEnter={cardHoverIn}
              onMouseLeave={cardHoverOut}
              onClick={() => navigate("/virtual-village")}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Virtual Village</h3>
              <p className="text-white/60 leading-relaxed">
                Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it's a personalized universe designed to harmonize city life, health, and community.
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 transition-all duration-300"
              style={cardStyle}
              onMouseEnter={cardHoverIn}
              onMouseLeave={cardHoverOut}
              onClick={() => navigate("/consulting")}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Consulting & Strategy</h3>
              <p className="text-white/60 leading-relaxed">
                Strategic consulting focused on simplifying complex systems, digital environments and cross-sector innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const circles = [
  {
    title: "Virtual Village",
    description:
      "Our flagship digital ecosystem powered by the STAR Pro AI engine.",
    route: "/virtual-village",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Strategic consulting for complex systems and cross-sector innovation.",
    route: "/consulting",
  },
];

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[1.4]">
              We bridge the gap between high-level corporate strategy
              and human-centric digital solutions.
            </h2>
          </div>

          {/* Right: circle buttons */}
          <div className="flex flex-col items-center gap-4 md:pt-4">
            {circles.map((item, i) => (
              <button
                key={item.title}
                onClick={() => navigate(item.route)}
                className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500"
                style={{
                  width: "clamp(280px, 28vw, 400px)",
                  height: "clamp(280px, 28vw, 400px)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  alignSelf: i === 0 ? "flex-end" : "flex-start",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <span className="text-white text-lg md:text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </span>
                <span className="text-white/50 text-xs md:text-sm leading-relaxed max-w-[70%] transition-colors duration-300 group-hover:text-white/70 mb-6">
                  {item.description}
                </span>
                <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:border-white/60 group-hover:rotate-45">
                  <ArrowUpRight size={16} className="text-white/40 transition-colors duration-300 group-hover:text-white/80" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

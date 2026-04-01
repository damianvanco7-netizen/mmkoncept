import { useNavigate } from "react-router-dom";
import ShinyText from "./ShinyText";
import { LiquidGlass } from "@specy/liquid-glass-react";

const circles = [
  {
    title: "Virtual Village",
    description:
      "Our flagship digital ecosystem. Powered by the STAR Pro AI engine, it offers a personalized universe that simplifies everyday life, connects essential services, and redefines how people engage with the world around them.",
    route: "/virtual-village",
    linkText: "Explore Village →",
  },
  {
    title: "Consulting & Strategy",
    description:
      "Our strategic advisory practice. Focused on clarity, transformation, and cross-sector innovation, it helps organizations navigate complexity and shape solutions that are both future-ready and deeply human.",
    route: "/consulting",
    linkText: "Explore Services →",
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
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.2]">
            <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
              Innovation, Technology,
              <br />
              and Human Experience
            </ShinyText>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {circles.map((item) => (
            <div
              key={item.title}
              onClick={() => navigate(item.route)}
              className="group cursor-pointer"
              style={{ width: 300, height: 300 }}
            >
              <LiquidGlass
                glassStyle={{
                  depth: 0.8,
                  segments: 64,
                  radius: 0.5,
                  transmission: 0.95,
                  roughness: 0.05,
                }}
                style={`
                  width: 300px;
                  height: 300px;
                  border-radius: 50%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  padding: 40px 36px;
                `}
              >
                <span className="text-white text-lg md:text-xl font-semibold mb-2">
                  {item.title}
                </span>
                <span className="text-white/50 text-sm leading-relaxed mb-6 max-w-[85%]">
                  {item.description}
                </span>
                <span className="text-white/80 text-sm md:text-base font-bold flex items-center gap-1 transition-colors duration-300 group-hover:text-white">
                  {item.linkText}
                </span>
              </LiquidGlass>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

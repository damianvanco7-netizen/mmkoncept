import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ShinyText from "./ShinyText";

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
        {/* Heading with shiny effect like hero */}
        <div className="mb-16 md:mb-24">
          <h2 className="heading-h2">
            <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
              Innovation, Technology,
              <br />
              and Human Experience
            </ShinyText>
          </h2>
        </div>


        {/* Circle buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {circles.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.route)}
              className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 px-12 liquid-glass-circle"
              style={{
                width: "clamp(300px, 30vw, 440px)",
                height: "clamp(300px, 30vw, 440px)",
              }}
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
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

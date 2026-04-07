import { useNavigate } from "react-router-dom";
import ShinyText from "./ShinyText";
import logoVV from "@/assets/logo-virtual-village-2.svg";
import logoConsulting from "@/assets/logo-consulting.svg";

const circles = [
  {
    logo: logoVV,
    logoAlt: "Virtual Village",
    title: "Our flagship digital ecosystem",
    description:
      "Powered by STAR Pro AI, it simplifies everyday life, connects essential services, and creates a more intuitive way to engage with the world around you.",
    route: "/virtual-village",
    linkText: "Explore Village →",
  },
  {
    logo: logoConsulting,
    logoAlt: "Consulting & Strategy",
    title: "Consulting & Strategy",
    description:
      "Our strategic advisory practice. We help organizations navigate complexity, shape digital transformation, and unlock future-ready solutions with clarity and purpose.",
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
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="heading-h2">
            <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
              Innovation, Technology,
              <br />
              and Human Experience
            </ShinyText>
          </h2>
        </div>

        {/* Circle buttons */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          {circles.map((item) => (
            <button
              key={item.logoAlt}
              onClick={() => navigate(item.route)}
              className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 px-8 md:px-12 liquid-glass-circle w-[320px] h-[320px] md:w-[clamp(300px,30vw,440px)] md:h-[clamp(300px,30vw,440px)]"
            >
              <img src={item.logo} alt={item.logoAlt} className="h-10 md:h-14 mb-3 brightness-0 invert opacity-70" />
              <span className="text-white text-base md:text-lg font-semibold mb-2 whitespace-nowrap leading-tight">
                {item.title}
              </span>
              <span className="text-white/50 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-[85%]">
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

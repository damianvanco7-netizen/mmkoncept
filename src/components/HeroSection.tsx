import NetworkCanvas from "./NetworkCanvas";
import ShinyText from "./ShinyText";
import heroGradient from "@/assets/hero-gradient.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-24"
      style={{
        backgroundImage: `url(${heroGradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NetworkCanvas />
      <div className="relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08] mb-10">
          <ShinyText speed={4} color="rgba(255,255,255,0.4)" shineColor="rgba(255,255,255,1)" spread={120}>
            Life, just simplified.
          </ShinyText>
        </h1>
        <button
          onClick={() => scrollTo("philosophy")}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-sm font-medium text-white/90 transition-all duration-300"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

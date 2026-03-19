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
      className="relative min-h-screen flex items-center section-padding pt-24 pb-48 overflow-hidden"
      style={{
        backgroundImage: `url(${heroGradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NetworkCanvas />
      <div className="relative z-10 w-full">
        <h1 className="font-semibold tracking-tight leading-[0.92]" style={{ fontSize: 'clamp(4.5rem, 11vw, 13rem)' }}>
          <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
            <span className="block">Life,</span>
            <span className="block">just simplified</span>
          </ShinyText>
        </h1>
      </div>

      {/* Giant circle button anchored to bottom-left, only top part visible */}
      <button
        onClick={() => scrollTo("philosophy")}
        className="absolute z-10 rounded-full flex items-start justify-center transition-all duration-500"
        style={{
          width: 'clamp(280px, 30vw, 450px)',
          height: 'clamp(280px, 30vw, 450px)',
          bottom: 'clamp(-140px, -15vw, -225px)',
          left: 'clamp(1.5rem, 5vw, 6rem)',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
        }}
      >
        <span className="text-white/80 text-sm md:text-base font-medium tracking-wide mt-[25%]">
          Explore
        </span>
      </button>
    </section>
  );
};

export default HeroSection;

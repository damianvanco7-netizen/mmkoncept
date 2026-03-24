import NetworkCanvas from "./NetworkCanvas";
import ShinyText from "./ShinyText";
import mmconceptLogo from "@/assets/mmconcept-logo.svg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-24 pb-48"
    >
      <NetworkCanvas />
      <div className="relative z-10 w-full flex justify-end">
        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[65%]">
          <img
            src={mmconceptLogo}
            alt="mm concept"
            className="mb-8 md:mb-10"
            style={{
              width: 'clamp(180px, 22vw, 340px)',
              filter: 'invert(1)',
            }}
          />
          <h1 className="font-semibold tracking-tight leading-[1.15]" style={{ fontSize: 'clamp(3.5rem, 9vw, 10.5rem)' }}>
            <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
              <span className="block">Life, just</span>
              <span className="block">simplified.</span>
            </ShinyText>
          </h1>
        </div>
      </div>

      {/* Explore circle — half in hero, half in next section */}
      <button
        onClick={() => scrollTo("philosophy")}
        className="absolute z-20 rounded-full flex flex-col items-center justify-center transition-all duration-500"
        style={{
          width: 'clamp(280px, 25vw, 400px)',
          height: 'clamp(280px, 25vw, 400px)',
          bottom: 'clamp(-140px, -12.5vw, -200px)',
          right: 'clamp(40px, 8vw, 160px)',
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
        <span className="text-white/60 text-sm md:text-base font-medium tracking-wide leading-snug text-center px-8">
          explore<br />our two core<br />pillars:
        </span>
      </button>
    </section>
  );
};

export default HeroSection;

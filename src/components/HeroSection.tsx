import NetworkCanvas from "./NetworkCanvas";
import ShinyText from "./ShinyText";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] md:min-h-screen flex flex-col md:flex-row md:items-center section-padding pt-24 pb-48 overflow-hidden"
    >
      {/* Network canvas — pushed down on mobile to avoid title overlap */}
      <div className="absolute inset-x-0 top-[220px] bottom-[200px] md:top-0 md:bottom-0">
        <NetworkCanvas />
      </div>

      {/* Mobile: title at top, rest of space for network */}
      <div className="relative z-10 w-full flex flex-col md:hidden mt-8">
        <h1 className="heading-h1 text-left">
          <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
            <span className="block">Life, just</span>
            <span className="block">simplified</span>
          </ShinyText>
        </h1>
      </div>

      {/* Desktop: text right-aligned */}
      <div className="relative z-10 w-full hidden md:flex justify-end">
        <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[65%]">
          <h1 className="heading-h1">
            <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
              <span className="block">Life, just</span>
              <span className="block">simplified</span>
            </ShinyText>
          </h1>
        </div>
      </div>

      {/* Explore circle */}
      <button
        onClick={() => scrollTo("philosophy")}
        className="absolute z-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 liquid-glass-circle overflow-hidden
          md:bottom-[clamp(40px,5vw,80px)] md:right-[clamp(80px,8vw,160px)]
          bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto w-[160px] h-[160px] md:w-[clamp(160px,15vw,240px)] md:h-[clamp(160px,15vw,240px)]"
      >
        <span className="text-white/60 text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-snug text-center px-8">
          Our Portfolio
        </span>
      </button>
    </section>
  );
};

export default HeroSection;

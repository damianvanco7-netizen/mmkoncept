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
      {/* Mobile: title at top left, then network canvas below */}
      <div className="relative z-10 w-full flex flex-col md:hidden mt-8">
        <h1 className="heading-h1 text-left">
          <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
            <span className="block">Life, just</span>
            <span className="block">simplified</span>
          </ShinyText>
        </h1>
        <div className="relative w-full h-[45svh] min-h-[320px] max-h-[420px]">
          <NetworkCanvas direction="down" />
        </div>
      </div>

      {/* Desktop: original layout */}
      <div className="hidden md:block absolute inset-0">
        <NetworkCanvas />
      </div>
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

      {/* Explore circle — desktop: bottom right, mobile: right side partially offscreen */}
      <button
        onClick={() => scrollTo("philosophy")}
        className="absolute z-20 rounded-full flex flex-col items-center justify-center transition-all duration-500 liquid-glass-circle overflow-hidden
          md:bottom-[clamp(-140px,-12.5vw,-200px)] md:right-[clamp(40px,8vw,160px)]
          bottom-8 -right-12 w-[187px] h-[187px] md:w-[clamp(170px,21.25vw,340px)] md:h-[clamp(170px,21.25vw,340px)]"
      >
        <span className="text-white/60 text-lg md:text-xl lg:text-2xl font-medium tracking-wide leading-snug text-center px-8">
          Our Portfolio
        </span>
      </button>
    </section>
  );
};

export default HeroSection;

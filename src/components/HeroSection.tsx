import NetworkCanvas from "./NetworkCanvas";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-24">
      <NetworkCanvas />
      <div className="relative z-10 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-10">
          Life, just simplified.
        </h1>
        <button
          onClick={() => scrollTo("philosophy")}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-foreground/30 flex items-center justify-center text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

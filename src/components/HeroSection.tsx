import NetworkCanvas from "./NetworkCanvas";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-24">
      <NetworkCanvas />
      <div className="relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6">
          Life, just simplified.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
          mm concept is a Strategic Innovation Group building structured, scalable digital infrastructures for citizens, cities and institutions.
        </p>
        <button onClick={() => scrollTo("philosophy")} className="pill-button text-sm">
          Explore mm concept
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

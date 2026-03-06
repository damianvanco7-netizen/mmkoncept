const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-warm-white section-padding pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
          Designing Human-Centric
          <br />
          Digital Ecosystems.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          mm concept is a Strategic Innovation Group building structured, scalable digital infrastructures for citizens, cities and institutions.
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          We connect advanced technology with human intention — from vision to architecture to execution.
        </p>
        <button onClick={() => scrollTo("virtual-village")} className="pill-button text-base">
          Explore Virtual Village
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

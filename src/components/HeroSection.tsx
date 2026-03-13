import heroVillage from "@/assets/hero-village.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroVillage})` }}
      />

      {/* Dark gradient overlay — bottom-up for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(18,100%,3%)] via-[hsl(18,100%,3%,0.6)] to-transparent" />

      {/* Content — centered at bottom */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pb-20 md:pb-28 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-warm-beige leading-[1.08] mb-6">
          Designing
          <br />
          Human-Centric
          <br />
          Digital Ecosystems.
        </h1>
        <p className="text-lg md:text-xl text-warm-taupe leading-relaxed mb-10 max-w-2xl mx-auto">
          Strategic innovation group building scalable digital infrastructures — from vision to execution.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button onClick={() => scrollTo("virtual-village")} className="pill-button text-base">
            Explore Virtual Village
          </button>
          <button onClick={() => scrollTo("cta")} className="pill-button-dark text-base">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

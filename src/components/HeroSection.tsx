import heroVillage from "@/assets/hero-village.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-warm-white section-padding pt-24 overflow-hidden">
      {/* Concentric circle lines background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full border border-foreground/[0.04]" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-foreground/[0.035]" />
        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-foreground/[0.03]" />
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-foreground/[0.025]" />
        <div className="absolute w-[1700px] h-[1700px] rounded-full border border-foreground/[0.02]" />
        <div className="absolute w-[2000px] h-[2000px] rounded-full border border-foreground/[0.015]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
            Designing
            <br />
            Human-Centric
            <br />
            Digital Ecosystems.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Strategic innovation group building scalable digital infrastructures — from vision to execution.
          </p>
          <button onClick={() => scrollTo("virtual-village")} className="pill-button text-base">
            Explore Virtual Village
          </button>
        </div>

        {/* Right — Hero image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroVillage}
            alt="Virtual Village 3D concept — miniature digital city model"
            className="w-full max-w-lg xl:max-w-xl h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

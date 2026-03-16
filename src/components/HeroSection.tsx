import Silk from "@/components/Silk";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      {/* Silk WebGL background */}
      <Silk speed={5} scale={0.7} noiseIntensity={0.6} rotation={1.57} color="#EAE3D9" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6">
          Designing
          <br />
          Human-Centric
          <br />
          Digital Ecosystems.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          mm concept is a Strategic Innovation Group building structured, scalable digital infrastructures for citizens, cities and institutions.
        </p>
        <button onClick={() => scrollTo("virtual-village")} className="pill-button text-base">
          Explore Virtual Village
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

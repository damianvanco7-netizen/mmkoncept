import mockup2 from "@/assets/mockup-2.png";
import ConcentricCircles from "@/components/ConcentricCircles";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-warm-white section-padding pt-24 overflow-hidden">
      <ConcentricCircles />

      <div className="relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
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
            src={mockup2}
            alt="Virtual Village app mockup — city ecosystem on mobile"
            className="w-full max-w-sm xl:max-w-md h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

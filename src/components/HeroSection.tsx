import mockup2 from "@/assets/mockup-2.png";
import Silk from "@/components/Silk";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden">
      {/* Silk WebGL background */}
      <Silk speed={5} scale={0.7} noiseIntensity={0.6} rotation={1.57} color="#EAE3D9" />

      <div className="relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6">
            Designing
            <br />
            Human-Centric
            <br />
            Digital Ecosystems.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
            mm concept is a Strategic Innovation Group building structured, scalable digital infrastructures for citizens, cities and institutions.
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
            className="w-full max-w-[30rem] xl:max-w-[33rem] h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

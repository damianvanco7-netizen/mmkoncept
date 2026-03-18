import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mmLogo from "@/assets/mmconcept.svg";
import mockup from "@/assets/vv-mockup-hero.png";

const VirtualVillage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center section-padding pt-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 100%)",
        }}
      >
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col items-start">
            <img
              src={vvLogo}
              alt="Virtual Village"
              className="h-14 md:h-16 rounded-xl mb-8"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6">
              Your personalized Universe.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-lg">
              More than a platform — Virtual Village is your companion, your
              guide, and your quiet coach in the background.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-lg">
              It helps you get things done effortlessly, so you can spend less
              time navigating technology and more time enjoying life, nature, and
              the people around you.
            </p>
            <p className="text-base font-semibold text-foreground mb-2">
              Intelligence that understands your world.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Powered by Google Cloud and our proprietary STAR Pro AI engine,
              Virtual Village is your digital partner tailored to your unique
              location, needs, and life context.
            </p>
          </div>

          {/* Right — mockup */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={mockup}
              alt="Virtual Village app mockup"
              className="w-[280px] md:w-[340px] lg:w-[400px] xl:w-[440px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualVillage;

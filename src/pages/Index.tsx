import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";
import Grainient from "@/components/Grainient";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Grainient
        color1="#868380"
        color2="#575451"
        color3="#282828"
        timeSpeed={0.35}
        warpFrequency={4.0}
        warpSpeed={1.5}
        grainAmount={0.06}
        contrast={1.3}
        saturation={0.8}
      />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
      </div>

      <div className="relative" style={{ zIndex: 0 }}>
        <PhilosophySection />
        <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />
        <FounderSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

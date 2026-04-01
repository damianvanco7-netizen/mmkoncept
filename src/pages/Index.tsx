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
        color1="#4a4745"
        color2="#3a3937"
        color3="#272727"
        timeSpeed={0.15}
        warpFrequency={3.0}
        warpSpeed={1.0}
        grainAmount={0.05}
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

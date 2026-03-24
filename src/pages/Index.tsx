import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
      </div>

      <div
        className="relative"
        style={{
          zIndex: 0,
          backgroundImage: "linear-gradient(180deg, #615F5D 0%, #7a756f 15%, #a39d95 40%, #C5BEB4 65%, #C5BEB4 100%)",
        }}
      >
        <PhilosophySection />
        <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />
        <FounderSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

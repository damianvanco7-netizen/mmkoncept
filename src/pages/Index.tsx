import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #272727 0%, #3a3937 30%, #4a4745 60%, #615F5D 100%)",
      }}
    >
      <Navbar />

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

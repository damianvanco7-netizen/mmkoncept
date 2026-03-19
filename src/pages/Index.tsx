import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero: sticky behind, Philosophy scrolls over it */}
      <div className="relative" style={{ zIndex: 0 }}>
        <div className="sticky top-0 h-screen">
          <HeroSection />
        </div>
        <div
          className="relative"
          style={{
            zIndex: 10,
            backgroundImage: "linear-gradient(180deg, #4a4745 0%, #7a756f 30%, #a39d95 55%, #C5BEB4 80%, #C5BEB4 100%)",
          }}
        >
          <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />
          <PhilosophySection />
          <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />
          <FounderSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;

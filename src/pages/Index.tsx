import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection />

      <div
        style={{
          backgroundImage: "linear-gradient(180deg, #4a4745 0%, #7a756f 30%, #a39d95 55%, #C5BEB4 80%, #C5BEB4 100%)",
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

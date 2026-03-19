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
        backgroundImage: "linear-gradient(180deg, #302F2F 0%, #C5BEB4 100%)",
      }}
    >
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;

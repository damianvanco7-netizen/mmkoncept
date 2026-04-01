import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gdpr = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #272727 0%, #3a3937 30%, #4a4745 60%, #615F5D 100%)",
      }}
    >
      <Navbar />

      <section className="pt-32 pb-20 section-padding">
        <div className="w-full max-w-3xl">
          <h1 className="heading-h2 text-white mb-4">GDPR</h1>
          <p className="text-white/50 text-sm mb-16">Active since January 2026</p>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>GDPR policy content will be added here.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gdpr;

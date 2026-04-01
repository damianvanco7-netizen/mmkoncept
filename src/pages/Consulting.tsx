import { useState } from "react";
import Grainient from "@/components/Grainient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkCanvasMirrored from "@/components/NetworkCanvasMirrored";
import ShinyText from "@/components/ShinyText";
import ContactFormDialog from "@/components/ContactFormDialog";

const services = [
  {
    title: "Digital Transformation & Smart City Consulting",
    description:
      "We design comprehensive digitalization concepts that simplify urban infrastructure and corporate processes to create intuitive, future-ready environments.",
  },
  {
    title: "IT Marketing & UX Strategy",
    description:
      "We bridge the gap between technical complexity and user-centered communication. We help organizations define their identity and design Human-Machine Interfaces (HMI) where User Experience (UX) is the priority.",
  },
  {
    title: "Innovation Management & Strategic Events",
    description:
      "We design and facilitate large-scale innovation events (e.g., Innovation Days) to ignite creativity and drive sustainable cultural change.",
  },
];

const whyItems = [
  {
    title: "Global Corporate Expertise",
    description:
      "A proven track record in transforming European production sites and providing C-level consultations in Africa.",
  },
  {
    title: "Multilingual Support",
    description:
      "Expert strategic advice and project management delivered fluently in Slovak, German, and English for seamless cross-border collaboration.",
  },
  {
    title: "Human-Centric Approach",
    description:
      "Every strategy begins with the user, ensuring technology serves as a bridge for meaningful interaction.",
  },
];

const Consulting = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Grainient
        color1="#868380"
        color2="#575451"
        color3="#282828"
        timeSpeed={0.55}
        warpFrequency={4.0}
        warpSpeed={2.5}
        grainAmount={0.06}
        contrast={1.3}
        saturation={0.8}
      />
      <div className="relative" style={{ zIndex: 1 }}>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center section-padding pt-24">
        <div className="relative z-10 w-full max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
            Consulting & Strategy
          </p>
          <h1 className="heading-h2 mb-6">
            <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
              Bridging Innovation, Technology, and Human Experience
            </ShinyText>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            At mm concept, we build strategic bridges between complex
            technologies and the real world. Our consulting services are rooted
            in over a decade of experience within the global automotive industry
            and international innovation management.
          </p>
        </div>
      </section>

      <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Service Portfolio — Circle buttons like homepage */}
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
              What We Do
            </p>
            <h2 className="heading-h2">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Our Service Portfolio
              </ShinyText>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-full flex flex-col items-center justify-center text-center px-10 transition-all duration-500 cursor-default liquid-glass-circle w-[320px] h-[320px] md:w-[clamp(280px,25vw,380px)] md:h-[clamp(280px,25vw,380px)]"
              >
                <span className="text-white text-base md:text-lg font-semibold mb-2 leading-tight max-w-[75%]">
                  {service.title}
                </span>
                <span className="text-white/50 text-xs md:text-sm leading-relaxed max-w-[85%]">
                  {service.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Why mm concept */}
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">
              Why mm concept?
            </p>
            <h2 className="heading-h2">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Built on experience.<br />Driven by purpose.
              </ShinyText>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {whyItems.map(({ title, description }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <p className="text-base font-semibold text-white mb-3">
                  {title}
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* CTA + Footer */}
      <div>
        <section className="relative py-28 md:py-36 section-padding overflow-hidden">
          <NetworkCanvasMirrored />
          <div className="relative z-10 w-full max-w-xl">
            <h2 className="heading-h2 mb-6">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Let's Build Something Meaningful
              </ShinyText>
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10">
              Whether you're transforming your organization or reimagining urban
              infrastructure — we're ready to partner with you.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 liquid-glass-circle"
              style={{
                width: "clamp(160px, 16vw, 220px)",
                height: "clamp(160px, 16vw, 220px)",
              }}
            >
              <span className="text-white text-lg md:text-xl font-semibold">Connect</span>
            </button>
          </div>
        </section>

        <Footer />
      </div>
      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
      </div>
    </div>
  );
};

export default Consulting;

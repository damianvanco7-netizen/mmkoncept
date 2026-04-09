import { useState } from "react";
import Grainient from "@/components/Grainient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import ShinyText from "@/components/ShinyText";
import ContactFormDialog from "@/components/ContactFormDialog";

const services = [
  {
    title: "Digital Transformation",
    description:
      "We design comprehensive digitalization concepts that simplify urban infrastructure and corporate processes to create intuitive, future-ready environments.",
  },
  {
    title: "IT Marketing",
    description:
      "We bridge the gap between technical complexity and user-centered communication. We help organizations define their identity and design Human-Machine Interfaces (HMI) where User Experience (UX) is the priority.",
  },
  {
    title: "Innovation Management",
    description:
      "We design and facilitate large-scale innovation events (e.g., Innovation Days) to ignite creativity and drive sustainable cultural change.",
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

      {/* Service Portfolio — starts the page */}
      <section className="min-h-screen flex flex-col justify-center py-28 md:py-36 section-padding pt-32">
        <div className="w-full">
          <div className="text-center">
            <h2 className="heading-h2">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Built on Experience,<br />Driven by Purpose
              </ShinyText>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-full flex flex-col items-center justify-center text-center px-10 transition-all duration-500 cursor-default liquid-glass-circle w-[320px] h-[320px] md:w-[clamp(280px,25vw,380px)] md:h-[clamp(280px,25vw,380px)]"
              >
                <span className="text-white text-base md:text-lg font-semibold mb-2 leading-tight whitespace-nowrap">
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

      {/* CTA + Footer */}
      <div>
        <section className="relative py-28 md:py-36 section-padding overflow-hidden">
          <NetworkCanvas variant="consulting" />
          <div className="relative z-10 w-full flex justify-end">
          <div className="max-w-xl md:text-right">
            <h2 className="heading-h2 mb-6">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Let's Build Something Meaningful
              </ShinyText>
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-10">
              Whether you're transforming your organization or reimagining urban
              infrastructure — we're ready to partner with you.
            </p>
            <div className="flex md:justify-end">
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
          </div>
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

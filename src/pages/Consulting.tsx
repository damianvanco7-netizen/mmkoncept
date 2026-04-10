import { useState } from "react";
import Grainient from "@/components/Grainient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkCanvas from "@/components/NetworkCanvas";
import ShinyText from "@/components/ShinyText";
import ContactFormDialog from "@/components/ContactFormDialog";
import digitalTransformationIcon from "@/assets/icons/digital_transformation.svg";
import itMarketingIcon from "@/assets/icons/it_marketing.svg";
import innovationManagementIcon from "@/assets/icons/inovation_management.svg";

const services = [
  {
    icon: innovationManagementIcon,
    title: "Digital Transformation",
    description:
      "Define clarity in complex systems. We design digital concepts that simplify processes and create intuitive environments.",
  },
  {
    icon: itMarketingIcon,
    title: "IT Marketing & UX Strategy",
    description:
      "Make technology understandable. We translate complexity into clear communication and meaningful user experiences.",
  },
  {
    icon: digitalTransformationIcon,
    title: "Innovation Management",
    description:
      "From idea to execution. We structure innovation and support its transformation into real, scalable solutions.",
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

      {/* Service Portfolio */}
      <section className="min-h-screen flex flex-col justify-center py-28 md:py-36 section-padding pt-32">
        <div className="w-full">
          <div className="text-center mb-4">
            <h2 className="heading-h2">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Strategy. Experience. Execution.
              </ShinyText>
            </h2>
          </div>
          <div className="text-center text-white/50 heading-h3 font-normal max-w-4xl mx-auto mb-16">
            <span className="block md:whitespace-nowrap">We connect thinking, design, and implementation</span>
            <span className="block">into one seamless flow.</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex-shrink-0 flex flex-col items-center justify-center text-center liquid-glass-circle"
                style={{
                  width: "clamp(200px, 22vw, 300px)",
                  height: "clamp(200px, 22vw, 300px)",
                  borderRadius: "50%",
                }}
              >
                <img src={service.icon} alt={service.title} className="w-[76px] h-[76px] mb-4 opacity-50" />
                <span className="text-white text-sm md:text-base font-semibold mb-2 leading-tight whitespace-nowrap">
                  {service.title}
                </span>
                <span className="text-white/50 text-[10px] md:text-xs leading-relaxed px-6">
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
        <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
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

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
    subtitle: "Creating efficiency in complex systems",
    description:
      "We design digital concepts that simplify processes and create intuitive environments.",
  },
  {
    icon: itMarketingIcon,
    title: "IT Marketing",
    subtitle: "Technology, Clearly Communicated",
    description:
      "We turn complexity into clear communication and intuitive experiences.",
  },
  {
    icon: digitalTransformationIcon,
    title: "Innovation Management",
    subtitle: "Turning ideas into impact.",
    description:
      "We create ideas and shape them into structured, scalable solutions.",
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

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 max-w-6xl mx-auto">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex-shrink-0 flex flex-col items-center justify-center text-center liquid-glass-circle w-[320px] h-[320px] md:w-[clamp(280px,24vw,330px)] md:h-[clamp(280px,24vw,330px)]"
                style={{
                  borderRadius: "50%",
                }}
              >
                <img src={service.icon} alt={service.title} className="w-[76px] h-[76px] mb-4 opacity-50" />
                <span className="text-white text-lg md:text-base font-semibold mb-1 leading-tight whitespace-nowrap">
                  {service.title}
                </span>
                <span className="text-white/40 text-xs md:text-xs italic mb-2 leading-tight">
                  {service.subtitle}
                </span>
                <span className="text-white/50 text-xs md:text-xs leading-relaxed px-8 max-w-[85%]">
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
        <section className="relative section-padding overflow-hidden pb-0">
          {/* Mobile: stacked layout — title, subtitle, network, button */}
          <div className="md:hidden flex flex-col items-center text-center">
            <h2 className="heading-h2 mb-6">
              <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                Complexity is everywhere. Simplicity is a choice.
              </ShinyText>
            </h2>
            <div className="text-white/50 heading-h3 font-normal mb-10">
              If this resonates, let's talk.
            </div>
            <div className="relative w-full h-[50vh] min-h-[300px] mb-10">
              <NetworkCanvas variant="consulting" />
            </div>
            <button
              onClick={() => setContactOpen(true)}
              className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 liquid-glass-circle w-[160px] h-[160px] mb-16"
            >
              <span className="text-white text-base font-semibold leading-tight text-center">
                <span className="block">Start the</span>
                <span className="block">conversation</span>
              </span>
            </button>
          </div>

          {/* Desktop: original overlapping layout */}
          <div className="hidden md:block relative min-h-[70vh]">
            <div className="absolute inset-0">
              <NetworkCanvas variant="consulting" />
            </div>
            <div className="relative z-10 w-full flex justify-end pt-24 md:pt-32">
              <div className="max-w-xl md:text-right">
                <h2 className="heading-h2 mb-6">
                  <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
                    Complexity is everywhere. Simplicity is a choice.
                  </ShinyText>
                </h2>
                <div className="text-white/50 heading-h3 font-normal max-w-xl mb-10 md:text-right md:ml-auto">
                  If this resonates, let's talk.
                </div>
                <div className="flex md:justify-end">
                  <button
                    onClick={() => setContactOpen(true)}
                    className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 liquid-glass-circle"
                    style={{
                      width: "clamp(160px, 16vw, 220px)",
                      height: "clamp(160px, 16vw, 220px)",
                    }}
                  >
                    <span className="text-white text-base md:text-lg font-semibold leading-tight text-center">
                      <span className="block">Start the</span>
                      <span className="block">conversation</span>
                    </span>
                  </button>
                </div>
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

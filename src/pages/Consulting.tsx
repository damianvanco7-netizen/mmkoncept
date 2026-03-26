import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkCanvasMirrored from "@/components/NetworkCanvasMirrored";
import { Globe, Languages, Heart } from "lucide-react";

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
    icon: Globe,
    title: "Global Corporate Expertise",
    description:
      "A proven track record in transforming European production sites and providing C-level consultations in Africa.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Expert strategic advice and project management delivered fluently in Slovak, German, and English for seamless cross-border collaboration.",
  },
  {
    icon: Heart,
    title: "Human-Centric Approach",
    description:
      "Every strategy begins with the user, ensuring technology serves as a bridge for meaningful interaction.",
  },
];

const Consulting = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 25%, hsl(var(--warm-beige)) 50%, hsl(var(--warm-taupe)) 75%, hsl(var(--warm-beige)) 100%)",
      }}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center section-padding pt-24">
        <div className="relative z-10 w-full max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Consulting & Strategy
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6">
            Bridging Innovation, Technology, and Human Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            At mm concept, we build strategic bridges between complex
            technologies and the real world. Our consulting services are rooted
            in over a decade of experience within the global automotive industry
            and international innovation management.
          </p>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Service Portfolio */}
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Our Service Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-16">
            What we do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {services.map((service) => (
              <div key={service.title}>
                <p className="text-base font-semibold text-foreground mb-3">
                  {service.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Why mm concept */}
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Why mm concept?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-16">
            Built on experience. Driven by purpose.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {whyItems.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center neu-inset mb-5">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-base font-semibold text-foreground mb-3">
                  {title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Dark Section */}
      <section
        className="relative py-28 md:py-36 section-padding overflow-hidden"
        style={{
          backgroundImage: `url(${darkBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            Let's Build Something Meaningful
          </h2>
          <p className="text-base text-white/70 leading-relaxed mb-10">
            Whether you're transforming your organization or reimagining urban
            infrastructure — we're ready to partner with you.
          </p>
          <button className="pill-button text-sm bg-white text-black hover:bg-white/90">
            Contact
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;

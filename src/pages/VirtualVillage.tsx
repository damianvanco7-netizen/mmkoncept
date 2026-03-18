import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vvLogo from "@/assets/logo-village.svg";
import mockup from "@/assets/vv-mockup-hero.png";
import villageSekcie from "@/assets/village-sekcie.png";
import darkBg from "@/assets/dark-section-bg.jpg";
import appScreens from "@/assets/vv-app-screens.png";
import { Building2, Heart, GraduationCap, Palette, Dumbbell, UtensilsCrossed, ShoppingCart } from "lucide-react";

const dimensions = [
  {
    icon: Building2,
    title: "City Life & Services",
    description: "Your gateway to local governance, news, and urban infrastructure.",
  },
  {
    icon: Heart,
    title: "Health",
    description: "Instant access to personalized wellness, medical resources, and community care.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "A dedicated space for lifelong learning and local educational opportunities.",
  },
  {
    icon: Palette,
    title: "Culture",
    description: "Connecting you with local arts, events, and the unique heartbeat of your neighborhood.",
  },
  {
    icon: Dumbbell,
    title: "Sport",
    description: "Promoting an active lifestyle with integrated modules for training and local athletic groups.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Dining",
    description: "Discovering the best local tastes, sustainable options, and neighborhood dining experiences.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping & Services",
    description: "Smart, localized commerce that prioritizes convenience and community businesses.",
  },
];

const VirtualVillage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center section-padding pt-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 100%)",
        }}
      >
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col items-start">
            <img
              src={vvLogo}
              alt="Virtual Village"
              className="h-14 md:h-20 mb-8"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6">
              Your personalized Universe.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-lg">
              More than a platform — Virtual Village is your companion, your
              guide, and your quiet coach in the background.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-lg">
              It helps you get things done effortlessly, so you can spend less
              time navigating technology and more time enjoying life, nature, and
              the people around you.
            </p>
            <p className="text-base font-semibold text-foreground mb-2">
              Intelligence that understands your world.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Powered by Google Cloud and our proprietary STAR Pro AI engine,
              Virtual Village is your digital partner tailored to your unique
              location, needs, and life context.
            </p>
          </div>

          {/* Right — mockup */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={mockup}
              alt="Virtual Village app mockup"
              className="w-[280px] md:w-[340px] lg:w-[400px] xl:w-[440px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* 7 Life Dimensions */}
      <section className="py-28 md:py-36 bg-card section-padding">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              7 Life Dimensions. 1 Intuitive Space.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Virtual Village is built on a modular architecture designed to
              harmonize every aspect of modern daily life:
            </p>
            <div className="space-y-6">
              {dimensions.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 neu-inset mt-0.5">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">{title}:</span>{" "}
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="flex items-center justify-center">
            <img
              src={villageSekcie}
              alt="Virtual Village — 7 Life Dimensions"
              className="w-full max-w-[560px]"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualVillage;

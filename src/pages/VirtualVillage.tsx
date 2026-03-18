import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vvLogo from "@/assets/logo-village.svg";
import mockup from "@/assets/mockup-2.png";
import villageSekcie from "@/assets/village-sekcie.png";
import darkBg from "@/assets/dark-section-bg.jpg";
import appScreens from "@/assets/vv-app-screens.png";
import martina from "@/assets/martina.png";
import vuyo from "@/assets/vuyo.png";
import hans from "@/assets/hans.png";
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
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 15%, hsl(var(--warm-beige)) 35%, hsl(var(--warm-taupe)) 55%, hsl(var(--warm-beige)) 75%, hsl(var(--warm-taupe)) 100%)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center section-padding pt-24"
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
      <section className="py-28 md:py-36 section-padding">
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

      {/* Dark App Screens Section */}
      <section
        className="relative py-20 md:py-28 section-padding overflow-hidden"
        style={{
          backgroundImage: `url(${darkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-full flex items-center justify-center">
          <img
            src={appScreens}
            alt="Virtual Village app screens"
            className="w-full max-w-[1200px]"
          />
        </div>
      </section>

      {/* Technology Section */}
      <section
        className="py-28 md:py-36 section-padding"
        style={{
          background: "linear-gradient(135deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 100%)",
        }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              Technology
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
              Cloud-native. AI-powered. Globally scalable.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Virtual Village runs on a modern stack built for speed and flexibility: React Native (TypeScript + Expo) for cross-platform delivery, Supabase (PostgreSQL) for real-time data, and Edge Functions (Deno) for scalable serverless logic.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-base text-foreground font-semibold mb-1">AI Layer — STAR</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our AI engine STAR, powered by Google Gemini, turns context (location, time, behavior) into real-time, actionable recommendations — proactive and on demand.
                </p>
              </div>
              <div>
                <p className="text-base text-foreground font-semibold mb-1">Data & Quality</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Integrated with Google Places API, enhanced by custom filtering (≥4.0 ratings) and intelligent matching for accurate, high-quality results.
                </p>
              </div>
              <div>
                <p className="text-base text-foreground font-semibold mb-1">Security & Scale</p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Row Level Security (RLS) ensures strict data privacy. Our modular "Universe" architecture enables seamless global expansion — no new code required.
                </p>
              </div>
            </div>

            <p className="text-base font-semibold text-foreground mt-10">
              Built for performance. Designed for real life.
            </p>
          </div>

          {/* Right — mockup */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={mockup}
              alt="Virtual Village technology"
              className="w-[280px] md:w-[340px] lg:w-[400px] xl:w-[440px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section
        className="py-28 md:py-36 section-padding"
        style={{
          background: "linear-gradient(135deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 100%)",
        }}
      >
        <div className="w-full">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
            Meet Our Leadership Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            A synergy of European strategic vision and African technical excellence.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-4xl">
            A global team for a global vision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Martina */}
            <div>
              <img src={martina} alt="Martina Masaryková" className="w-32 h-32 object-cover rounded-xl mb-6" />
              <p className="text-base font-semibold text-foreground">Martina Masaryková</p>
              <p className="text-sm font-semibold text-foreground mb-3">Founder, CEO & Project Lead (Slovakia)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategist and Entrepreneur with over a decade of experience in the global automotive industry (Volkswagen Group). A multilingual visionary bridging digital innovation with human needs across Slovakia, Germany, and Africa.
              </p>
            </div>

            {/* Vuyo */}
            <div>
              <img src={vuyo} alt="Vuyolwetu Madikiza" className="w-32 h-32 object-cover rounded-xl mb-6" />
              <p className="text-base font-semibold text-foreground">Vuyolwetu Madikiza</p>
              <p className="text-sm font-semibold text-foreground mb-3">Chief Technology Officer (South Africa)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior IT Leader with 10+ years at Volkswagen Group Africa. Expert in AI architecture, Data Science, and large-scale cloud infrastructure (Google Cloud/Azure). The lead architect of the STAR Pro engine.
              </p>
            </div>

            {/* Hans */}
            <div>
              <img src={hans} alt="Hans-Christian Heidecke" className="w-32 h-32 object-cover rounded-xl mb-6" />
              <p className="text-base font-semibold text-foreground">Hans-Christian Heidecke</p>
              <p className="text-sm font-semibold text-foreground mb-3">Investor, Strategic Partner & Board Advisor (Germany)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seasoned executive in international IT leadership and financial governance, ensuring global scalability and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualVillage;

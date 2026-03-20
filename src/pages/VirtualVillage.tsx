import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DimensionsCarousel from "@/components/DimensionsCarousel";
import TechTabs from "@/components/TechTabs";
import vvLogo from "@/assets/logo-village.svg";
import mockup from "@/assets/mockup-2.png";
import heroVideo from "@/assets/vv-hero-video.mp4";
import darkBg from "@/assets/dark-section-bg.jpg";
import appScreens from "@/assets/vv-app-screens.png";
import martina from "@/assets/martina.png";
import vuyo from "@/assets/vuyo.png";
import hans from "@/assets/hans.png";

import iconCity from "@/assets/icons/city_and_services.svg";
import iconHealth from "@/assets/icons/health.svg";
import iconEducation from "@/assets/icons/education.svg";
import iconCulture from "@/assets/icons/culture.svg";
import iconSport from "@/assets/icons/sport.svg";
import iconFood from "@/assets/icons/food_dining.svg";
import iconShopping from "@/assets/icons/shopping_services.svg";

const dimensions = [
  {
    icon: iconCity,
    title: "City Life & Services",
    description: "Your gateway to local governance, news, and urban infrastructure.",
  },
  {
    icon: iconHealth,
    title: "Health",
    description: "Instant access to personalized wellness, medical resources, and community care.",
  },
  {
    icon: iconEducation,
    title: "Education",
    description: "A dedicated space for lifelong learning and local educational opportunities.",
  },
  {
    icon: iconCulture,
    title: "Culture",
    description: "Connecting you with local arts, events, and the unique heartbeat of your neighborhood.",
  },
  {
    icon: iconSport,
    title: "Sport",
    description: "Promoting an active lifestyle with integrated modules for training and local athletic groups.",
  },
  {
    icon: iconFood,
    title: "Food & Dining",
    description: "Discovering the best local tastes, sustainable options, and neighborhood dining experiences.",
  },
  {
    icon: iconShopping,
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
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-lg">
              More than a platform — Virtual Village is your companion, your
              guide, and your quiet coach in the background.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 max-w-lg">
              It helps you get things done effortlessly, so you can spend less
              time navigating technology and more time enjoying life, nature, and
              the people around you.
            </p>
            <p className="text-base font-semibold text-foreground mb-2">
              Intelligence that understands your world.
            </p>
            <p className="text-base text-foreground leading-relaxed max-w-lg">
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
              className="w-[350px] md:w-[425px] lg:w-[500px] xl:w-[550px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* 7 Life Dimensions */}
      <DimensionsCarousel dimensions={dimensions} />

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
      <TechTabs mockup={mockup} />

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Leadership Team Section */}
      <section
        className="py-28 md:py-36 section-padding"
      >
        <div className="w-full">
          <p className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">
            Meet Our Leadership Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            A synergy of European strategic vision and African technical excellence.
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 max-w-4xl">
            A global team for a global vision
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {/* Martina */}
            <div>
              <img src={martina} alt="Martina Masaryková" className="w-32 h-32 object-cover rounded-xl mb-6" />
              <p className="text-base font-semibold text-foreground">Martina Masaryková</p>
              <p className="text-sm font-semibold text-foreground mb-3">Founder, CEO & Project Lead (Slovakia)</p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Strategist and Entrepreneur with over a decade of experience in the global automotive industry (Volkswagen Group). A multilingual visionary bridging digital innovation with human needs across Slovakia, Germany, and Africa.
              </p>
            </div>

            {/* Vuyo */}
            <div>
              <img src={vuyo} alt="Vuyolwetu Madikiza" className="w-32 h-32 object-cover rounded-xl mb-6" />
              <p className="text-base font-semibold text-foreground">Vuyolwetu Madikiza</p>
              <p className="text-sm font-semibold text-foreground mb-3">Chief Technology Officer (South Africa)</p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Senior IT Leader with 10+ years at Volkswagen Group Africa. Expert in AI architecture, Data Science, and large-scale cloud infrastructure (Google Cloud/Azure). The lead architect of the STAR Pro engine.
              </p>
            </div>

            {/* Hans */}
            <div>
              <img src={hans} alt="Hans-Christian Heidecke" className="w-32 h-32 object-cover rounded-xl mb-6" />
              <p className="text-base font-semibold text-foreground">Hans-Christian Heidecke</p>
              <p className="text-sm font-semibold text-foreground mb-3">Investor, Strategic Partner & Board Advisor (Germany)</p>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Seasoned executive in international IT leadership and financial governance, ensuring global scalability and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Dark Section */}
      <section className="relative py-28 md:py-36 section-padding overflow-hidden" style={{ backgroundImage: `url(${darkBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            Be Part of the Digital Evolution
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
            Join the movement to humanize technology.
          </p>
          <p className="text-base text-white/70 leading-relaxed mb-6">
            Whether you are seeking clarity in the digital noise or looking to empower your community through strategic innovation, let's build this universe together.
          </p>
          <p className="text-base text-white/70 leading-relaxed mb-10">
            Virtual Village isn't just another platform. It's a quiet revolution — made by people, for people.
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

export default VirtualVillage;

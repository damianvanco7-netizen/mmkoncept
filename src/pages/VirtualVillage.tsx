import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DimensionsCarousel from "@/components/DimensionsCarousel";
import TechTabs from "@/components/TechTabs";
import vvLogo from "@/assets/logo-village.svg";
import mockup from "@/assets/phone-frame.png";
import heroVideo from "@/assets/vv-hero-video.mp4";
import darkBg from "@/assets/dark-section-bg.jpg";
import appScreens from "@/assets/vv-app-screens.png";
import teamPhoto from "@/assets/team-photo.png";
import vvHeroPhoto from "@/assets/vv-hero-photo.png";

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

      {/* Hero — full-screen photo with "virtual" text */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={vvHeroPhoto}
          alt="Virtual Village hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full overflow-hidden" style={{ lineHeight: 0.82 }}>
          <h1
            className="font-semibold tracking-tighter select-none"
            style={{
              fontSize: 'clamp(6rem, 18vw, 22rem)',
              color: '#E1D9D0',
              marginBottom: '-0.08em',
            }}
          >
            virtual
          </h1>
        </div>
      </section>

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
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">
            Meet Our Leadership Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            A synergy of European strategic vision and African technical excellence.
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12 max-w-4xl">
            A global team for a global vision
          </p>
          <img
            src={teamPhoto}
            alt="MM Concept Leadership Team"
            className="w-full max-w-3xl rounded-2xl mb-10 object-cover"
          />
          <p className="text-base text-foreground/70 leading-relaxed max-w-3xl">
            Behind Virtual Village stands a diverse and experienced team united by one belief: technology should serve people, not overwhelm them. We combine expertise in innovation, digital strategy, product development, and scalable technology to create a human-centered platform for everyday life. Our strength lies in connecting vision with execution — shaping Virtual Village as a trusted digital companion for citizens, families, communities, and cities.
          </p>
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

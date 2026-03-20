import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DimensionsCarousel from "@/components/DimensionsCarousel";
import TechTabs from "@/components/TechTabs";
import vvLogo from "@/assets/logo-village.svg";
import mockup from "@/assets/phone-frame.png";
import heroVideo from "@/assets/vv-hero-video.mp4";
import galleryFeatured from "@/assets/gallery-featured.png";
import galleryWide from "@/assets/gallery-wide.png";
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

      {/* Hero — full-screen photo */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={vvHeroPhoto}
          alt="Virtual Village hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Your personalized Universe */}
      <section className="relative min-h-screen flex items-center section-padding pt-24">
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
            <div className="relative w-[350px] md:w-[425px] lg:w-[500px] xl:w-[550px]">
              <img
                src={mockup}
                alt="Virtual Village app mockup"
                className="relative z-10 w-full pointer-events-none"
              />
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 object-cover"
                style={{
                  top: '5%',
                  left: '7.3%',
                  width: '57%',
                  height: '78%',
                  borderRadius: 'clamp(1.2rem, 3vw, 2.5rem)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* 7 Life Dimensions */}
      <DimensionsCarousel dimensions={dimensions} />

      {/* Gallery Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px] lg:auto-rows-[300px]">
            <div className="col-span-1 row-span-1 rounded-xl bg-foreground/10 flex items-center justify-center text-foreground/30 text-sm overflow-hidden">
              Photo
            </div>
            <div className="col-span-1 row-span-1 rounded-xl bg-foreground/10 flex items-center justify-center text-foreground/30 text-sm overflow-hidden">
              Photo
            </div>
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src={galleryFeatured} alt="Virtual Village app in hand" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-1 rounded-xl bg-foreground/10 flex items-center justify-center text-foreground/30 text-sm overflow-hidden">
              Photo
            </div>
          </div>
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

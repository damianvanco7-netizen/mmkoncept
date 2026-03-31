import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VVDimensionsGrid from "@/components/VVDimensionsGrid";
import TechTabs from "@/components/TechTabs";
import LeadershipTeam from "@/components/LeadershipTeam";
import NetworkCanvasMirrored from "@/components/NetworkCanvasMirrored";
import ShinyText from "@/components/ShinyText";
import vvLogo from "@/assets/logo-village.svg";
import vvHeroBgVideo from "@/assets/vv-hero-bg.mp4";
import vvLogoSvg from "@/assets/logo-virtual-village.svg";
import mockup from "@/assets/phone-frame.png";
import heroVideo from "@/assets/vv-hero-video.mp4";
import vvHeroLogo from "@/assets/logo-vv-hero.svg";
import vvHeroPhone from "@/assets/vv-hero-phone.png";
import galleryFeatured from "@/assets/gallery-featured.png";
import galleryWide from "@/assets/gallery-wide.png";
import gallerySquare1 from "@/assets/gallery-square1.png";
import gallerySquare2 from "@/assets/gallery-square2.png";

import teamPhoto from "@/assets/team-photo.png";
import vvHeroPhoto from "@/assets/vv-hero-photo.png";
import vvKruh from "@/assets/vv-kruh.png";

const VirtualVillage = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 15%, hsl(var(--warm-beige)) 35%, hsl(var(--warm-taupe)) 55%, hsl(var(--warm-beige)) 75%, hsl(var(--warm-taupe)) 100%)" }}>
      <Navbar />

      {/* Hero — two-column: text left, full-height photo right */}
      <section className="relative min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Left — text */}
          <div className="flex flex-col justify-center section-padding py-24">
            <img
              src={vvHeroLogo}
              alt="Virtual Village"
              className="mb-8 md:mb-10"
              style={{ width: 'clamp(220px, 28vw, 420px)' }}
            />
            <h1 className="heading-h2 text-foreground/80">
              Your personalized<br />Universe.
            </h1>
          </div>

          {/* Right — hero image */}
          <div className="hidden md:block relative min-h-screen overflow-hidden">
            <img
              src={vvHeroPhone}
              alt="Virtual Village"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ borderBottomLeftRadius: 'clamp(2rem, 5vw, 5rem)' }}
            />
          </div>
        </div>
      </section>

      {/* Section 2 — More than a platform */}
      <section className="relative min-h-screen flex items-center section-padding py-24">
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col items-start">
            <h2 className="heading-h2 mb-8 pb-4">
              <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
                More than a platform<br />
                Virtual Village moves with you.
              </ShinyText>
            </h2>
            <div className="mb-8">
              <p className="heading-h3 text-foreground">
                A companion.<br />
                A guide.<br />
                A quiet intelligence <span className="font-normal">in the background.</span>
              </p>
            </div>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 max-w-lg">
              It helps you get things done effortlessly —<br />
              so you can spend less time navigating technology<br />
              and more time enjoying life, nature, and the people around you.
            </p>
            <p className="text-sm md:text-base font-semibold text-foreground mb-2">
              Intelligence that understands your world.
            </p>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-lg">
              Powered by <strong>Google Cloud</strong> and our <strong>proprietary STAR Pro AI,</strong><br />
              Virtual Village adapts to your location, your needs, and your everyday life.
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

      {/* Section 3 — 7 Life Dimensions with vv-kruh image */}
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h2 className="heading-h2 text-foreground/80 mb-8">
              7 Life Dimensions.<br />
              One Intuitive Space.
            </h2>
            <p className="heading-h3 text-foreground/80 max-w-lg font-normal">
              Virtual Village brings together everything you need for everyday life — in one seamless, human-centered experience.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={vvKruh}
              alt="Virtual Village ecosystem — 7 Life Dimensions"
              className="w-full max-w-[700px]"
            />
          </div>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Section 4 — Dimensions grid */}
      <VVDimensionsGrid />

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Technology Section */}
      <TechTabs />

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* New section — From concept to product */}
      <section className="py-28 md:py-36 section-padding">
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-foreground/80 leading-tight mb-4 max-w-4xl">
            From concept to product, Virtual Village is taking shape as a real ecosystem for everyday life.
          </h2>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Gallery Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px] lg:auto-rows-[300px]">
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
              <img src={gallerySquare1} alt="Virtual Village healthcare screen" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
              <img src={gallerySquare2} alt="Virtual Village culture screen" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src={galleryFeatured} alt="Virtual Village app in hand" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden">
              <img src={galleryWide} alt="Virtual Village restaurant view" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Leadership Team Section */}
      <LeadershipTeam />

      {/* CTA + Footer with homepage dark gradient */}
      <div style={{ background: "linear-gradient(180deg, #272727 0%, #3a3937 30%, #4a4745 60%, #615F5D 100%)" }}>
        <section className="relative py-28 md:py-36 section-padding overflow-hidden">
          <NetworkCanvasMirrored />
          <div className="relative z-10 w-full max-w-3xl">
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
            <button
              className="group rounded-full flex flex-col items-center justify-center text-center transition-all duration-500"
              style={{
                width: "clamp(160px, 16vw, 220px)",
                height: "clamp(160px, 16vw, 220px)",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              <span className="text-white text-lg md:text-xl font-semibold">Connect</span>
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default VirtualVillage;

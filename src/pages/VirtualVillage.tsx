import Navbar from "@/components/Navbar";
import Grainient from "@/components/Grainient";
import Footer from "@/components/Footer";
import VVDimensionsGrid from "@/components/VVDimensionsGrid";

import TechTabs from "@/components/TechTabs";
import LeadershipTeam from "@/components/LeadershipTeam";

import ShinyText from "@/components/ShinyText";
import vvLogo from "@/assets/logo-village.svg";
import vvHeroBgVideo from "@/assets/vv-hero-bg.mp4";
import vvLogoSvg from "@/assets/logo-virtual-village.svg";
import mockup from "@/assets/phone-frame.png";
import heroVideo from "@/assets/vv-hero-video.mp4";
import vvHeroLogo from "@/assets/logo-vv-hero.svg";
import vvHeroPhone from "@/assets/vv-hero-photo-new.png";
import galleryFeatured from "@/assets/gallery-featured.png";
import gallerySquare1 from "@/assets/vv-photo-2-1.png";
import gallerySquare2 from "@/assets/vv-photo-3-1.png";
import galleryWide from "@/assets/vv-photo-1-1.png";

import teamPhoto from "@/assets/team-photo.png";
import vvHeroPhoto from "@/assets/vv-hero-photo.png";
import vvKruh from "@/assets/vv-kruh.png";

const VirtualVillage = () => {
  return (
    <div className="min-h-screen relative">
      <Grainient
        color1="#A69C8D"
        color2="#D3CFC8"
        color3="#BDB5A9"
        timeSpeed={0.55}
        warpFrequency={4.0}
        warpSpeed={2.5}
        grainAmount={0.04}
        contrast={1.2}
        saturation={0.7}
      />
      <div className="relative" style={{ zIndex: 1 }}>
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
              <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
                Your personalized<br />Universe.
              </ShinyText>
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
                More than<br />a platform...
              </ShinyText>
            </h2>
            <p className="heading-h3 text-foreground/80 max-w-lg font-normal mb-8">
              A companion.<br />
              A guide. A quiet intelligence<br />in the background.
            </p>
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
          <div className="flex items-start justify-center md:justify-end pt-0 md:pt-2 md:pr-[-2rem] lg:pr-0 md:translate-x-8">
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
              <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
                7 Life Dimensions.<br />
                One Intuitive Space.
              </ShinyText>
            </h2>
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

      {/* Gallery Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="w-full flex flex-col items-center text-center mb-12">
          <h2 className="heading-h2 text-foreground/80">
            <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
              Product Gallery
            </ShinyText>
          </h2>
        </div>
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

      {/* Footer with dark gradient */}
      <div style={{ background: "linear-gradient(180deg, #272727 0%, #3a3937 30%, #4a4745 60%, #615F5D 100%)" }}>
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default VirtualVillage;

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
import vvMockup from "@/assets/vv-mockup.png";
import vvMockupPhones from "@/assets/vv-mockup-phones.png";
import vvHeroLogo from "@/assets/logo-vv-hero.svg";
import vvHeroPhone from "@/assets/vv-hero-photo-new.png";
import galleryFeatured from "@/assets/gallery-featured.png";
import gallerySquare1 from "@/assets/vv-photo-2-1.png";
import gallerySquare2 from "@/assets/vv-photo-3-1.png";
import galleryWide from "@/assets/vv-photo-1-1.png";

import teamPhoto from "@/assets/team-photo.png";
import vvHeroPhoto from "@/assets/vv-hero-photo.png";


const VirtualVillage = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
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
          <div className="flex flex-col justify-center section-padding py-24 pt-[20vh] md:pt-24">
            <img
              src={vvHeroLogo}
              alt="Virtual Village"
              className="mb-8 md:mb-10"
              style={{ width: 'clamp(220px, 28vw, 420px)' }}
            />
            <h1 className="heading-h2 text-foreground/80">
              <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
                Your personalized<br />Universe
              </ShinyText>
            </h1>
          </div>

          {/* Right — hero image */}
          <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20hero%20sekcia%20photo.png"
              alt="Virtual Village"
              className="absolute inset-0 w-full h-full object-cover md:[border-bottom-left-radius:clamp(2rem,5vw,5rem)]"
            />
          </div>
        </div>
      </section>

      {/* Section 2 — More than a platform */}
      <section className="relative min-h-screen flex items-start pt-24 md:pt-32 py-6 overflow-hidden">
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 items-start section-padding md:pr-0">
          {/* Left — text */}
          <div className="flex flex-col items-start pt-8">
            <h2 className="heading-h2 mb-4 md:mb-8 pb-0 md:pb-4">
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

          {/* Right — mockup phones */}
          <div className="flex items-start justify-center pt-8 md:-ml-12">
            <img
              src={vvMockupPhones}
              alt="Virtual Village app mockup"
              className="w-[90%] md:w-full pointer-events-none"
            />
          </div>
        </div>
      </section>

      {/* divider removed */}

      {/* Section 3+4 — One Intuitive Space + 7 Life Dimensions */}
      <div className="mt-8">
        <VVDimensionsGrid />
      </div>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Technology Section */}
      <TechTabs />

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Gallery Section */}
      <section className="py-10 md:py-14 section-padding">
        <div className="w-full flex flex-col items-center text-center mb-12">
          <h2 className="heading-h2 text-foreground/80">
            <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
              Product Gallery
            </ShinyText>
          </h2>
        </div>
        <div className="w-full">
          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-4 gap-3 md:gap-4 auto-rows-[260px] lg:auto-rows-[300px]">
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
              <img src="https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20photo%20mockup%204.png" alt="Virtual Village mockup 4" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
              <img src={galleryFeatured} alt="Virtual Village location select" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-2 rounded-xl overflow-hidden">
              <img src="https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20photo%20mockup%203.png" alt="Virtual Village mockup" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden">
              <img src="https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20photo%20mockup.png" alt="Virtual Village app mockup" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Mobile carousel */}
          <div className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-[clamp(1.5rem,5vw,6rem)]  px-[clamp(1.5rem,5vw,6rem)]">
            {[
              { src: "https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20photo%20mockup%204.png", alt: "Virtual Village mockup 4" },
              { src: galleryFeatured, alt: "Virtual Village location select" },
              { src: "https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20photo%20mockup%203.png", alt: "Virtual Village mockup" },
              { src: "https://raw.githubusercontent.com/damianvanco7-netizen/mmkoncept/main/vv%20photo%20mockup.png", alt: "Virtual Village app mockup" },
            ].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-[75vw] h-[55vw] rounded-xl overflow-hidden snap-center">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />

      {/* Leadership Team Section */}
      <LeadershipTeam />

      <Footer variant="light" />
      </div>
    </div>
  );
};

export default VirtualVillage;

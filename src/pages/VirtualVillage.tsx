import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VVDimensionsGrid from "@/components/VVDimensionsGrid";
import TechTabs from "@/components/TechTabs";
import ShinyText from "@/components/ShinyText";
import vvLogo from "@/assets/logo-village.svg";
import mockup from "@/assets/phone-frame.png";
import heroVideo from "@/assets/vv-hero-video.mp4";
import galleryFeatured from "@/assets/gallery-featured.png";
import galleryWide from "@/assets/gallery-wide.png";
import gallerySquare1 from "@/assets/gallery-square1.png";
import gallerySquare2 from "@/assets/gallery-square2.png";
import darkBg from "@/assets/dark-section-bg.jpg";
import teamPhoto from "@/assets/team-photo.png";
import vvHeroPhoto from "@/assets/vv-hero-photo.png";
import vvKruh from "@/assets/vv-kruh.png";

const VirtualVillage = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 15%, hsl(var(--warm-beige)) 35%, hsl(var(--warm-taupe)) 55%, hsl(var(--warm-beige)) 75%, hsl(var(--warm-taupe)) 100%)" }}>
      <Navbar />

      {/* Hero — two-column: text left, photo right */}
      <section className="relative min-h-screen flex items-center section-padding pt-24">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col items-start">
            <h1
              className="font-light italic text-foreground/40 leading-[1.1] mb-6"
              style={{
                fontSize: 'clamp(4rem, 8vw, 8rem)',
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Virtual<br />Village
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight text-foreground/80 leading-[1.1]">
              Your personalized<br />Universe.
            </h2>
          </div>

          {/* Right — hero photo */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={vvHeroPhoto}
              alt="Virtual Village app in hand"
              className="w-full max-w-[600px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 — More than a platform */}
      <section className="relative min-h-screen flex items-center section-padding py-24">
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-semibold tracking-tight leading-[1.15] mb-8">
              <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
                More than a platform<br />
                — Virtual Village moves with you.
              </ShinyText>
            </h2>
            <div className="mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-foreground/80 leading-tight mb-8">
              7 Life Dimensions.<br />
              One Intuitive Space.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-lg">
              Virtual Village brings together everything you need for everyday life — in one seamless, human-centered experience.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={vvKruh}
              alt="Virtual Village ecosystem — 7 Life Dimensions"
              className="w-full max-w-[550px]"
            />
          </div>
        </div>
      </section>

      {/* Section 4 — Dimensions grid */}
      <VVDimensionsGrid />

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

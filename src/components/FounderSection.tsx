import martinaPhoto from "@/assets/martina.png";
import ShinyText from "./ShinyText";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-28 md:py-36 section-padding overflow-hidden"
    >
      <div className="w-full">
        {/* Small label above heading */}
        <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/40 mb-4">About</p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.45] mb-12 md:mb-16">
          <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
            Bridging Precision
            <br />
            and Humanity
          </ShinyText>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Bio */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed">
                My perspective was shaped at the intersection of two very different worlds: the high-precision automotive environment of Volkswagen, where systems are built for efficiency and performance, and a life journey across Slovakia, Germany, and four transformative years in Africa with my family.
              </p>

              <p className="text-white font-bold italic leading-relaxed">
                Between these worlds, I came to understand a simple truth: the most powerful solutions are often the most intuitive, and real freedom lies in simplicity.
              </p>

              <p className="text-white/70 leading-relaxed">
                As a strategist, entrepreneur, and mother of two, I have experienced firsthand how digital noise and fragmentation can overwhelm everyday life. That experience continues to shape my work. I believe that technology should never add more pressure or complexity — it should work quietly in the background, as an invisible supporter.
              </p>

              <p className="text-white/70 leading-relaxed">
                Today, as the founder of mm concept and the architect of Virtual Village, I create concepts and ecosystems that turn complexity into clarity. By combining precision, structure, and a deeply human perspective, I design solutions that help people navigate modern life with more ease, focus, and meaning.
              </p>
            </div>
          </div>

          {/* Portrait — B&W */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden" style={{ width: "clamp(280px, 28vw, 420px)", height: "clamp(280px, 28vw, 420px)" }}>
              <img
                src={martinaPhoto}
                alt="Martina Masaryková – CEO, mm concept"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

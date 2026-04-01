import ShinyText from "./ShinyText";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-28 md:py-36 section-padding overflow-hidden"
    >
      <div className="w-full">
        {/* Small label above heading */}
        <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-4">About</p>

        {/* Main heading */}
        <h2 className="heading-h2 mb-12 md:mb-16">
          <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
            Bridging Precision
            <br />
            and Humanity
          </ShinyText>
        </h2>

        <div className="relative">
          {/* Text column - max 50% width on desktop */}
          <div className="md:max-w-[50%] space-y-6">
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

          {/* Circle image placeholder - aligned bottom-right */}
          <div className="hidden md:flex absolute bottom-0 right-0 w-[clamp(196px,15.4vw,266px)] h-[clamp(196px,15.4vw,266px)] rounded-full overflow-hidden border border-white/10 bg-white/5 items-center justify-center">
            <span className="text-white/20 text-sm tracking-widest uppercase">Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

import ShinyText from "./ShinyText";
import aboutPhoto from "@/assets/about-photo.png";

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
              My perspective was shaped at the intersection of two very different worlds: the high-precision automotive environment, where systems are built for efficiency and performance, and a life journey across Slovakia, Germany, and four transformative years in Africa.
            </p>

            <p className="text-white font-bold italic leading-relaxed">
              Between these worlds, I came to understand a simple truth: the most powerful solutions are often the most intuitive, and real freedom lies in simplicity.
            </p>

            <p className="text-white/70 leading-relaxed">
              As a strategist, entrepreneur, and mother, I have experienced firsthand how digital noise and fragmentation can overwhelm everyday life. That experience continues to shape my work. I believe that technology should never add more pressure or complexity — it should work quietly in the background, as an invisible supporter.
            </p>

            <p className="text-white/70 leading-relaxed">
              Today, as the founder of mm concept and the architect of Virtual Village,
              I create concepts and ecosystems that turn complexity into clarity.
              By combining precision, structure, and a deeply human perspective,
              I design solutions that help people navigate modern life with more ease, focus, and meaning.
            </p>
          </div>

          {/* Circle image — desktop: absolute bottom-right, mobile: left-aligned below text */}
          <div className="mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0 w-[160px] h-[160px] md:w-[clamp(196px,15.4vw,266px)] md:h-[clamp(196px,15.4vw,266px)] flex items-center justify-center">
            {/* Outer circle placeholder */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            {/* Inner photo */}
            <div className="w-[75%] h-[75%] rounded-full overflow-hidden relative z-10">
              <img src={aboutPhoto} alt="Martina Masaryková" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

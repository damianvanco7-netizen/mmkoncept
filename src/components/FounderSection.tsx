import martinaPhoto from "@/assets/martina.png";
import ShinyText from "./ShinyText";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-28 md:py-36 section-padding overflow-hidden"
    >
      <div className="w-full">
        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.45] mb-12 md:mb-16">
          <ShinyText speed={4} color="rgba(255,255,255,0.35)" shineColor="rgba(255,255,255,1)" spread={140}>
            My mission is driven by
            <br />
            a simple but powerful belief:
            <br />
            Life, just simplified.
          </ShinyText>
        </h2>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Bio */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-white font-bold leading-relaxed mb-1">
                  Bridging Precision and Humanity
                </p>
                <p className="text-white/70 leading-relaxed">
                  My perspective was shaped at the intersection of two very different worlds: the high-precision automotive environment of Volkswagen, where systems are built for efficiency and performance, and a life journey across Slovakia, Germany, and four transformative years in Africa with my family.
                </p>
                <p className="text-white/70 leading-relaxed mt-2">
                  Between these worlds, I learned a simple truth: <strong className="text-white font-bold">the most powerful solutions are often the most intuitive and true freedom is found in simplicity.</strong>
                </p>
              </div>

              <p className="text-white/70 leading-relaxed">
                As a strategist, entrepreneur, and mother of two, I have experienced firsthand how digital noise and fragmentation can overwhelm everyday life. That experience continues to shape my work. I believe that technology should never add more pressure or complexity — it should work quietly in the background, as an invisible supporter.
              </p>

              <p className="text-white/70 leading-relaxed">
                Today, as the founder of mm concept and the architect of Virtual Village,
                I create concepts and ecosystems that turn complexity into clarity.
                By combining precision, structure, and a deeply human perspective,
                I design solutions that help people navigate modern life with more ease, focus, and meaning.
              </p>

              <p className="text-white font-bold italic leading-relaxed">
                Life. Just simplified.
              </p>
            </div>
          </div>

          {/* Portrait — B&W */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden" style={{ width: "clamp(220px, 22vw, 340px)", height: "clamp(220px, 22vw, 340px)" }}>
              <img
                src={martinaPhoto}
                alt="Martina Masaryková – CEO, mm concept"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

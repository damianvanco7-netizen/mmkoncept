import { Eye, Layout, Cpu, Handshake, Server } from "lucide-react";
import vvAppIconImg from "@/assets/vv-app-icon.png";

const pillars = [
  { icon: Eye, title: "Visionary Leadership", desc: "Integrated system expertise driving long-term digital strategy." },
  { icon: Layout, title: "Architecture-First Design", desc: "User-centered execution built on solid structural foundations." },
  { icon: Cpu, title: "AI-Driven Infrastructure", desc: "Intelligent systems designed for scale and contextual relevance." },
  { icon: Handshake, title: "Ecosystem Partnerships", desc: "Strategic technology alliances for accelerated development." },
];

const challenges = [
  "Integration of legacy and modern systems",
  "Scalable cloud-native deployment",
  "Cost-efficient AI inference at scale",
  "Governance alignment under EU AI Act",
  "Modular extensibility across cities",
];

const WhyMmConcept = () => {
  return (
    <section
      id="why"
      className="py-28 md:py-36 section-padding bg-near-black"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-warm-taupe uppercase mb-4">Why mm concept</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-warm-beige leading-tight max-w-3xl mx-auto">
            System-Level Thinking. Scalable Architecture. Human Intention.
          </h2>
        </div>

        {/* Bento grid - Vectura style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ height: 'clamp(500px, 65vh, 700px)' }}>
          {/* Left tall card — full background image with overlay text */}
          <div className="md:row-span-2 rounded-2xl overflow-hidden relative">
            <img
              src={vvAppIconImg}
              alt="Platform Architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight max-w-[280px]">
                  Platform Architecture Challenges
                </h3>
              </div>
              <div>
                <ul className="space-y-2">
                  {challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4 pillar cards in 2x2 grid — clean flat white cards like Vectura */}
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/[0.07] p-6 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-warm-taupe" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-warm-beige mb-3">{title}</h3>
                <p className="text-sm text-warm-taupe leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMmConcept;

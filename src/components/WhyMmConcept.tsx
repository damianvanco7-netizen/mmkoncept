import { Eye, Layout, Cpu, Handshake, Server } from "lucide-react";

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
      className="relative z-10 py-32 md:py-44 section-padding rounded-t-[2rem] md:rounded-t-[3rem] -mt-8"
      style={{ background: 'linear-gradient(135deg, #181818 0%, #C5BEB4 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-warm-taupe uppercase mb-4">Why mm concept</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige leading-tight max-w-3xl mx-auto">
            System-Level Thinking. Scalable Architecture. Human Intention.
          </h2>
        </div>

        {/* Bento grid: large card left + 2x2 right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Large card — Challenges — spans 2 rows */}
          <div className="md:row-span-2 neu-card-dark p-8 md:p-10 flex flex-col">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ background: 'hsl(18 40% 10%)', boxShadow: 'inset 3px 3px 6px hsl(18 100% 2%), inset -3px -3px 6px hsl(18 30% 12%)' }}>
              <Server className="w-5 h-5 text-warm-taupe" />
            </div>
            <h3 className="text-xl font-semibold text-warm-beige mb-6">Platform Architecture Challenges</h3>
            <ul className="space-y-4 flex-1">
              {challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-warm-taupe">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-taupe mt-2 shrink-0" />
                  <span className="text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 smaller cards — 2x2 grid */}
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="neu-card-dark p-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'hsl(18 40% 10%)', boxShadow: 'inset 3px 3px 6px hsl(18 100% 2%), inset -3px -3px 6px hsl(18 30% 12%)' }}>
                <Icon className="w-5 h-5 text-warm-taupe" />
              </div>
              <h3 className="text-base font-semibold text-warm-beige mb-2">{title}</h3>
              <p className="text-sm text-warm-taupe leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMmConcept;

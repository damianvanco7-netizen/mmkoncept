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
    <section id="why" className="py-28 md:py-36 bg-near-black section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-warm-taupe uppercase mb-4">Why mm concept</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-beige leading-tight max-w-3xl mx-auto">
            System-Level Thinking. Scalable Architecture. Human Intention.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-warm-taupe/20 bg-warm-beige/5">
              <Icon className="w-5 h-5 text-warm-taupe mb-4" />
              <h3 className="text-base font-semibold text-warm-beige mb-2">{title}</h3>
              <p className="text-sm text-warm-taupe leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Server className="w-5 h-5 text-warm-taupe" />
            <h3 className="text-lg font-semibold text-warm-beige">Platform Architecture Challenges</h3>
          </div>
          <ul className="space-y-3">
            {challenges.map((c) => (
              <li key={c} className="flex items-start gap-3 text-warm-taupe">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-taupe mt-2 shrink-0" />
                <span className="text-sm leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyMmConcept;

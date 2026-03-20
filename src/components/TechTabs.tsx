import { useState } from "react";
import techVideo from "@/assets/vv-tech-video.mp4";

const tabs = [
  {
    id: "ai",
    label: "AI Layer — STAR",
    title: "AI Layer — STAR",
    description:
      "Our AI engine STAR, powered by Google Gemini, turns context (location, time, behavior) into real-time, actionable recommendations — proactive and on demand.",
    details: [
      "Context-aware intelligence based on location, time & behavior",
      "Real-time proactive and on-demand recommendations",
      "Powered by Google Gemini large language models",
    ],
  },
  {
    id: "data",
    label: "Data & Quality",
    title: "Data & Quality",
    description:
      "Integrated with Google Places API, enhanced by custom filtering (≥4.0 ratings) and intelligent matching for accurate, high-quality results.",
    details: [
      "Google Places API integration for rich local data",
      "Custom quality filtering with ≥4.0 rating threshold",
      "Intelligent matching algorithms for precision results",
    ],
  },
  {
    id: "security",
    label: "Security & Scale",
    title: "Security & Scale",
    description:
      'Row Level Security (RLS) ensures strict data privacy. Our modular "Universe" architecture enables seamless global expansion — no new code required.',
    details: [
      "Row Level Security (RLS) for strict data privacy",
      'Modular "Universe" architecture for global expansion',
      "Zero-code scaling to new regions and markets",
    ],
  },
];

const TechTabs = ({ mockup }: { mockup: string }) => {
  const [active, setActive] = useState("ai");
  const [animating, setAnimating] = useState(false);

  const current = tabs.find((t) => t.id === active)!;

  const switchTab = (id: string) => {
    if (id === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-28 md:py-36 section-padding">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-foreground uppercase mb-4">
            Technology
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Cloud‑native. <span className="whitespace-nowrap">AI‑powered.</span>{" "}
            Globally&nbsp;scalable.
          </h2>
          <p className="text-base text-foreground leading-relaxed mb-10">
            Virtual Village runs on a modern stack built for speed and
            flexibility: React Native (TypeScript + Expo) for cross-platform
            delivery, Supabase (PostgreSQL) for real-time data, and Edge
            Functions (Deno) for scalable serverless logic.
          </p>

          {/* Pill buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  active === tab.id
                    ? "bg-foreground/10 border-foreground/30 text-foreground"
                    : "border-foreground/20 text-foreground/60 hover:bg-foreground/5 hover:border-foreground/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Card */}
          <div
            className="rounded-2xl border border-foreground/15 p-8 md:p-10 transition-all duration-250 ease-in-out"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {current.title}
            </h3>
            <p className="text-base text-foreground/70 leading-relaxed mb-6">
              {current.description}
            </p>
            <ul className="space-y-3">
              {current.details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm text-foreground/70"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-base font-semibold text-foreground mt-10">
            Built for performance. Designed for real life.
          </p>
        </div>

        {/* Right — mockup */}
        <div className="flex items-center justify-center md:justify-end">
          <img
            src={mockup}
            alt="Virtual Village technology"
            className="w-[350px] md:w-[425px] lg:w-[500px] xl:w-[550px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default TechTabs;

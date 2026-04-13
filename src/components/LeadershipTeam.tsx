import { useState, useRef, useEffect } from "react";
import teamPhoto from "@/assets/team-photo.png";
import ShinyText from "@/components/ShinyText";

const members = [
  {
    id: "hans",
    label: "Hans-Christian Heidecke",
    role: "Investor, Strategic Partner & Board Advisor (Germany)",
    bio: "A seasoned executive with extensive experience in international IT leadership and strategic management. As an investor and advisor, Hans-Christian provides high-level guidance on navigating the global tech landscape, ensuring that Virtual Village meets the highest standards of operational excellence and financial scalability.",
    focus: "Strategic Planning, Global Scalability, Financial Governance.",
  },
  {
    id: "vuyo",
    label: "Vuyolwetu Madikiza",
    role: "Chief Technology Officer (South Africa)",
    bio: "A senior IT leader with over 10 years of experience at Volkswagen Group Africa, where he managed complex software portfolios and led digital transformation projects. Vuyo leads the development of our STAR Pro AI engine, utilizing his extensive expertise in large-scale system architecture, Data Science, and cloud infrastructure to build a scalable, enterprise-grade platform.",
    focus: "AI Architecture, Data Strategy, Cloud Infrastructure.",
  },
  {
    id: "martina",
    label: "Martina Masaryková",
    role: "Founder, CEO & Project Lead (Slovakia)",
    bio: "A multilingual business founder and visionary with a deep focus on human-centric technology. Martina's unique perspective, shaped by her life in Slovakia, Germany, and a four-year residency in Africa, led to the creation of Virtual Village. As Project Lead, she bridges the gap between digital innovation and the real-world needs of cross-border communities.",
    focus: "Visionary Leadership, Project Execution, Community Partnerships.",
  },
];

const LeadershipTeam = () => {
  const [active, setActive] = useState<string>("hans");
  const [animating, setAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = members.find((m) => m.id === active)!;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(`[data-member="${active}"]`) as HTMLElement | null;
    if (!activeBtn) return;

    if (window.matchMedia("(max-width: 767px)").matches) {
      activeBtn.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      return;
    }

    const scrollLeft = activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  }, [active]);

  const switchMember = (id: string) => {
    if (animating || id === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-16 md:py-20 section-padding">
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="heading-h2 text-foreground/80 mb-12">
          <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
            Diversity is Our Power
          </ShinyText>
        </h2>
        <img
          src={teamPhoto}
          alt="MM Concept Leadership Team"
          className="w-full max-w-3xl rounded-2xl mb-12 object-cover grayscale"
        />

        {/* Pill buttons — horizontal scroll on mobile */}
        <div
          ref={scrollRef}
          className="relative left-1/2 w-screen -translate-x-1/2 mb-10 overflow-x-auto md:left-auto md:w-full md:translate-x-0 md:overflow-visible scrollbar-hide snap-x snap-mandatory pb-2"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x pan-y" }}
        >
          <div className="flex w-max min-w-max md:min-w-0 md:w-full md:flex-wrap md:justify-center gap-3 px-6 md:px-0">
            {members.map((member) => (
              <button
                key={member.id}
                data-member={member.id}
                onClick={() => switchMember(member.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold liquid-glass-circle-light transition-all duration-300 whitespace-nowrap snap-start flex-shrink-0 select-none ${
                  active === member.id
                    ? "border-foreground/40 text-foreground"
                    : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/70"
                }`}
                style={{ touchAction: "pan-x" }}
              >
                {member.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className="max-w-2xl text-center transition-all duration-250 ease-in-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
          }}
        >
          <p className="text-lg md:text-xl font-bold text-foreground mb-1">
            {current.role}
          </p>
          <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-4">
            {current.bio}
          </p>
          <p className="text-sm md:text-base font-bold text-foreground">
            Focus: {current.focus}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;

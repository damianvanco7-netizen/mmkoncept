import { ArrowRight } from "lucide-react";

const flowSteps = [
  "User Input",
  "Gemini LLM",
  "Ethical Data Filter",
  "Personalized Output",
];

const TrustTechSection = () => {
  return (
    <section id="tech" className="py-28 md:py-36 section-padding" style={{ background: 'linear-gradient(135deg, #181818 0%, #C5BEB4 100%)' }}>
      <div className="w-full">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-warm-taupe uppercase mb-4">Technology</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-warm-beige mb-4">
            Trust Through Transparency
          </h2>
          <p className="text-lg text-warm-taupe max-w-xl mx-auto">
            A clear, auditable pipeline from user input to personalised output.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-20">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:gap-4">
              <div className="px-6 py-4 neu-card-dark text-center min-w-[140px]">
                <p className="text-sm font-medium text-warm-beige">{step}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-warm-taupe hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-warm-taupe uppercase mb-8">Technology Partners</p>
          <div className="flex items-center justify-center gap-8">
            <div className="px-8 py-4 neu-card-dark">
              <span className="text-sm font-semibold text-warm-beige tracking-wide">Google Cloud</span>
            </div>
            <div className="px-8 py-4 neu-card-dark">
              <span className="text-sm font-semibold text-warm-beige tracking-wide">Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustTechSection;

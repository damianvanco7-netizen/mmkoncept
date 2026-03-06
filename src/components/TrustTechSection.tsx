import { ArrowRight } from "lucide-react";

const flowSteps = [
  "User Input",
  "Gemini LLM",
  "Ethical Data Filter",
  "Personalized Output",
];

const TrustTechSection = () => {
  return (
    <section id="tech" className="py-28 md:py-36 bg-near-black section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-warm-taupe uppercase mb-4">Technology</p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-beige mb-4">
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
              <div className="px-6 py-4 rounded-xl border border-warm-taupe/20 bg-warm-beige/5 text-center min-w-[140px]">
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
          <div className="flex items-center justify-center gap-12">
            <div className="px-6 py-3 rounded-full border border-warm-taupe/20 bg-warm-beige/5">
              <span className="text-sm font-semibold text-warm-beige tracking-wide">Google Cloud</span>
            </div>
            <div className="px-6 py-3 rounded-full border border-warm-taupe/20 bg-warm-beige/5">
              <span className="text-sm font-semibold text-warm-beige tracking-wide">Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustTechSection;

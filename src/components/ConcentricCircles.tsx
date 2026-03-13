const ConcentricCircles = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
    <div className="absolute w-[500px] h-[500px] rounded-full border border-foreground/[0.04]" />
    <div className="absolute w-[800px] h-[800px] rounded-full border border-foreground/[0.035]" />
    <div className="absolute w-[1100px] h-[1100px] rounded-full border border-foreground/[0.03]" />
    <div className="absolute w-[1400px] h-[1400px] rounded-full border border-foreground/[0.025]" />
    <div className="absolute w-[1700px] h-[1700px] rounded-full border border-foreground/[0.02]" />
    <div className="absolute w-[2000px] h-[2000px] rounded-full border border-foreground/[0.015]" />
  </div>
);

export default ConcentricCircles;

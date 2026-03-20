import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Dimension {
  icon: string;
  title: string;
  description: string;
}

const ITEMS_PER_PAGE = 4;

const DimensionsCarousel = ({ dimensions }: { dimensions: Dimension[] }) => {
  const totalPages = Math.ceil(dimensions.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const visible = dimensions.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  const goTo = (next: number, dir: "left" | "right") => {
    if (animating) return;
    const wrapped = ((next % totalPages) + totalPages) % totalPages;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setPage(wrapped);
      setAnimating(false);
    }, 300);
  };

  return (
    <section className="py-28 md:py-36 section-padding">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              7 Life Dimensions.<br />1 Intuitive Space.
            </h2>
            <p className="text-base text-foreground leading-relaxed max-w-xl">
              Virtual Village is built on a modular architecture designed to
              harmonize every aspect of modern daily life.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo(page - 1, "left")}
              disabled={animating}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center transition-all duration-300 hover:border-foreground/60 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} className="text-foreground/60" />
            </button>
            <button
              onClick={() => goTo(page + 1, "right")}
              disabled={animating}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center transition-all duration-300 hover:border-foreground/60 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} className="text-foreground/60" />
            </button>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6 transition-all duration-300 ease-in-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "right" ? "-40px" : "40px"})`
              : "translateX(0)",
          }}
        >
          {visible.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className="rounded-full border border-foreground/15 flex flex-col items-center justify-center text-center"
              style={{
                width: "clamp(220px, 20vw, 280px)",
                height: "clamp(220px, 20vw, 280px)",
              }}
            >
              <p className="text-xs text-foreground/40 font-semibold mb-2">
                0{page * ITEMS_PER_PAGE + i + 1}
              </p>
              <div className="w-8 h-8 flex items-center justify-center mb-2">
                <img src={icon} alt={title} className="w-7 h-7 opacity-70" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-foreground px-6 leading-tight">{title}</h3>
              <p className="text-xs text-foreground/60 leading-relaxed px-8 mt-1 line-clamp-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DimensionsCarousel;

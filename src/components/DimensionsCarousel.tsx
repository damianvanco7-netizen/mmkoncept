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

  const visible = dimensions.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <section className="py-28 md:py-36 section-padding">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              7 Life Dimensions.<br />1 Intuitive Space.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Virtual Village is built on a modular architecture designed to
              harmonize every aspect of modern daily life.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center transition-all duration-300 hover:border-foreground/60 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} className="text-foreground/60" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center transition-all duration-300 hover:border-foreground/60 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} className="text-foreground/60" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {visible.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-foreground/15 p-8 md:p-10 flex flex-col"
            >
              <p className="text-sm text-foreground/40 font-semibold mb-6">
                0{page * ITEMS_PER_PAGE + i + 1}
              </p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 border border-foreground/15">
                <img src={icon} alt={title} className="w-5 h-5 opacity-70" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DimensionsCarousel;

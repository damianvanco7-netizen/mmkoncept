import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  itemsPerPage?: number;
}

const MobileCarousel = ({ children, itemsPerPage = 2 }: MobileCarouselProps) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const visibleItems = children.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const goTo = (next: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setPage(next);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const handlePrev = () => {
    const prev = page === 0 ? totalPages - 1 : page - 1;
    goTo(prev, "left");
  };

  const handleNext = () => {
    const next = page === totalPages - 1 ? 0 : page + 1;
    goTo(next, "right");
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col gap-4 transition-all duration-300 ease-in-out"
        style={{
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating
            ? `translateX(${direction === "right" ? "-20px" : "20px"})`
            : "translateX(0)",
        }}
      >
        {visibleItems.map((item, i) => (
          <div key={`${page}-${i}`} className="min-h-0">
            {item}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <span className="text-sm text-current/60 font-medium">
          {page + 1} / {totalPages}
        </span>
      </div>
    </div>
  );
};

export default MobileCarousel;

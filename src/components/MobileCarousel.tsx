import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  itemsPerPage?: number;
}

const MobileCarousel = ({ children, itemsPerPage = 2 }: MobileCarouselProps) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const visibleItems = children.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        {visibleItems}
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border border-current/20 flex items-center justify-center disabled:opacity-30 transition-opacity"
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

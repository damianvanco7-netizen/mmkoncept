import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  itemsPerPage?: number;
}

const MobileCarousel = ({ children, itemsPerPage = 2 }: MobileCarouselProps) => {
  const [page, setPage] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  const visibleItems = children.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const animateTo = useCallback((nextPage: number) => {
    setTransitioning(true);
    // Slide out in the direction of movement
    const dir = nextPage > page || (page === totalPages - 1 && nextPage === 0) ? -1 : 1;
    // Correct for wrap-around reverse
    const correctedDir = page === 0 && nextPage === totalPages - 1 ? 1 : dir;
    setOffsetX(correctedDir * 60);

    setTimeout(() => {
      setPage(nextPage);
      setOffsetX(correctedDir * -60);
      // Force reflow then animate in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOffsetX(0);
          setTimeout(() => setTransitioning(false), 350);
        });
      });
    }, 200);
  }, [page, totalPages]);

  const handlePrev = () => {
    if (transitioning) return;
    animateTo(page === 0 ? totalPages - 1 : page - 1);
  };

  const handleNext = () => {
    if (transitioning) return;
    animateTo(page === totalPages - 1 ? 0 : page + 1);
  };

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    if (transitioning) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
    isHorizontalSwipe.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || transitioning) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // Determine swipe direction on first significant move
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
      }
      return;
    }

    if (!isHorizontalSwipe.current) return;

    // Dampen the drag slightly
    setOffsetX(dx * 0.4);
  };

  const onTouchEnd = () => {
    if (!isDragging.current || transitioning) return;
    isDragging.current = false;

    if (!isHorizontalSwipe.current) {
      setOffsetX(0);
      return;
    }

    const threshold = 30;
    if (offsetX < -threshold) {
      handleNext();
    } else if (offsetX > threshold) {
      handlePrev();
    } else {
      // Snap back
      setOffsetX(0);
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col gap-4"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transform: `translateX(${offsetX}px)`,
          opacity: Math.abs(offsetX) > 40 ? 0.6 : 1,
          transition: isDragging.current ? "none" : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease",
          willChange: "transform, opacity",
        }}
      >
        {visibleItems.map((item, i) => (
          <div key={`${page}-${i}`} className="[&>*]:!h-full">
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

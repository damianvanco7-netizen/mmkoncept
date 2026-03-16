import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  itemsPerPage?: number;
  fixedHeight?: string;
}

const MobileCarousel = ({ children, itemsPerPage = 2, fixedHeight }: MobileCarouselProps) => {
  const [page, setPage] = useState(0);
  const [displayPage, setDisplayPage] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  // Measure max height across all pages to keep consistent
  const measureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (fixedHeight || !containerRef.current) return;
    // Measure after initial render
    const measure = () => {
      if (containerRef.current) {
        const h = containerRef.current.scrollHeight;
        setMeasuredHeight(prev => prev ? Math.max(prev, h) : h);
      }
    };
    measure();
    // Re-measure on page change
    const timer = setTimeout(measure, 400);
    return () => clearTimeout(timer);
  }, [page, fixedHeight]);

  const visibleItems = children.slice(
    displayPage * itemsPerPage,
    displayPage * itemsPerPage + itemsPerPage
  );

  const slideTo = useCallback((nextPage: number, direction: number) => {
    if (isSliding) return;
    setIsSliding(true);
    
    // Phase 1: slide current content out
    setSlideOffset(direction * -100);
    
    setTimeout(() => {
      // Phase 2: instantly move new content to opposite side (no transition)
      setDisplayPage(nextPage);
      setPage(nextPage);
      setSlideOffset(direction * 40);
      
      // Phase 3: slide new content in (with transition)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideOffset(0);
          setTimeout(() => setIsSliding(false), 500);
        });
      });
    }, 400);
  }, [isSliding]);

  const handlePrev = () => {
    if (isSliding) return;
    const prev = page === 0 ? totalPages - 1 : page - 1;
    slideTo(prev, -1);
  };

  const handleNext = () => {
    if (isSliding) return;
    const next = page === totalPages - 1 ? 0 : page + 1;
    slideTo(next, 1);
  };

  // Touch handlers
  const dragOffset = useRef(0);
  
  const onTouchStart = (e: React.TouchEvent) => {
    if (isSliding) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
    isHorizontalSwipe.current = null;
    dragOffset.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || isSliding) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    if (isHorizontalSwipe.current === null) {
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
      }
      return;
    }

    if (!isHorizontalSwipe.current) return;
    dragOffset.current = dx;
    setSlideOffset(dx * 0.3);
  };

  const onTouchEnd = () => {
    if (!isDragging.current || isSliding) return;
    isDragging.current = false;

    if (!isHorizontalSwipe.current) {
      setSlideOffset(0);
      return;
    }

    if (dragOffset.current < -40) {
      handleNext();
    } else if (dragOffset.current > 40) {
      handlePrev();
    } else {
      setSlideOffset(0);
    }
  };

  // Determine if we're in the instant-reposition phase (no transition)
  const needsTransition = !isDragging.current;

  return (
    <div>
      <div
        ref={containerRef}
        className="flex flex-col gap-4 overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          minHeight: fixedHeight || (measuredHeight ? `${measuredHeight}px` : undefined),
        }}
      >
        <div
          className="flex flex-col gap-4"
          style={{
            transform: `translateX(${slideOffset}px)`,
            opacity: Math.abs(slideOffset) > 60 ? 0 : 1,
            transition: needsTransition
              ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease"
              : "none",
            willChange: "transform, opacity",
          }}
        >
          {visibleItems.map((item, i) => (
            <div key={`${displayPage}-${i}`} className="flex-1 [&>*]:h-full">
              {item}
            </div>
          ))}
        </div>
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

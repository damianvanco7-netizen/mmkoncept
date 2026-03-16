import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  itemsPerPage?: number;
}

const MobileCarousel = ({ children, itemsPerPage = 2 }: MobileCarouselProps) => {
  const [page, setPage] = useState(0);
  const [displayPage, setDisplayPage] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const measureContainerRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(children.length / itemsPerPage);

  // Measure all pages off-screen to find the tallest
  useEffect(() => {
    if (!measureContainerRef.current) return;
    const measure = () => {
      const el = measureContainerRef.current;
      if (!el) return;
      const pageEls = el.querySelectorAll<HTMLDivElement>('[data-measure-page]');
      let max = 0;
      pageEls.forEach((pageEl) => {
        max = Math.max(max, pageEl.scrollHeight);
      });
      if (max > 0) setMaxHeight(max);
    };
    measure();
    // Re-measure after images load
    const timer = setTimeout(measure, 500);
    const timer2 = setTimeout(measure, 1500);
    return () => { clearTimeout(timer); clearTimeout(timer2); };
  }, [children.length, itemsPerPage]);

  const visibleItems = children.slice(
    displayPage * itemsPerPage,
    displayPage * itemsPerPage + itemsPerPage
  );

  // Build all pages for measurement
  const allPages = useMemo(() => {
    const pages = [];
    for (let p = 0; p < totalPages; p++) {
      pages.push(children.slice(p * itemsPerPage, p * itemsPerPage + itemsPerPage));
    }
    return pages;
  }, [children, itemsPerPage, totalPages]);

  const slideTo = useCallback((nextPage: number, direction: number) => {
    if (isSliding) return;
    setIsSliding(true);
    setSlideOffset(direction * -100);
    
    setTimeout(() => {
      setDisplayPage(nextPage);
      setPage(nextPage);
      setSlideOffset(direction * 40);
      
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
    slideTo(page === 0 ? totalPages - 1 : page - 1, -1);
  };

  const handleNext = () => {
    if (isSliding) return;
    slideTo(page === totalPages - 1 ? 0 : page + 1, 1);
  };

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
    if (!isHorizontalSwipe.current) { setSlideOffset(0); return; }
    if (dragOffset.current < -40) handleNext();
    else if (dragOffset.current > 40) handlePrev();
    else setSlideOffset(0);
  };

  const needsTransition = !isDragging.current;

  return (
    <div>
      {/* Hidden measurement container — renders all pages to find max height */}
      <div
        ref={measureContainerRef}
        aria-hidden="true"
        className="absolute overflow-hidden pointer-events-none"
        style={{ position: 'absolute', left: '-9999px', top: 0, width: '100%', opacity: 0 }}
      >
        {allPages.map((pageItems, pi) => (
          <div key={pi} data-measure-page className="flex flex-col gap-4">
            {pageItems.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Visible carousel */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ height: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}
      >
        <div
          className="flex flex-col gap-4"
          style={{
            height: maxHeight > 0 ? `${maxHeight}px` : 'auto',
            transform: `translateX(${slideOffset}px)`,
            opacity: Math.abs(slideOffset) > 60 ? 0 : 1,
            transition: needsTransition
              ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease"
              : "none",
            willChange: "transform, opacity",
          }}
        >
          {visibleItems.map((item, i) => (
            <div
              key={`${displayPage}-${i}`}
              className="flex-1 min-h-0 [&>*]:h-full"
            >
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

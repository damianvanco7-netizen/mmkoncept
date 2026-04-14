import { useState, useRef, useCallback, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PillCarouselProps<T extends string> {
  items: { id: T; label: string }[];
  active: T;
  onSelect: (id: T) => void;
  pillsPerPage?: number;
}

function PillCarousel<T extends string>({
  items,
  active,
  onSelect,
  pillsPerPage = 2,
}: PillCarouselProps<T>) {
  const isMobile = useIsMobile();

  // Find which page the active item is on
  const activeIndex = items.findIndex((item) => item.id === active);
  const totalPages = Math.ceil(items.length / pillsPerPage);
  const activePageForItem = Math.floor(activeIndex / pillsPerPage);

  const [page, setPage] = useState(activePageForItem);
  const [displayPage, setDisplayPage] = useState(activePageForItem);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const dragOffset = useRef(0);

  // When active changes externally, navigate to correct page
  useEffect(() => {
    const targetPage = Math.floor(activeIndex / pillsPerPage);
    if (targetPage !== page && !isSliding) {
      const direction = targetPage > page ? 1 : -1;
      slideTo(targetPage, direction);
    }
  }, [activeIndex, pillsPerPage]);

  const visibleItems = items.slice(
    displayPage * pillsPerPage,
    displayPage * pillsPerPage + pillsPerPage
  );

  const slideTo = useCallback(
    (nextPage: number, direction: number) => {
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
      }, 300);
    },
    [isSliding]
  );

  const handlePrev = () => {
    if (isSliding) return;
    slideTo(page === 0 ? totalPages - 1 : page - 1, -1);
  };

  const handleNext = () => {
    if (isSliding) return;
    slideTo(page === totalPages - 1 ? 0 : page + 1, 1);
  };

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
    if (dragOffset.current < -40) handleNext();
    else if (dragOffset.current > 40) handlePrev();
    else setSlideOffset(0);
  };

  const needsTransition = !isDragging.current;

  // Desktop: show all pills inline
  if (!isMobile) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`px-6 py-3 rounded-full text-sm font-semibold liquid-glass-circle-light transition-all duration-300 whitespace-nowrap select-none ${
              active === item.id
                ? "border-foreground/30 text-foreground"
                : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/70"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  // Mobile: carousel
  return (
    <div>
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{
            transform: `translateX(${slideOffset}px)`,
            opacity: Math.abs(slideOffset) > 60 ? 0 : 1,
            transition: needsTransition
              ? "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease"
              : "none",
            willChange: "transform, opacity",
          }}
        >
          {visibleItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold liquid-glass-circle-light transition-all duration-300 whitespace-nowrap select-none ${
                active === item.id
                  ? "border-foreground/40 text-foreground"
                  : "border-foreground/15 text-foreground/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-foreground/60" />
          </button>
          <span className="text-xs text-foreground/40 font-medium tabular-nums">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center"
          >
            <ChevronRight className="w-3.5 h-3.5 text-foreground/60" />
          </button>
        </div>
      )}
    </div>
  );
}

export default PillCarousel;

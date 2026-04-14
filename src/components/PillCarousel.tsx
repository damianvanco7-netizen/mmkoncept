import { useRef, useCallback, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface PillCarouselProps<T extends string> {
  items: { id: T; label: string }[];
  active: T;
  onSelect: (id: T) => void;
}

function PillCarousel<T extends string>({
  items,
  active,
  onSelect,
}: PillCarouselProps<T>) {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const scrollActiveIntoView = useCallback(
    (id: T, smooth = true) => {
      const container = scrollRef.current;
      const el = itemRefs.current.get(id);
      if (!container || !el) return;

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Center the element in the container
      const scrollLeft =
        el.offsetLeft -
        container.offsetWidth / 2 +
        el.offsetWidth / 2;

      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: smooth ? "smooth" : "instant",
      });
    },
    []
  );

  // Scroll active pill into view on mount and when active changes
  useEffect(() => {
    if (!isMobile) return;
    // Small delay to ensure layout is ready
    const t = setTimeout(() => scrollActiveIntoView(active, false), 50);
    return () => clearTimeout(t);
  }, [active, isMobile, scrollActiveIntoView]);

  const handleSelect = (id: T) => {
    onSelect(id);
    if (isMobile) {
      setTimeout(() => scrollActiveIntoView(id, true), 50);
    }
  };

  // Desktop: show all pills inline
  if (!isMobile) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`px-6 py-3 rounded-full text-sm font-semibold leading-none liquid-glass-circle-light transition-all duration-300 whitespace-nowrap select-none ${
              active === item.id
                ? "liquid-glass-circle-light-active text-foreground"
                : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/70"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  // Mobile: native horizontal scroll – same pattern as Product Gallery
  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-2 pb-3 -mx-[clamp(1.5rem,5vw,6rem)] px-[clamp(1.5rem,5vw,6rem)]"
    >
      {items.map((item) => (
        <button
          key={item.id}
          ref={(el) => {
            if (el) itemRefs.current.set(item.id, el);
          }}
          onClick={() => handleSelect(item.id)}
          className={`flex-shrink-0 snap-center px-5 py-2.5 rounded-full text-sm font-semibold leading-none liquid-glass-circle-light transition-all duration-300 whitespace-nowrap select-none ${
            active === item.id
              ? "liquid-glass-circle-light-active text-foreground"
              : "border-foreground/15 text-foreground/50"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default PillCarousel;

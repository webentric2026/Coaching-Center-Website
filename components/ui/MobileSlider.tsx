"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * MobileSlider — grid on md+ screens, swipeable scroll-snap slider on mobile.
 * Used everywhere a section has >3 repeated cards.
 */
export function MobileSlider({
  children,
  className,
  itemClassName,
  ariaLabel,
}: {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(children.length);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const w = first.getBoundingClientRect().width + 16;
    const p = Math.round(el.scrollLeft / w);
    setPage(p);
    setPages(Math.max(1, children.length - 1));
  }, [children.length]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const w = first ? first.getBoundingClientRect().width + 16 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className={className}>
      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:gap-6">
        {children}
      </div>

      {/* Mobile slider */}
      <div className="md:hidden">
        <div
          ref={trackRef}
          onScroll={update}
          role="region"
          aria-label={ariaLabel}
          aria-roledescription="carousel"
          tabIndex={0}
          className="snap-row no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 pt-1"
        >
          {children.map((child, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${children.length}`}
              className={cn("w-[82%] shrink-0 xs:w-[78%] min-[400px]:w-[76%]", itemClassName)}
            >
              {child}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {children.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 rounded-sm transition-colors",
                  i <= page ? "w-5 bg-navy-900" : "w-1.5 bg-line"
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByPage(-1)}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-white text-navy-900 transition-colors hover:border-navy-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByPage(1)}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-white text-navy-900 transition-colors hover:border-navy-900"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <span className="sr-only">
          Page {page + 1} of {pages + 1}
        </span>
      </div>
    </div>
  );
}

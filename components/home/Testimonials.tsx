"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-gold-500" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    if (!card) return;
    const w = card.getBoundingClientRect().width + 20;
    setIndex(Math.round(el.scrollLeft / w));
  }, []);

  useEffect(() => {
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement | undefined;
    const w = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="testimonials-heading" className="bg-white">
      <Container className="py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Student Stories"
            title={<span id="testimonials-heading">What our students say</span>}
          />
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-navy-900 transition-colors hover:border-navy-900"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-line text-navy-900 transition-colors hover:border-navy-900"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <Reveal className="mt-8">
          <div
            ref={trackRef}
            onScroll={update}
            role="region"
            aria-label="Student testimonials"
            aria-roledescription="carousel"
            tabIndex={0}
            className="snap-row no-scrollbar -mx-4 flex gap-5 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name + t.meta}
                role="group"
                aria-roledescription="slide"
                className="flex w-[84%] shrink-0 flex-col rounded-sm border border-line bg-paper p-5 sm:w-[60%] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <Quote className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-[14.5px] leading-relaxed text-slate-700">
                  “{t.quote}”
                </blockquote>
                <div className="mt-3">
                  <Stars />
                </div>
                {t.result && (
                  <p className="mt-2 inline-block self-start bg-gold-100 px-2 py-1 text-[12px] font-bold text-navy-900">
                    {t.result}
                  </p>
                )}
                <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                  <Image
                    src={t.image}
                    alt={`Photo of ${t.name}`}
                    width={80}
                    height={80}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm font-bold text-navy-950">{t.name}</span>
                    <span className="block text-[13px] text-slate-500">{t.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <div className="mt-5 flex items-center justify-between md:hidden">
          <div className="flex gap-1.5" aria-hidden="true">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={cn("h-1.5 rounded-sm transition-colors", i === Math.min(index, testimonials.length - 1) ? "w-5 bg-navy-900" : "w-1.5 bg-line")}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-navy-900"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-line text-navy-900"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

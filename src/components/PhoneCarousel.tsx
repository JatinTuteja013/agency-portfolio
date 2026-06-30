"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PhoneCarouselProps = {
  images: StaticImageData[];
  label?: string;
  highlights?: string[];
  className?: string;
  autoPlayMs?: number;
  accentColor?: string;
};

export default function PhoneCarousel({
  images,
  label = "Instagram Feed",
  highlights = [],
  className = "",
  autoPlayMs = 3000,
  accentColor = "#6f7f4d",
}: PhoneCarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const pausedUntil = useRef(0);

  const goTo = useCallback(
    (next: number) => {
      pausedUntil.current = Date.now() + autoPlayMs;
      setIndex((next + images.length) % images.length);
    },
    [images.length, autoPlayMs],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setIndex((i) => (i + 1) % images.length);
    }, autoPlayMs);

    return () => clearInterval(timer);
  }, [images.length, autoPlayMs]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="relative flex items-center gap-3">
        {images.length > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:bg-sage"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div className="relative">
          <div
            className="absolute -inset-3 rounded-[2.5rem] blur-xl"
            style={{ backgroundColor: `${accentColor}33` }}
          />
          <div className="relative rounded-[2.2rem] border-[3px] border-dark bg-dark p-2 shadow-2xl">
            <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-primary" />
            <div
              className="relative aspect-[9/19.5] w-[220px] overflow-hidden rounded-[1.8rem] bg-background md:w-[260px]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${label} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="260px"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full bg-dark/60 px-3 py-1 text-[10px] font-medium text-card backdrop-blur-sm">
                  {label}
                </span>
                {images.length > 1 && (
                  <span className="rounded-full bg-dark/60 px-2 py-1 text-[10px] font-medium text-card backdrop-blur-sm">
                    {index + 1}/{images.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm transition-colors hover:bg-sage"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5" : "w-1.5 bg-border hover:opacity-70"
              }`}
              style={i === index ? { backgroundColor: accentColor } : undefined}
            />
          ))}
        </div>
      )}

      {highlights.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

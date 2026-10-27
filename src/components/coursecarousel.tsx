import { useEffect, useRef, useState } from "react";
import { EdutechCard } from "./edutechcard";

type Course = {
  course: string;
  description: string;
  image: string;
};

type CourseCarouselProps = {
  courses: Course[];
};

export function CourseCarousel({ courses }: CourseCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // show an arrow only when there are more cards in that direction
  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [courses]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const step = firstCard ? firstCard.offsetWidth + 24 : 360;
    el.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <div className="relative">

      {/* LEFT ARROW */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          aria-label="Previous courses"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-xl font-bold text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white transition-colors"
        >
          ←
        </button>
      )}

      {/* CARDS */}
      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-2 px-1 md:px-14"
      >
        {courses.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <EdutechCard
              course={item.course}
              description={item.description}
              image={item.image}
            />
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          aria-label="More courses"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-xl font-bold text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white transition-colors"
        >
          →
        </button>
      )}

    </div>
  );
}

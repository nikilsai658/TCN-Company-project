import { Link } from "react-router-dom";

type EdutechCardProps = {
  course: string;
  description: string;
  image: string;
};

export function EdutechCard({
  course,
  description,
  image,
}: EdutechCardProps) {
  return (
    <div className="flex flex-col w-[280px] md:w-[340px] h-[420px] overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">

      {/* Image (fixed height) */}
      <div className="h-[190px] w-full flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={course}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 py-4 text-center">

        {/* Title (fixed 2 lines) */}
        <div className="h-[56px] flex items-center justify-center">
          <h2 className="text-[20px] md:text-[22px] font-extrabold leading-tight tracking-[-0.5px] text-[#1a1a1a] line-clamp-2">
            {course}
          </h2>
        </div>

        {/* Description (fixed 3 lines) */}
        <p className="mt-2 h-[69px] text-[14px] md:text-[15px] leading-[1.55] text-[#4f4f4f] line-clamp-3">
          {description}
        </p>

        {/* Button (always at the bottom) */}
        <Link to="/courseform" onClick={() => window.scrollTo(0, 0)} className="mt-auto">
          <button className="inline-flex items-center gap-2 text-[17px] font-semibold text-[#111111] transition-opacity hover:opacity-80">
            Register Now
            <span className="text-[22px] leading-none">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

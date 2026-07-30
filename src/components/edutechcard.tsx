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
    <div className="relative md:w-[400px] w-[300px] h-[400px] overflow-hidden bg-white transition-all duration-300 hover:border hover:border-gray-400 hover:shadow-2xl group">

      {/* LEFT ARROW */}
      <button className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
        <span className="text-xl font-bold text-black">←</span>
      </button>

      {/* RIGHT ARROW */}
      <button className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
        <span className="text-xl font-bold text-black">→</span>
      </button>

      {/* Image */}
      <div className="relative h-[190px] w-full overflow-hidden">
        <img
          src={image}
          alt={course}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-6 py-5 text-center">
        <h2 className="md:text-[25px] text-[23px] font-extrabold leading-none tracking-[-0.5px] text-[#1a1a1a]">
          {course}
        </h2>

        <p className="mt-4 text-[15px] leading-[1.55] text-[#4f4f4f]">
          {description}
        </p>

        <Link to="/courseform" onClick={() => window.scrollTo(0, 0)}>
          <button className="mt-6 inline-flex items-center gap-2 text-[18px] font-semibold text-[#111111] transition-opacity hover:opacity-80">
            Register Now
            <span className="text-[22px] leading-none">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
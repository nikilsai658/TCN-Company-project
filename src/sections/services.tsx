import { Link } from "react-router-dom";
import softwaredevelopment from "../assets/software.png";
import digitalmarketing from '../assets/digitalmarketing.png'
import itconsultancy from '../assets/itconsultancy1.jpg'
import edutech from '../assets/edutech.jpg'

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// "Explore service" link under the text on desktop — the only thing on the card that navigates
function ExploreButton({ to }: { to: string }) {
  return (
    <div className="hidden md:flex justify-center mt-6">
      <Link
        to={to}
        onClick={() => window.scrollTo(0, 0)}
        className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide uppercase text-[#2f3e46] hover:text-[#24c0c5] transition-colors duration-300"
      >
        Explore Service
        <span className="w-9 h-9 flex items-center justify-center rounded-full border border-[#24c0c5] text-[#24c0c5] group-hover:bg-[#24c0c5] group-hover:text-white transition-all duration-300">
          <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}

// arrow button on the image corner for mobile, where there's no room under the text
function MobileArrow({ to }: { to: string }) {
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo(0, 0)}
      aria-label="Explore service"
      className="md:hidden absolute bottom-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur text-[#24c0c5] shadow-md active:scale-90 transition"
    >
      <ArrowIcon className="w-4 h-4" />
    </Link>
  );
}

export function Services() {
  return (
    <>
      {/* HERO */}
      <div
        className="bg-gradient-to-b from-[#2F3E46] via-[#2f3e46c2] to-[#ffffff]"
        style={{ height: "300px", width: "100%" }}
      >
        <div className="text-white text-4xl font-bold p-10 flex justify-center items-center">
          <h1>Our Services</h1>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div style={{ marginTop: "-150px" }} className="pb-16 md:pb-24">

        {/* CARD 1 */}
        <div>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0 py-2.5"
          >
            <div
              style={{ minHeight: "300px", width: "70%" }}
              className="
                flex justify-center items-center md:items-stretch
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              {/* TEXT */}
              <div className="w-full md:w-1/2 px-5 py-5 md:px-10 md:py-8 flex flex-col justify-center">
                <div className=" md:text-3xl font-bold mb-2 md:mb-4 flex justify-center items-center text-center ">
                  <h1>IT CONSULTANCY SERVICES</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base leading-relaxed">
                    Our IT consultancy services help businesses choose the right
                    technology solutions for better performance and growth.<span className="hidden md:inline "> We provide
                    expert guidance in cloud, software, and infrastructure planning.
                    Our focus is on delivering scalable, secure, and cost-effective IT strategies.</span>
                  </p>
                </div>
                <ExploreButton to="/itconsultancy" />
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 relative md:min-h-[300px]">
                <MobileArrow to="/itconsultancy" />
                <img
                  src={itconsultancy}
                  alt="IT Consultancy"
                  className="w-full h-[180px] md:absolute md:inset-0 md:h-full object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0 py-2.5"
          >
            <div
              style={{ minHeight: "300px", width: "70%" }}
              className="
                flex justify-center items-center md:items-stretch
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              <div className="w-full md:w-1/2 px-5 py-5 md:px-10 md:py-8 flex flex-col justify-center">
                <div className=" md:text-3xl font-bold mb-2 md:mb-4 flex justify-center items-center text-center">
                  <h1>SOFTWARE DEVELOPMENT</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base leading-relaxed">
                    Software development services focus on building reliable, scalable,
                    and high-performance applications tailored to business needs.
                   <span className="hidden md:inline"> We develop custom web and enterprise solutions using modern technologies.
                    Our goal is to deliver secure, efficient, and user-friendly software that supports business growth.</span>
                  </p>
                </div>
                <ExploreButton to="/softwaredevelopment" />
              </div>

              <div className="w-full md:w-1/2 relative md:min-h-[300px]">
                <MobileArrow to="/softwaredevelopment" />
                <img
                  src={softwaredevelopment}
                  alt="Software Development"
                  className="w-full h-[180px] md:absolute md:inset-0 md:h-full object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0 py-2.5"
          >
            <div
              style={{ minHeight: "300px", width: "70%" }}
              className="
                flex justify-center items-center md:items-stretch
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              <div className="w-full md:w-1/2 px-5 py-5 md:px-10 md:py-8 flex flex-col justify-center">
                <div className=" md:text-3xl font-bold mb-2 mt-4 md:mb-4 flex justify-center items-center text-center">
                  <h1>EDUTECH PROGRAMS</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base leading-relaxed">
                    EdTech programs are designed to provide practical, skill-based learning
                    in emerging technologies like software development, cloud computing,
                    AI, and data science.<span className="hidden md:inline"> We focus on hands-on training, real-time projects,
                    and industry-relevant knowledge. Our goal is to bridge the gap between
                    education and industry requirements, helping learners build strong technical careers.</span>
                  </p>
                </div>
                <ExploreButton to="/edutech" />
              </div>

              <div className="w-full md:w-1/2 relative md:min-h-[300px]">
                <MobileArrow to="/edutech" />
                <img
                  src={edutech}
                  alt="Edutech"
                  className="w-full h-[180px] md:absolute md:inset-0 md:h-full object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div>
          <div
            className="flex justify-center items-center w-full px-3 md:px-0 py-2.5"
          >
            <div
              style={{ minHeight: "300px", width: "70%" }}
              className="
                flex justify-center items-center md:items-stretch
                bg-white shadow-gray-400 shadow-md
                hover:shadow-xl rounded-lg transition-shadow
                w-full md:w-[70%]
                flex-col md:flex-row
                overflow-hidden
                border-1 border-gray-200
              "
            >
              <div className="w-full md:w-1/2 px-5 py-5 md:px-10 md:py-8 flex flex-col justify-center">
                <div className=" md:text-3xl font-bold mb-3 md:mb-4 flex justify-center items-center text-center">
                  <h1>DIGITAL MARKETING</h1>
                </div>

                <div className="text-gray-600 flex justify-center items-center">
                  <p className="text-center text-sm md:text-base leading-relaxed">
                    Digital marketing services help businesses improve their online presence
                    and reach the right audience effectively.<span className="hidden md:inline"> We provide SEO, social media
                    marketing, and performance-based campaigns. Our focus is on increasing
                    brand visibility, engagement, and measurable business growth.</span>
                  </p>
                </div>
                <ExploreButton to="/digitalmarketing" />
              </div>

              <div className="w-full md:w-1/2 relative md:min-h-[300px]">
                <MobileArrow to="/digitalmarketing" />
                <img
                  src={digitalmarketing}
                  alt="Digital Marketing"
                  className="w-full h-[180px] md:absolute md:inset-0 md:h-full object-cover md:rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
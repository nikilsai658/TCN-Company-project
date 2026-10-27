import { Link } from "react-router-dom";
import image from "../assets/careerimage.png";
import Accordion from "../components/JobsAccordion";
import CareerFAQAccordion from "../components/FaqAccordion";

export function Career() {
  return (
    <>
    
      <div>

        {/* ================= HERO SECTION ================= */}
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
          }}
        >
          {/* dark on the left where the text sits, lighter on the right so the photo shows */}
          <div className="h-full w-full bg-gradient-to-r from-[#1b262c]/95 via-[#2f3e46]/80 to-[#2f3e46]/30 flex items-center">
            <div className="px-6 md:px-20 max-w-3xl">

              {/* EYEBROW */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#24c0c5] text-xs md:text-sm font-semibold tracking-[0.25em] uppercase">
                  TCN Careers
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                Endless Opportunities <br />
                <span className="text-[#24c0c5]">Start Here</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-lg mt-4 max-w-xl">
                Join a team that builds, learns and grows together. Find the role that fits your future.
              </p>

              {/* BUTTON */}
              <Link
                to="/jobs"
                onClick={() => window.scrollTo(0, 0)}
                className="group mt-7 inline-flex items-center gap-3 bg-[#24c0c5] text-white font-semibold rounded-lg px-6 md:px-7 py-3 md:py-3.5 text-sm md:text-base shadow-lg shadow-[#24c0c5]/30 hover:bg-[#1fa9ae] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#24c0c5]/40 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                Search Jobs
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>

            </div>
          </div>
        </div>

        {/* ================= CONTENT SECTION ================= */}
        <div>

          <div
            className="
              items-center
              mx-4 md:mx-30
              mt-10 md:mt-[50px]
            "
          >
            <h1 className="text-2xl md:text-4xl font-bold flex justify-center text-center">
              CAREER OPPORTUNITIES
            </h1>

            <p className="text-sm md:text-lg text-gray-700 py-3 text-justify md:text-left">
              TechNex Cloud Networks Pvt Ltd delivers innovative IT solutions,
              cloud services, and software development that help businesses grow
              in the digital era. We focus on building scalable, secure, and
              high-performance applications using modern technologies like web
              development, cloud computing, and AI. Our mission is to empower
              clients with reliable and future-ready digital solutions that
              drive success and transformation.
            </p>
          </div>

          {/* ACCORDION */}
          <div className="py-6 px-2 md:px-0">
            <Accordion />
          </div>

        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="bg-[#F2F2F2] mt-7">

        <div className="text-2xl md:text-4xl font-bold flex justify-center items-center py-6 md:py-10 px-4 text-center">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="px-2 md:px-0 ">
          <CareerFAQAccordion />
        </div>

      </div>
    </>
  );
}
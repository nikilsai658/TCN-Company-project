import { useState } from "react";
import image from "../assets/jobsimage.png";

type Job = {
  title: string;
  skills: string;
  experience: string;
  location: string;
};

const jobs: Job[] = [
  {
    title: "React Developer",
    skills: "React, Tailwind, TypeScript",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Backend Developer",
    skills: ".NET, SQL, APIs",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Client Acquisition Executive",
    skills: "Communication, Sales, Leads",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Business Development Executive",
    skills: "Communication Skills, Client communication, Negotiation",
    experience: "0-2 yrs",
    location: "Hyderabad",
  },
  {
    title: "HR Executive",
    skills: "Communication Skills,Recruitment, Training",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Digital Marketing Executive",
    skills: "SEO, Social Media, Content",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
   {
    title: "UI/UX Designer",
    skills: "Figma, Adobe XD, Sketch, Prototyping",
    experience: "0-1 yrs",
    location: "Hyderabad",
  },
  {
    title: "Data Analyst",
    skills: "Excel, SQL, Power BI, Tableau, Python",
    experience: "2+ yrs",
    location: "Hyderabad / Remote",
  },
  {
    title: "Data Science",
    skills: "Python, Statistics, Machine Learning, Pandas, SQL",
    experience: "2+ yrs",
    location: "Hyderabad / Remote",
  },
  {
    title: "AI / ML",
    skills: "Machine Learning, Deep Learning, NLP, Generative AI, Python",
    experience: "2+ yrs",
    location: "Hyderabad / Remote",
  },
  {
    title: "Python Full Stack",
    skills: "Python, Django, Flask, React, SQL",
    experience: "2+ yrs",
    location: "Hyderabad / Remote",
  },
  {
    title: "Java Full Stack",
    skills: "Core Java, Spring Boot, Hibernate, React / Angular, SQL",
    experience: "2+ yrs",
    location: "Hyderabad / Remote",
  }
];

export default function JobFilterUI() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const value = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(value) ||
      job.skills.toLowerCase().includes(value) ||
      job.location.toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-[#f3f6f8] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-[#000000a0] hover:bg-[#00000090] py-16 md:py-25 px-4">

          <div className="max-w-4xl mx-auto text-center">

            <p className="text-[#35c6cf] font-semibold tracking-widest uppercase mb-3 text-sm md:text-base">
              Career Opportunities
            </p>

            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              Find Your Dream Job
            </h1>

            <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Explore exciting opportunities and build your future with our
              growing team at TechNex Cloud Networks Pvt Ltd.
            </p>

            {/* SEARCH */}
            <div className="mt-8 md:mt-10 flex sm:flex-row bg-white rounded-full overflow-hidden shadow-2xl max-w-2xl mx-auto">

              <input
                type="text"
                placeholder="Search jobs, skills, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 md:px-6 py-3 md:py-4 outline-none text-gray-700 text-sm md:text-base"
              />

              <button className="bg-[#35c6cf] text-white px-6 md:px-8 py-3 md:py-4 font-semibold hover:bg-[#28b2bb] transition duration-300 text-sm md:text-base">
                Search
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* ================= JOB SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-5 py-12 md:py-16">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f2a33]">
              Open Positions
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Showing {filteredJobs.length} available jobs
            </p>
          </div>

          <div className="bg-white px-4 md:px-5 py-2 md:py-3 rounded-lg shadow-sm border">
            <span className="text-xs md:text-sm text-gray-500">
              Updated Daily
            </span>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >

                <div className="bg-[#2f3d47] px-5 md:px-6 py-5 md:py-6 text-white flex-1">

                  <h3 className="text-lg md:text-xl font-bold leading-snug">
                    {job.title}
                  </h3>
                  <span className="block h-[3px] w-10 bg-[#35c6cf] rounded-full mt-3 mb-5" />

                  {/* labels in a fixed column so the values line up */}
                  <div className="grid grid-cols-[95px_1fr] gap-x-2 gap-y-3 text-xs md:text-sm">
                    <span className="font-semibold text-gray-400">Skills</span>
                    <span className="text-gray-100">{job.skills}</span>

                    <span className="font-semibold text-gray-400">Experience</span>
                    <span className="text-gray-100">{job.experience}</span>

                    <span className="font-semibold text-gray-400">Location</span>
                    <span className="text-gray-100">{job.location}</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSf9V80yNvPT9q4pvwbmlEr0DNtpT7OCfkxaiQgHczu-HaEwIw/viewform?usp=header",
                      "_blank"
                    )
                  }
                  className="group/btn w-full inline-flex items-center justify-center gap-2 bg-[#35c6cf] text-white font-semibold py-3 md:py-4 tracking-wider hover:bg-[#28b2bb] transition-colors duration-300 mt-auto text-sm md:text-base"
                >
                  APPLY NOW
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600">
                No jobs found
              </h2>

              <p className="text-gray-400 mt-2 text-sm md:text-base">
                Try searching with different keywords
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
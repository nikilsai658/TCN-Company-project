import { useState } from "react";

type JobContent = {
  description: string;
  skills: string[];
  experience: string;
  location: string;
  type: string;
  tools: string[];
};

type AccordionItem = {
  role: string;
  content: JobContent;
};

const items: AccordionItem[] = [
  {
    role: "Business Development Executive (BDE)",
    content: {
      description:
        "Responsible for generating leads, client acquisition, and promoting IT services like cloud and software solutions.",
      skills: ["Communication", "LinkedIn", "CRM Tools", "Negotiation"],
      experience: "1-2 Years",
      location: "Hyderabad / Remote",
      type: "Full Time",
      tools: ["LinkedIn", "HubSpot", "Excel"],
    },
  },
  {
    role: "Client Acquisition Executive (CAE)",
    content: {
      description:
        "Responsible for identifying potential clients, pitching IT services, and converting leads into business opportunities for company growth.",
      skills: ["Sales Strategy", "Client Handling", "Negotiation", "CRM Tools"],
      experience: "0-1 Years",
      location: "Hyderabad / Remote",
      type: "Full Time",
      tools: ["LinkedIn", "HubSpot", "Excel", "Email Outreach"],
    },
  },
  {
    role: "Digital Marketing Executive",
    content: {
      description:
        "Handles SEO, social media, Google Ads, and lead generation campaigns.",
      skills: ["SEO", "SMM", "Google Ads", "Analytics"],
      experience: "0-2 Years",
      location: "Remote",
      type: "Full Time",
      tools: ["Google Analytics", "Canva"],
    },
  },
  {
    role: "HR Executive",
    content: {
      description:
        "Manages recruitment, onboarding, employee engagement, and HR operations for smooth organizational workflow.",
      skills: ["Recruitment", "Communication", "HR Management", "Interview Handling"],
      experience: "Fresher",
      location: "Hyderabad",
      type: "Full Time",
      tools: ["Naukri", "LinkedIn Jobs", "MS Excel"],
    },
  },
  {
    role: "Data Analyst ",
    content: {
      description:
        "Mentors students in data analysis, conducts live training sessions, guides real-time projects, and prepares learners for analyst roles.",
      skills: ["Excel", "SQL", "Power BI", "Tableau", "Python", "Statistics"],
      experience: "2+ Years",
      location: "Hyderabad / Remote",
      type: "Full Time / Part Time",
      tools: ["MS Excel", "Power BI", "Tableau", "MySQL", "Jupyter"],
    },
  },
  {
    role: "Data Science ",
    content: {
      description:
        "Trains students on end-to-end data science workflows, from data cleaning and visualization to building and evaluating predictive models.",
      skills: ["Python", "Statistics", "Machine Learning", "Pandas", "NumPy", "SQL"],
      experience: "2+ Years",
      location: "Hyderabad / Remote",
      type: "Full Time / Part Time",
      tools: ["Jupyter", "Scikit-learn", "Matplotlib", "Git"],
    },
  },
  {
    role: "AI / ML ",
    content: {
      description:
        "Delivers training in Artificial Intelligence and Machine Learning, covering deep learning, NLP, and Generative AI with hands-on projects.",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "Python"],
      experience: "2+ Years",
      location: "Hyderabad / Remote",
      type: "Full Time / Part Time",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Google Colab"],
    },
  },
  {
    role: "Python Full Stack",
    content: {
      description:
        "Trains students to build complete web applications using Python on the backend and modern frontend technologies, with real-time project guidance.",
      skills: ["Python", "Django", "Flask", "HTML/CSS", "JavaScript", "React", "SQL"],
      experience: "2+ Years",
      location: "Hyderabad / Remote",
      type: "Full Time / Part Time",
      tools: ["VS Code", "Git", "Postman", "MySQL / PostgreSQL"],
    },
  },
  {
    role: "Java Full Stack",
    content: {
      description:
        "Mentors students in enterprise-grade full stack development using Java, Spring Boot, and modern frontend frameworks, with project-based learning.",
      skills: ["Core Java", "Advanced Java", "Spring Boot", "Hibernate", "React / Angular", "SQL"],
      experience: "2+ Years",
      location: "Hyderabad / Remote",
      type: "Full Time / Part Time",
      tools: ["IntelliJ IDEA", "Eclipse", "Git", "Postman", "MySQL"],
    },
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3 text-white bg-[#0f172a]">

        {items.map((item, index) => (
          <div key={index} className="border-b border-[#1f2a30]">

            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-[#2F3E46] hover:bg-[#1f2a30] transition"
            >
              <span className="font-semibold">{item.role}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* BODY */}
            <div
              className={`px-4 bg-[#ededed] overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[500px] py-4" : "max-h-0"
              }`}
            >
              <p className="text-black mb-3 font-bold">
                {item.content.description}
              </p>

              <div className="text-sm text-black space-y-1">
                <p><span className="text-black font-bold">Skills:</span> {item.content.skills.join(", ")}</p>
                <p><span className="text-black font-bold">Experience:</span> {item.content.experience}</p>
                <p><span className="text-black font-bold">Location:</span> {item.content.location}</p>
                <p><span className="text-black font-bold">Type:</span> {item.content.type}</p>
                <p><span className="text-black font-bold">Tools:</span> {item.content.tools.join(", ")}</p>
                <button className="bg-[#24c0c5] p-3 font-bold mt-4 rounded-md" onClick={() =>
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSf9V80yNvPT9q4pvwbmlEr0DNtpT7OCfkxaiQgHczu-HaEwIw/viewform?usp=header",
            "_blank"
          )
        }>Apply Now</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
import Image from "../assets/edu.png";
import { CourseCarousel } from "../components/coursecarousel";
import datascience from "../assets/datascience.png";
import ai from "../assets/Ai.png";
import { PlacementCarousel } from "../components/placementcarousel";
import { Rating } from "../components/rating";
import softwaredevelopment from '../assets/softwaredevelopmentcourses.jpg'
import Aws from '../assets/AWS.jpg'
import cybersecurity from '../assets/cybersecurity.jpg'
import sap from '../assets/SAP.jpg'
import digital from '../assets/digitalcourse.jpg'
import embedded from '../assets/Embeddedsystems.jpg'
import Vlsi from '../assets/vlsi.jpg'
type Course = {
  course: string;
  description: string;
  image: string;
};

const courses: Course[] = [
  {
    course: "Data Science & Analytics",
    description:
      "Master data manipulation, statistical analysis, and machine learning for data-driven insights.",
    image: datascience,
  },
  {
    course: "Full Stack Web Development",
    description:
      "Learn to build dynamic web applications from front-end to back-end with cutting-edge technologies.",
    image: softwaredevelopment,
  },
  {
    course: "Artificial Intelligence",
    description:
      "Learn AI concepts, neural networks, and deep learning models for real-world applications.",
    image: ai,
  },
  {
    course: "Cyber Security ",
    description:
      "Develop defensive and offensive security skills to protect systems from threats and identify vulnerabilities responsibly.",
    image: cybersecurity,
  },
  {
    course:"Amazon Web Services (AWS)",
     description:
      "Master cloud computing fundamentals and advanced services on the world's leading cloud platform.",
    image: Aws,
  },
   {
    course:"SAP",
     description:
      "Get comprehensive training in SAP modules, enhancing your skills for enterprise resource planning solutions.",
    image: sap,
  }
];

const courses2: Course[] = [
  {
    course: "Embedded Systems",
    description:
      "Get hands-on with microcontrollers, real-time operating systems, and embedded software development.",
    image: embedded,
  },
   {
    course: "VLSI",
    description:
      "Learn to design and verify Very Large Scale Integration circuits for modern electronics.",
    image: Vlsi,
  },
   {
    course: "Digital Marketing",
    description:
      "Learn strategies for online marketing, including SEO, social media, content marketing, and analytics.",
    image: digital,
  }
];

export function Edutech() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <div
        style={{ backgroundImage: `url(${Image})` }}
        className="bg-cover bg-center h-[400px] w-full"
      >
        <div className="h-full w-full flex items-center bg-gradient-to-r from-[#2f3e46d2] via-[#2f3e467f] to-transparent">

          {/* ONLY MOBILE CHANGED */}
          <div className="px-6 md:px-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white md:px-32 leading-tight">
              EDUTECH <br /> PROGRAM
            </h1>

            <p className="text-gray-200 md:px-32 py-2 text-sm md:text-base max-w-[320px] md:max-w-full">
              Driving Educational Excellence with Modern Technology
            </p>
          </div>

        </div>
      </div>

      {/* ================= TITLE SECTION ================= */}
      <div className="text-center py-10 px-4 md:px-0">

        <h1 className="text-3xl md:text-4xl font-bold text-[#2F3E46]">
          OUR PROGRAMS
        </h1>

        <p className="text-gray-600 font-medium mt-2 text-sm md:text-base">
          Explore Our Cutting-Edge Courses
        </p>

      </div>

      {/* ================= CARDS SECTION ================= */}
      

      <div className="bg-[#F2F2F2] py-10 md:py-15">
        
        {/* FIRST ROW */}
          
        <div className="px-4 md:px-10 pb-10 ">
       <div className="pb-6 md:pb-8">
             <div className="text-2xl md:text-4xl  font-bold  text-center ">Industry-Focused IT Courses</div>
           <div className="text-gray-700 md:pt-1 text-center ">Build Your Tech Career with Industry-Focused Learning</div>
       </div>
          <CourseCarousel courses={courses} />
        </div>

        {/* SECOND ROW */}
        <div className="px-4 md:px-10 pb-10">
           <div className="pb-6 md:pb-8">
             <div className="text-2xl md:text-4xl  font-bold  text-center ">Skill Development Courses</div>
           <div className="text-gray-700 md:pt-1 text-center ">Build Confidence Through Skill-Based Learning</div>
       </div>
          <CourseCarousel courses={courses2} />
        </div>
      </div>

      {/* ================= PLACEMENTS TITLE ================= */}
      <div className="flex justify-center py-10 px-4 md:px-0">

        <div className="text-center">

          <div className="flex justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              PLACEMENTS
            </h1>
          </div>

          <p className="text-gray-700 font-semibold text-sm md:text-base mt-2">
            Helping Thousands of Students Achieve Their Goals in India
          </p>

        </div>
      </div>

      {/* ================= PLACEMENT SECTION ================= */}
      <div className="flex flex-col md:flex-row bg-[#F2F2F2] gap-6 md:gap-0 px-4 py-4 md:p-0">

        {/* LEFT */}
        <div className="w-full md:w-1/3 rounded-xl overflow-hidden">
          <PlacementCarousel />
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-2/3 rounded-xl overflow-hidden">
          <Rating />
        </div>
        
      </div>
    </div>
  );
}
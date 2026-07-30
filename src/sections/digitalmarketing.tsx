import { Link } from "react-router-dom";
import head from "../assets/digital.jpg";
import image from "../assets/digitalimage2.jpg";
import { TestimonialsCards } from "../components/clientcard";
import MarketingCarousel from "../components/digitalcards";
import { Growthprocess } from "../components/ourgrowth";

export function Digitalmarketing() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${head})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[300px] sm:h-[350px] md:h-[400px]"
      >
        <div className="flex justify-center items-center h-full bg-black/50 px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
              Digital Marketing
            </h1>

            <p className="text-white mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Digital marketing connects businesses with customers through
              online channels like social media, search engines, and websites.
              It drives brand growth by improving reach, engagement, and
              conversions in a measurable way.
            </p>
          </div>
        </div>
      </div>

      {/* Services Strip */}
      <div className="bg-[#2F3E46] text-white py-4 px-3">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-70 text-center font-semibold text-[10px] md:text-sm sm:text-base">
          <div>Graphic Designing</div>
          <div>Search Engine Optimization</div>
          <div>Meta Ads</div>
          <div>Content Creation</div>
        </div>
      </div>

      {/* Heading */}
      <div className="py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3E46] leading-snug">
          Innovating Your Digital World With Us
        </h1>
      </div>

      {/* Journey Banner */}
      <div className="px-4">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-[250px] sm:h-[320px] md:h-[400px]  rounded-2xl flex items-center overflow-hidden"
        >
          <div className="px-5 sm:px-10 bg-[#0000004a] md:p-3 p-2 mx-4 rounded-md">
            <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl leading-tight drop-shadow-lg">
              Our Journey,
              <br />
              Vision and Values
            </h1>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="pt-10 overflow-hidden">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F3E46]">
           Services Built for Modern Brands
          </h1>
          <span className="text-gray-500">Every service is backed by real-time analytics, cloud-native tooling, and a team obsessed with measurable results</span>
        </div>

        <div className="mt-6 overflow-hidden">
          <MarketingCarousel />
        </div>
      </div>
      <div className="text-center bg-[#2F3E46]">
        <div><p className="text-[#24c0c5] mt-3 font-bold pt-6">Trusted By</p></div>
           <div><h1 className=" text-3xl md:text-4xl  font-bold text-white pb-3">Brands We've Grown</h1></div>
           <div><p className="text-gray-200 ">From startups to enterprise, Technex has helped companies across <br /> industries achieve exceptional <br /> digital growth.</p></div>
      </div>
      <div >
        <TestimonialsCards/>
      </div>
      <div>
          <Growthprocess/>
      </div>
      <div className="text-center bg-[#2F3E46] pb-15 border-b-1 border-[#24c0c5] md:h-[450px] h-[400px] ">
           <div className="text-[#24c0c5] pt-20 ">LET'S WORK TOGETHER</div>
           <div className="text-white text-5xl md:text-7xl font-bold pb-5 ">Ready to Grow <br /><span className="text-[#24c0c591]"> Your Branch?</span></div>
           <div className="text-white">Talk to our strategy team and get a free digital audit <br /> within  48 hours.</div>
         <div className="flex justify-center pt-4 ">
             <Link to='/contactus' onClick={()=>window.scrollTo(0,0)}><div className="text-white font-bold bg-[#24c0c5] w-[200px] p-3 rounded-4xl  hover:shadow-md hover:shadow-black hover:border-1"><button>Get A Free Demo</button></div></Link>
         </div>
      </div>
    </>
  );
}
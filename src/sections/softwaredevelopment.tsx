import image from "../assets/softwaredevelopment.png";
import ProcessCarousel from "../components/developmentcard";
import Accordion from "../components/softwareAccordion";

export function Softwaredevelopment() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-[400px] bg-cover bg-center"
      >
        <div className="flex justify-center items-center bg-gradient-to-b from-[#2f3e46f3] via-[#2f3e46af] to-transparent h-full px-4">

          {/* ONLY MOBILE CHANGED */}
          <div className="text-center md:text-left">

            <h1 className="text-3xl md:text-5xl font-bold text-white flex justify-center leading-tight">
              Software Developments Services
            </h1>

            <p className="text-gray-200 py-3 text-sm md:text-base max-w-[900px]">
              We build scalable, secure, and high-performance software that drives innovation and growth for your business.
            </p>

          </div>
        </div>
      </div>

      {/* ================= FEATURES BAR ================= */}
      <div
        className="
          bg-[#2F3E46]
          text-white
          text-[10px] md:text-[20px]
          font-bold
          flex
          flex-wrap md:flex-nowrap
          justify-center
          items-center
          gap-5 md:gap-56
          p-4
          text-center
        "
      >
        <div>Tailored Solutions</div>
        <div>Quality & Security</div>
        <div>Development</div>
        <div>On-Time-Delivery</div>
      </div>

      {/* ================= DEVELOPMENT SECTION ================= */}
      <div className="flex justify-center items-center py-6 px-4">

        <div className="text-center w-full md:w-[85%]">

          <h1 className="text-3xl md:text-4xl font-bold text-[#2F3E46] py-2">
            Development
          </h1>

          <p className="flex justify-center items-center pb-4 text-sm md:text-base leading-relaxed text-gray-700">
            We provide end-to-end development services to build scalable,
            secure, and high-performance digital solutions tailored to your
            business needs. Our expertise includes web and mobile application
            development, custom software solutions, cloud-based systems, and
            seamless API integrations. We focus on creating user-friendly
            interfaces with modern UI/UX design while ensuring efficient
            development processes through DevOps and automation. From initial
            development to ongoing maintenance and support, we ensure your
            applications run smoothly, stay updated, and deliver long-term
            value.
          </p>

        </div>
      </div>

      {/* ================= CLIENTS SECTION ================= */}
      <div>
        <div >
          {/* DESKTOP UNCHANGED */}
          <div className="overflow-hidden">
            <ProcessCarousel />
          </div>

        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="pb-8 px-4 md:px-0">

        <div className="text-3xl md:text-4xl font-bold flex justify-center items-center py-10 text-center">
          <h1>Frequently Asked Questions</h1>
        </div>

        <Accordion />

      </div>
    </>
  );
}
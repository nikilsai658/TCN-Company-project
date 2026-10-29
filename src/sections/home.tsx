
import ev from '../assets/DSREV.png'
import skylinx from '../assets/ChatGPT Image May 8, 2026, 07_25_12 PM.png'
import pcube from '../assets/ChatGPT Image May 11, 2026, 02_53_36 PM.png'
import image1 from '../assets/main2.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/IMG_0832.png'
import { Homecard } from '../components/homecard'
import TextCarousel from '../components/carouselcontent'
import google from '../assets/ChatGPT Image May 19, 2026, 01_27_35 PM.png'
import tcs from '../assets/tcslogo.png'
import wipro from '../assets/wiprologo.png'
import amazon from '../assets/amazon.jpg'
import jpmorgan from '../assets/jpmorganlogo.png'
import { Link } from 'react-router-dom'
import { Mangercard } from '../components/managerscard'
import { Latestupdates } from '../components/latestupdates'
import { ServicesBook } from '../components/servicesbook'
import { HeroWires } from '../components/herowires'
import tekbricks from '../assets/tekbricks-.png'
import brainstrom from '../assets/brainstrom.png'
import drafttech from '../assets/Drafttech.jpeg'
export function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">

        {/* TOP TEXT CAROUSEL */}
        <div>
          <TextCarousel />
        </div>

        {/* HERO SECTION */}
        <div
          className="hero-bg relative flex items-center "
        >

          {/* ANIMATED WIRE BACKGROUND */}
          <HeroWires />

          {/* DESKTOP */}
          <div className="relative z-10 hidden md:flex h-[550px] w-full items-center">

            <div
              className="hero-box text-5xl lg:text-4xl xl:text-5xl text-white font-bold px-14 p-10 mx-10 shrink-0 w-[800px] lg:w-[560px] xl:w-[680px] 2xl:w-[800px]"
              style={{
                lineHeight: '60px',
                borderRadius: '10px',
              }}
            >
              <span className="hero-shine" aria-hidden="true" />
              <div className="hero-line">Bridging Technology,</div>
              <div className="hero-line" style={{ animationDelay: '0.25s' }}>Education,</div>
              <div className="hero-line hero-highlight" style={{ animationDelay: '0.5s' }}>Business Growth</div>
              <div className="hero-underline" />
            </div>

            {/* 3D SERVICES BOOK */}
            <div className="hidden lg:flex flex-1 justify-center lg:scale-[0.75] xl:scale-100">
              <ServicesBook />
            </div>

          </div>

          {/* MOBILE */}
          <div className="relative z-10 md:hidden h-[420px] w-full flex items-center px-4">

            <div className="hero-box p-5 rounded-xl w-full">
              <span className="hero-shine" aria-hidden="true" />

              <div className="text-white font-bold text-3xl leading-[45px]">
                <div className="hero-line">Bridging Technology,</div>
                <div className="hero-line" style={{ animationDelay: '0.25s' }}>Education,</div>
                <div className="hero-line hero-highlight" style={{ animationDelay: '0.5s' }}>Business Growth</div>
                <div className="hero-underline" />
              </div>

            </div>

          </div>

          {/* LOGO SLIDER DESKTOP */}
          <div
  className=" absolute bottom-0 z-20 bg-white overflow-hidden"
  style={{
    width: window.innerWidth < 768 ? '200px' : '400px',
    height: '70px',
    borderTopRightRadius: '50px',
  }}
>
  <div className="scroll-wrapper">
    <div className="scroll-content flex justify-center items-center">

      {/* First Set */}
      <img src={ev} style={{ width: '100px', height: '80px' }} />
      <img src={skylinx} style={{ width: '100px', height: '80px' }} />
      <img src={pcube} style={{ width: '100px', height: '80px' }} />
      <img src={google} style={{ width: '100px', height: '80px' }} />
      <img src={wipro} style={{ width: '100px', height: '80px' }} />
      <img src={amazon} style={{ width: '100px', height: '80px' }} />
      <img src={jpmorgan} style={{ width: '100px', height: '80px' }} />
      <img src={tcs} style={{ width: '100px', height: '80px' }} />
      <img src={drafttech} style={{ width: '100px', height: '80px' }} />
      <img src={tekbricks} style={{ width: '100px', height: '80px' }} />
      <img src={brainstrom} style={{ width: '100px', height: '80px' }} />
      {/* Duplicate Set */}
      <img src={ev} style={{ width: '100px', height: '80px' }} />
      <img src={skylinx} style={{ width: '100px', height: '80px' }} />
      <img src={pcube} style={{ width: '100px', height: '80px' }} />
      <img src={google} style={{ width: '100px', height: '80px' }} />
      <img src={wipro} style={{ width: '100px', height: '80px' }} />
      <img src={amazon} style={{ width: '100px', height: '80px' }} />
      <img src={jpmorgan} style={{ width: '100px', height: '80px' }} />
      <img src={tcs} style={{ width: '100px', height: '80px' }} />
      <img src={drafttech} style={{ width: '100px', height: '80px' }} />
      <img src={tekbricks} style={{ width: '100px', height: '80px' }} />
      <img src={brainstrom} style={{ width: '100px', height: '80px' }} />

    </div>
  </div>
</div>
        </div>
        
        {/* COMPANY NAME */}
        <div className="flex justify-center text-center px-4 py-3">
          <p className="text-sm md:text-base font-medium">
            @Technex Cloud Networks Pvt Ltd
          </p>
        </div>

        {/* TITLE */}
        <div className="dark-strip flex justify-center items-center text-center text-xl md:text-3xl text-white font-bold px-4 py-5 md:py-6">
          <h1>Empowering Thousands of Clients Across <span className="text-[#24c0c5]">India</span></h1>
        </div>

        {/* CARDS */}
        <div className='flex justify-center'>
          <Homecard />
        </div>

        {/* ABOUT COMPANY */}
        <div className="dark-panel flex justify-center mx-4 md:mx-20 p-5 md:p-8 my-6 rounded-xl">

          <p className="text-gray-200 text-[15px] md:text-[18px] leading-[30px] md:leading-[35px] font-semibold">

            Based in <span className="text-[#24c0c5]">Hyderabad</span>, <span className="text-white">TechNex Cloud Networks</span> is your integrated
            partner for digital growth and technical expertise. We bridge the
            gap between academic potential and industry reality by offering
            high-impact Digital Marketing, strategic IT Consultancy, and bespoke
            Software Development tailored for scalability.

            <span className="hidden md:inline">
              {' '}
              Beyond serving businesses, we empower the next generation of tech
              leaders through hands-on internships and project-based training
              that has successfully placed students at global giants like
              Google, Microsoft, and Amazon. Driven by a commitment to
              innovation and integrity, we transform complex challenges into
              extraordinary solutions, providing a single-source ecosystem for
              those looking to build, scale, and dominate in the digital age.
            </span>

          </p>
        </div>

        {/* SECTION 1 */}
        <div className="flex flex-col lg:flex-row justify-center items-center mx-4 md:mx-20 my-10 gap-10">

          <div className="text-2xl md:text-3xl lg:w-1/2">

            <div className="flex justify-center">

              <p className="text-[#374151] leading-[40px] md:leading-[45px] text-center lg:text-left">

                Innovation begins with ideas, and we make them extraordinary.
                Turning imagination into solutions that redefine the future.

              </p>

            </div>

            <div className="flex justify-center lg:justify-start my-5">

              <Link to="/services">

                <button onClick={()=>window.scrollTo(0,0)} className="p-3 bg-[#2F3E46] rounded-md text-white font-medium px-8 hover:bg-[#1e2a30] transition-all duration-300">

                  Explore Services

                </button>

              </Link>

            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center">

            <img
              src={image1}
              className="w-full max-w-[700px] h-[250px] md:h-[400px] object-cover rounded-2xl "
            />

          </div>
        </div>

        {/* OFFICE SECTION */}
        <div className="dark-panel mx-4 md:mx-20 p-4 md:p-5 my-6 rounded-xl">

          {/* BLOCK 1 */}
          <div className="grid md:grid-cols-2 gap-10 p-4 md:p-10 items-center">

            <div className="flex justify-center md:justify-start">

              <img
                src={image2}
                alt="office"
                className="w-full max-w-[580px] h-[240px] md:h-[300px] object-cover rounded-[30px] md:rounded-[40px]"
              />

            </div>

            <div>

              <p className="text-gray-200 text-[15px] md:text-[18px] leading-[30px] md:leading-[35px] font-semibold">

                Our modern workspace is designed to support innovation,
                teamwork, and productivity in a professional environment. We
                create a collaborative atmosphere where creative ideas and
                technology come together to build successful digital solutions.

                <span className="hidden md:inline">
                  {' '}
                  With advanced infrastructure and smart workspaces, our teams
                  deliver efficient software and cloud-based services. Our
                  office culture encourages continuous learning, innovation, and
                  growth for both employees and clients.
                </span>

              </p>

            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="grid md:grid-cols-2 gap-10 p-4 md:p-10 items-center">

            <div className="order-2 md:order-1">

              <p className="text-gray-200 text-[15px] md:text-[18px] leading-[30px] md:leading-[35px] font-semibold">

                TechNex Cloud Networks delivers intelligent digital solutions
                that help businesses grow faster, operate smarter, and scale
                securely.

                <span className="hidden md:inline">
                  {' '}
                  From cloud infrastructure and custom software development to
                  AI-powered automation and enterprise applications, we build
                  technology that drives real business transformation.
                </span>

              </p>

            </div>

            <div className="flex justify-center md:justify-end order-1 md:order-2">

              <img
                src={image3}
                alt="server"
                className="w-full max-w-[580px] h-[240px] md:h-[300px] object-cover rounded-[30px] md:rounded-[40px]"
              />

            </div>
          </div>
        </div>
        <div className='flex justify-center'>
         <Mangercard/>
        </div>
        {/* LATEST UPDATES */}
        <div className="font-bold text-2xl md:text-3xl px-4 md:px-20 py-5">
          <Latestupdates/>
        </div>
      </div>
         
    </>
  )
}
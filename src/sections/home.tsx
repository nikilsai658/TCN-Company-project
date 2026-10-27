
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
import head from '../assets/main.jpg'
import { Latestupdates } from '../components/latestupdates'
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
          className="relative bg-cover bg-center flex items-center "
          style={{
            backgroundImage: `url(${head})`,
          }}
        >

          {/* DESKTOP */}
          <div className="hidden md:flex h-[550px] items-center">

            <div
              className="text-5xl text-white font-bold px-14 bg-[#00000060] p-10 mx-10"
              style={{
                lineHeight: '60px',
                width: '800px',
                borderRadius: '10px',
              }}
            >
              <div>Bridging Technology,</div>
              <div>Education,</div>
              <div>Business Growth</div>
            </div>

          </div>

          {/* MOBILE */}
          <div className="md:hidden h-[420px] flex items-center px-4">

            <div className="bg-[#00000070] p-5 rounded-xl w-full">

              <div className="text-white font-bold text-3xl leading-[45px]">
                <div>Bridging Technology,</div>
                <div>Education,</div>
                <div>Business Growth</div>
              </div>

            </div>

          </div>

          {/* LOGO SLIDER DESKTOP */}
          <div
  className=" absolute bottom-0 bg-white overflow-hidden"
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
        <div className="flex justify-center items-center text-center text-xl md:text-3xl text-black font-bold bg-[#F2F2F2] px-4 py-4">
          <h1>Empowering Thousands of Clients Across India</h1>
        </div>

        {/* CARDS */}
        <div className='flex justify-center'>
          <Homecard />
        </div>

        {/* ABOUT COMPANY */}
        <div className="flex justify-center bg-[#F2F2F2] mx-4 md:mx-20 p-5 my-6 rounded-xl">

          <p className="text-[#374151] text-[15px] md:text-[18px] leading-[30px] md:leading-[35px] font-semibold">

            Based in Hyderabad, TechNex Cloud Networks is your integrated
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
        <div className="bg-[#F2F2F2] mx-4 md:mx-20 p-4 md:p-5 my-6 rounded-xl">

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

              <p className="text-[#1E2A38] text-[15px] md:text-[18px] leading-[30px] md:leading-[35px] font-semibold">

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

              <p className="text-[#374151] text-[15px] md:text-[18px] leading-[30px] md:leading-[35px] font-semibold">

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
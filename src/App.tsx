import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { ScrollToTop } from './components/scrolltotop';
import { Home } from './sections/home';
import { About } from './sections/about';
import { Footer } from './components/footer';
import { Services } from './sections/services';
import { Career } from './sections/career';
import { Notfound } from './sections/notfound';
import { Terms } from './sections/termsandconditions';
import { Itconsultanvcy } from './sections/itconsultancy';
import { Edutech } from './sections/edutech';
import { Digitalmarketing } from './sections/digitalmarketing';
import { Softwaredevelopment } from './sections/softwaredevelopment';
import  JobFilterUI from './sections/jobs';
import { Contactus } from './sections/contactus';
import CustomCursor from './components/cursor';
import { CoursesForm } from './sections/coursesappliactionform';
import PrivacyPolicy from './sections/privacy_policy';
import Internship from './sections/Internshipterms';
import { useEffect, useState } from 'react';
function App() {
     const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return(
    <>      
     <div >
      {isDesktop && <CustomCursor />}
       <BrowserRouter  >
      <ScrollToTop/>
      <Header/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>     
         <Route path="/services" element={<Services/>}/>  
         <Route path="/career" element={<Career/>}/>
          <Route path="/jobs" element={<JobFilterUI/>}/>
          <Route path="/termsandconditions" element={<Terms/>}/>
          <Route path="/itconsultancy" element={<Itconsultanvcy/>}/>
          <Route path="/edutech" element={<Edutech/>}/>
          <Route path="/softwaredevelopment" element={<Softwaredevelopment/>}/>
          <Route path="/digitalmarketing" element={<Digitalmarketing/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/courseform' element={<CoursesForm/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/internshipterms' element={<Internship/>}/>
          <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     </div>
    </>
  )
}
export default App;

import React, { useEffect } from 'react'
import Head from '../../components/Head/Head'
import './Home.css'
import Text from '../../Text/text'
import Text2 from '../../Text/Text2'
import { Link } from 'react-router-dom'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import TvStaticBackground from '../../components/Tv/TvStaticBackground'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true,  
    });
  }, []);
  return (
    
      
    <div>
      
      <div>
        <Head/>
      </div>
      <div className="main_text" >
        <div className="f1f">
        <h2 data-aos="fade-right">HEY THERE! </h2> <span data-aos="fade-left"><Text/> </span>
        </div>
        <div className="f1f">
        <h2 data-aos="fade-up">I AM A </h2>
        <span data-aos="fade-down" > <Text2/> </span>
        <h2 data-aos="fade-up"> DEVELOPER</h2> 
        </div>
        <p data-aos="zoom-in">Let's create something awesome together!</p>
        <div data-aos="fade-up" className="links">
        <Link to="/portfolio" element={<Portfolio/>}>
          <a class="underline-center" href='' > → see my projects</a>
        </Link>
        <Link to="/about" element={<About/>}>
          <a class="underline-center" href=''> → more about me</a>
        </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Home
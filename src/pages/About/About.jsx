import React, { useEffect } from 'react'
import Head from '../../components/Head/Head'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true,  
    });
  }, []);
  return (
      <div >
        <Head/>
        <div className="about">
        <div className="about_text" data-aos="fade-right">
            <h1>ABOUT</h1>
            <div className="line"></div>
            <p>Hey, my name is Odilbek, and I'm a frontend developer with a passion for creating innovative web-sites. I've studied for over a years, learning knowledge. In future in my free time out of work I want to work for freelance, developing websites of varying complexities. Outside of studying, I enjoy playing basketball and diving into books, always looking for ways to grow both personally and professionally.</p>
        </div>
        <div className='ball' data-aos="fade-left" >
      <img src="./hoop (2).gif" alt="" />
        </div>
        </div>
    </div>
  )
}

export default About
import React, { useEffect } from 'react'
import './Card.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Card = ({image, src}) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: true,  
    });
  }, []);
  return (
    <div>
        <div className="card" data-aos="zoom-in">
            <a target='_blank' href={src}>
                <img src={image} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Card
import React, { useEffect } from 'react'
import Head from '../../components/Head/Head'
import './Contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          easing: 'ease-in-out', 
          once: true,  
        });
      }, []);
  return (
    <div>
        <Head/>
        <div className="info">
            <h1 className='info_title' data-aos="fade-right">Contacts</h1>
            <div className="line" data-aos="zoom-in"></div>
            <div className="social">
                <div className="mail" data-aos="fade-right">
                <p>Email  </p>
                    <a class="underline-center" href="mailto:odilbekiskandaroviskandarov@gmail.com"> → odilbekiskandaroviskandarov@gmail.com</a>
                </div>
                <div className="medias" data-aos="fade-left">
                    <div className="tg">
                        <p >Social Media  </p>
                        <div className="in">
                            <a class="underline-center" href="https://t.me/cyrrrex"> → telegram</a>
                            <a class="underline-center" href="https://t.me/cyrrrex"> → whatsapp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
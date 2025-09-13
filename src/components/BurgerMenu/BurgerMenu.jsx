
import './Burger.css';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
    
        <Link to="/" element={<Home/>}>Home</Link>
        <Link to="/about" element={<About/>}>About</Link>
        <Link to="/contact" element={<Contact/>}>Contacts</Link>
        <Link to="/Portfolio" element={<Contact/>}>Portfolio</Link>
                
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
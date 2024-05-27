import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const[isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    
   <header className='header'>
   <div className='header-container'>
   <div className='branding'>
   <h1 className='name'>Sudhakar Gudavalli</h1>
   <p className='paraname'>Full Stack developer</p>
   </div>
   <nav className={`navigation ${isMenuOpen ? 'show' : ''}`}>
   <ul>
   <li><NavLink to="/" onClick={toggleMenu} >Home</NavLink></li>
   <li><NavLink to="/experience" onClick={toggleMenu}>Experience</NavLink></li>
   <li><NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink></li>
   <li><NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink></li>
   <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
   </ul>
   </nav>
   <button className='hamburger' onClick={toggleMenu}>☰</button>
   </div>
   </header>

   
  )
}

export default Header

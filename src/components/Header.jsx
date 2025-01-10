import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  }
  return (
    <nav id="navbar">
      <ul id="sidebar" className={isActive ? 'visible' : 'hidden'}>
        <li onClick={handleClick}><a href="#"><FontAwesomeIcon className="icon" icon={faX} /></a></li>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
      <ul>
        <li id="logo"><a href="#hero">MW</a></li>
        <li className="hideOnMobile"><a href="#hero">Home</a></li>
        <li className="hideOnMobile"><a href="#about">About</a></li>
        <li className="hideOnMobile"><a href="#skills">Skills</a></li>
        <li className="hideOnMobile"><a href="#projects">Projects</a></li>
        <li className="hideOnMobile"><a href="#contact" className="contact">Contact Me</a></li>
        <li className="menu-button" onClick={handleClick}><a href="#"><FontAwesomeIcon className="icon" icon={faBars} /></a></li>
      </ul>
    </nav>
  )
}

export default Header;
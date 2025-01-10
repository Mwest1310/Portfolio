import React from 'react';
import { useEffect, useRef, useState } from 'react';


const Hero = () => {

  return (
    <section id="hero">
            <div id="hero-text-container">
                <h1>Hi, I'm Matthew...</h1>
                <p>A Full-Stack Web Developer based in Hockley, Essex</p>
            </div>
            <div id="hero-link-container">
                <a href="#projects" className="hero-link">Projects</a>
                <a href="#contact" className="hero-link cta">Contact Me</a>
            </div>
    </section>
  )
}

export default Hero;
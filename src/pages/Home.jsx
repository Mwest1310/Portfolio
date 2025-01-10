// imports each component
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components//Contact';
import Footer from '../components/Footer';
import React from 'react';

// displays the components in appropriate order
const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;
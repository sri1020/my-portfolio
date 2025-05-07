import { FaDownload } from 'react-icons/fa';

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1>Hi, I'm Srilekha Mukkala</h1>
      <h3>Full Stack Developer | Web Enthusiast</h3>
      <p>I build modern and responsive web applications.</p>
      <a href="/resume.pdf" download="Resume_Srilekha_Mukkala">
        <button className="resume-btn">Download Resume</button>
      </a>
    </section>
  );
};

export default Hero;

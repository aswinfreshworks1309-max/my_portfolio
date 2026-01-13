import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { defaultConfig } from './data';

function App() {
  const [config, setConfig] = useState(defaultConfig);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      const wrapper = document.getElementById('portfolioWrapper');
      if (wrapper) wrapper.classList.add('light-theme');

      const sunIcon = document.querySelector('.sun-icon');
      const moonIcon = document.querySelector('.moon-icon');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');

      const cursorSvg = document.getElementById('cursorSvg');
      if (cursorSvg) {
        const color = '#3B82F6';
        const circle = cursorSvg.querySelector('circle');
        const ellipses = cursorSvg.querySelectorAll('ellipse');
        if (circle) circle.setAttribute('fill', color);
        ellipses.forEach(ellipse => ellipse.setAttribute('stroke', color));
      }
    }
  }, []);

  return (
    <div className="portfolio-wrapper overflow-y-auto h-full" id="portfolioWrapper">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

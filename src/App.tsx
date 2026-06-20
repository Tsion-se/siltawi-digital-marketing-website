import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScrollActiveSection = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollActiveSection);
    return () => window.removeEventListener('scroll', handleScrollActiveSection);
  }, []);

  return (
    <div className="bg-brand-obsidian text-slate-100 min-h-screen relative w-full selection:bg-brand-magenta selection:text-white">
      {/* Decorative Brand Top-Left Corner Radial Gradient */}
      <div className="absolute top-0 left-0 w-full md:w-[70vw] h-[100vh] bg-gradient-to-br from-brand-plum/15 via-brand-magenta/5 to-transparent blur-3xl pointer-events-none z-[1]" />
      
      {/* Sticky Glassmorphic Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="relative z-10">
        <Hero />
        <Statistics />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      {/* Corporate Premium Footer */}
      <Footer />
    </div>
  );
}

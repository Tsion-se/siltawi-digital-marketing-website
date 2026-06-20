import React, { useState, useEffect } from 'react';
import SiltawiLogo from './SiltawiLogo';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-obsidian/85 backdrop-blur-md py-4 border-b border-brand-magenta/10 shadow-lg shadow-brand-dark/50'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center">
            <SiltawiLogo className="h-9 sm:h-11" showText={true} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-brand-orange relative py-1 ${
                        isActive 
                        ? 'text-brand-orange font-semibold' 
                        : 'text-slate-300'
                      }`}
                    >
                      {item.name}
                      {/* Interactive active dot or bar */}
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-orange via-brand-red to-brand-magenta transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0'
                        }`} 
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300"
            >
              {/* Button bg gradient & hover pulse */}
              <span className="absolute inset-0 bg-gradient-to-r from-brand-plum via-brand-magenta to-brand-orange group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-plum opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-1.5 z-10">
                <span>Get Started</span>
                <Rocket className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-brand-orange p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-magenta/30"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-brand-magenta/15 ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 py-4 bg-brand-obsidian/95 backdrop-blur-xl'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-plum/30 text-brand-orange border-l-2 border-brand-orange pl-3'
                    : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          
          <div className="pt-4 px-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full text-center flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-plum via-brand-magenta to-brand-orange text-white font-medium hover:brightness-110 transition-all duration-200"
            >
              <Rocket className="w-4 h-4" />
              <span>Get Started Now</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

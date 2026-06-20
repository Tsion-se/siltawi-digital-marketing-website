import React from 'react';
import SiltawiLogo from './SiltawiLogo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, ArrowUp, Rocket } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer id="main-footer" className="relative bg-[#060307] border-t border-white/5 pt-20 pb-8 text-slate-300 overflow-hidden">
      {/* Visual glowing particle at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 rounded-full bg-brand-plum/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top block layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5 mb-12">
          
          {/* Brand/Logo Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="inline-block">
              <SiltawiLogo className="h-10" showText={true} />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Siltawi Digital Marketing is Ethiopia's leading premium creative technology and digital marketing agency based in Addis Ababa. We empower ambitious enterprises to build a commanding online presence, attract customers, and reach massive revenue scale through elite branding, fast websites, and scientific ad campaigns.
            </p>

            {/* Glowing social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-brand-orange/25 transition-all duration-300 flex items-center justify-center border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-brand-magenta/25 transition-all duration-300 flex items-center justify-center border border-white/5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-brand-red/25 transition-all duration-300 flex items-center justify-center border border-white/5"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-brand-plum/25 transition-all duration-300 flex items-center justify-center border border-white/5"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links sitemap column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-display">Sitemap</h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Team', href: '#team' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-slate-400 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services mapping column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-display">Services</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-brand-magenta transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-brand-magenta transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-brand-magenta transition-colors">
                  Branding & Design
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-brand-magenta transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-brand-magenta transition-colors">
                  SEO Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest font-display">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <address className="not-italic leading-relaxed text-slate-300">
                  Bole District, Addis Ababa, Ethiopia
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-magenta" />
                <a href="tel:+251900000000" className="hover:text-brand-magenta transition-colors text-slate-300">
                  +251 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange" />
                <a href="mailto:info@siltawi.com" className="hover:text-brand-orange transition-colors text-slate-300">
                  info@siltawi.com
                </a>
              </li>
            </ul>

            {/* Newsletter quick action or sign-up link inside footer */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange hover:text-white group"
              >
                <span>Request a Free Audit</span>
                <Rocket className="w-3.5 h-3.5 group-hover:translate-x-1 duration-300 transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower layout / copyright & scroll top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] font-mono tracking-wider text-slate-500">
          <p>© {new Date().getFullYear()} Siltawi Digital Marketing. All rights reserved. Addis Ababa, Ethiopia.</p>
          
          <div className="flex items-center gap-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-slate-300">Privacy Policy</a>
            <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-slate-300">Terms of Service</a>
            
            {/* Scroll back up button */}
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-brand-magenta/25 text-slate-400 hover:text-white transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

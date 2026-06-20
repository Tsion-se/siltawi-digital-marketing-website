import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Calendar, User, Tag, Award, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'Branding & Design', 'Digital Marketing'];

  const projects: Project[] = [
    {
      id: 'restaurant-website',
      title: 'Restaurant Website',
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      description: 'Designed and engineered a luxury online menu, reservations panel, and delivery cart tracking portal for a premium restaurant client, optimizing localized conversion rates and digital ordering mechanics.',
      client: 'Desta Addis Bistro',
      date: 'Oct 2024',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Leaflet Map'],
      results: ['+140% Direct Table Bookings', '+30% average cart value', '99.8% responsive speed uptime'],
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered a highly sophisticated marketplace portal featuring super-fast item checkout, real-time localized SMS tracking notifications, merchant dashboard analytics, and local payment gate integrations.',
      client: 'Sheger Fashion Hub',
      date: 'Dec 2024',
      tags: ['React SPA', 'Tailwind v4', 'Chapa SDK', 'Node API'],
      results: ['35M+ Birr transaction volume', '99.9% transactional safety rating', 'Under 1.2s average checkout load'],
    },
    {
      id: 'business-branding',
      title: 'Business Branding & Identity',
      category: 'Branding & Design',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      description: 'Created a cohesive, luxury visual identity guidelines outline, packaging design layouts, apparel tags, and a modern scalable vector logo emphasizing botanical organic origins and heritage.',
      client: 'Zemen Premium Coffee',
      date: 'Aug 2024',
      tags: ['Typography System', 'Figma Guidelines', 'Illustrations', 'Packaging'],
      results: ['100% Brand Recognition Scale', 'Increased product margins by 25%', '4.9/5 satisfaction review rating'],
    },
    {
      id: 'social-media-campaign',
      title: 'Social Media Ad Campaign',
      category: 'Digital Marketing',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Orchestrated highly targeted lead capture pipelines via Meta (Facebook + Instagram) Advertising Campaigns. Included custom video edits, short copywriting scripts, and landing page split tunnels.',
      client: 'Addis Smart Homes',
      date: 'Jan 2025',
      tags: ['Facebook Pixel', 'A/B Testing', 'Creative Copywriting', 'Meta Ads'],
      results: ['12,500+ Qualified Buyer leads', '4.2x Average ROAS (Return)', '80% improvement in ad CTR'],
    },
    {
      id: 'company-profile-website',
      title: 'Company Profile Website',
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'Crafted a single-page interactive company portfolio featuring responsive parallax background grids, dynamic maps, multilingual localized translations, and smart automated lead capture nodes.',
      client: 'Abyssinia Logistics PLC',
      date: 'Nov 2024',
      tags: ['React.js', 'Tailwind', 'Internationalization', 'Google Analytics'],
      results: ['+80% Online B2B Quote requests', '100% Mobile friendliness score', '97/100 Google PageSpeed index'],
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-brand-obsidian">
      {/* Visual background details */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-magenta/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange text-glow-orange block">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Our Latest Creative Masterpieces
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-magenta mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-4">
            Take a tour of our high-impact campaigns, beautifully aligned corporate identities, and performant web technologies.
          </p>
        </div>

        {/* Categories Tab Pill Filter */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-brand-orange to-brand-magenta text-white shadow-md shadow-brand-magenta/20 font-bold'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid Container */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl glass-panel border border-white/5 overflow-hidden flex flex-col justify-between h-full bg-brand-dark/50"
              >
                {/* Image Container with Hover overlay */}
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/30 to-transparent opacity-60 z-10 transition-opacity duration-300 group-hover:opacity-80" />
                  
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/40 to-brand-magenta/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* actual project image */}
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none ease-out"
                  />

                  {/* Floating category badge top-right */}
                  <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-brand-obsidian/90 text-brand-orange border border-brand-orange/20 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Info Text Content panel */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-brand-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-medium mb-4 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-magenta" />
                      <span>Client: {project.client}</span>
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer metadata action */}
                  <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
                    <div className="flex gap-1.5">
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange group-hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Case Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-white/10 shadow-2xl bg-brand-dark p-6 sm:p-8"
              >
                {/* Close Button top-right */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1.5 block">
                    {selectedProject.category} Case Study
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Banner Image / Mockup visual inside modal */}
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 border border-white/5">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-transparent" />
                </div>

                {/* Description and Client Metrics layout splits */}
                <div className="grid md:grid-cols-12 gap-8 mb-8">
                  {/* Detailed Description */}
                  <div className="md:col-span-7 space-y-4">
                    <h4 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400">Project Overview</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>
                    
                    <div className="pt-4">
                      <h4 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400 mb-3">Tech Stacks Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tg) => (
                          <span key={tg} className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/5 border border-white/5">
                            <Tag className="w-3 h-3 text-brand-orange" />
                            <span>{tg}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Details Sheet & Key Results */}
                  <div className="md:col-span-5 space-y-6">
                    {/* Metadata sheet */}
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3.5 text-xs text-slate-300">
                      <div className="flex justify-between pb-2 border-b border-white/5">
                        <span className="text-slate-400 font-medium">Client Reference:</span>
                        <span className="font-semibold text-white">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-white/5">
                        <span className="text-slate-400 font-medium">Delivery Date:</span>
                        <span className="font-semibold text-white">{selectedProject.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-medium">Sector:</span>
                        <span className="font-semibold text-brand-orange">{selectedProject.category}</span>
                      </div>
                    </div>

                    {/* Performance metrics results */}
                    <div className="space-y-3.5">
                      <h4 className="text-sm uppercase font-mono font-bold tracking-wider text-slate-400">Key Achievements</h4>
                      <ul className="space-y-2.5">
                        {selectedProject.results.map((res, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="font-semibold leading-tight">{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer buttons on modal */}
                <div className="border-t border-white/5 pt-6 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs text-slate-400 hover:text-white font-medium tracking-wide transition-all"
                  >
                    Close Case Study
                  </button>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      const contactSec = document.querySelector('#contact');
                      if (contactSec) {
                        const offsetTop = contactSec.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-magenta text-white text-xs font-bold tracking-wide hover:brightness-110 transition-all flex items-center gap-1.5"
                  >
                    <span>Request Similar Results</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

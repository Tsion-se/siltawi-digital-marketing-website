import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Megaphone, Monitor, Palette, Camera, Search, Check, ChevronRight, Sparkles, HelpCircle } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Supercharge your user acquisition and retention with ROI-driven brand campaigns and ad distribution networks.',
      icon: <Megaphone className="w-6 h-6" />,
      items: [
        'Social Media Marketing',
        'Facebook Ads Management',
        'Instagram Ads Campaigns',
        'Google Ads (Search & Display)',
        'Email Marketing Sequences',
        'Influencer Marketing & outreach',
      ],
      color: 'from-[#F9A03F] to-[#E43E54]',
      badge: 'High Conversion',
    },
    {
      id: 'web-development',
      title: 'Website Development',
      description: 'Deploy blazing-fast, robust, responsive corporate web spaces designed for elite search ranking and flawless UX.',
      icon: <Monitor className="w-6 h-6" />,
      items: [
        'Premium Company Websites',
        'Full-featured E-commerce platforms',
        'High-converting Landing Pages',
        'Creative Service Portfolios',
        'Dedicated SLA Maintenance & support',
      ],
      color: 'from-[#E43E54] to-[#D8275D]',
      badge: 'Tech-Forward',
    },
    {
      id: 'branding-design',
      title: 'Branding & Design',
      description: 'Craft distinctive visual identities and collateral assets that reflect supreme premium status across all media.',
      icon: <Palette className="w-6 h-6" />,
      items: [
        'Custom Logo Design',
        'Comprehensive Brand Identity Systems',
        'High-impact Marketing Materials',
        'Figma UI/UX Interface Design',
      ],
      color: 'from-[#D8275D] to-[#631B5D]',
      badge: 'Visual Artistry',
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Engage and grow communities with bespoke media creation—from commercial reels to compelling copywriting.',
      icon: <Camera className="w-6 h-6" />,
      items: [
        'Corporate Photography',
        'Short-form & Long-form Video Production',
        'Persuasive Copywriting services',
        'Social Content calendar management',
      ],
      color: 'from-[#631B5D] to-[#F9A03F]',
      badge: 'Viral Engagement',
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      description: 'Dominate organic search queues, elevate local map profiles, and index top-tier domain authority rankings.',
      icon: <Search className="w-6 h-6" />,
      items: [
        'Deep On-page SEO optimization',
        'Technical SEO fixes & crawling audit',
        'Local SEO (Google Business Profiles)',
        'Full Domain SEO & keyword auditing',
      ],
      color: 'from-[#F9A03F] to-[#D8275D]',
      badge: 'Search Domination',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-brand-obsidian/95 border-y border-white/5 overflow-hidden">
      {/* Background glow backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-brand-magenta/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta text-glow block">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Our Premium Digital Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-magenta mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Explore our world-class marketing and technology offerings engineered specifically to scale your commercial reach in Ethiopia and beyond.
          </p>
        </div>

        {/* Services visual Grid / Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between relative group overflow-hidden border border-white/5 transition-all duration-300"
            >
              {/* Top border glow layer */}
              <div className={`absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-300`} />
              
              <div>
                {/* Upper line: Icon & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}>
                    <div className="w-full h-full bg-brand-obsidian rounded-[15px] flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
                    {service.badge}
                  </span>
                </div>

                {/* Service Meta Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description Text */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sub-deliverables list */}
                <div className="border-t border-white/5 pt-6 mt-4">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-500 block mb-4">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action/Details button footer */}
              <div className="pt-8 mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-orange hover:text-white group-hover:translate-x-1.5 transition-all duration-300"
                >
                  <span>Book Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
          
          {/* Custom CTA Glass Card in the services list */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-brand-plum/40 via-brand-magenta/10 to-brand-orange/5 border border-brand-magenta/15 flex flex-col justify-between relative overflow-hidden text-left"
          >
            {/* Glowing particle floaters */}
            <span className="absolute top-10 right-10 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange mb-6">
                <HelpCircle className="w-6 h-6 animate-pulse" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                Need a Custom Solution?
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Do you have a unique product concept, enterprise website requirement, or customized scale target? Our specialized strategists can design bespoke packages just for you.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="w-full text-center flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-orange text-white font-semibold text-sm hover:brightness-110 transition-all duration-200 shadow-lg shadow-brand-magenta/10"
              >
                <span>Consult Our Team</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

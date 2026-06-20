import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Sparkles, Lightbulb, Users, Shield, Trophy, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');

  const coreValues = [
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Constantly pioneer new strategies, marketing tools, and technology platforms to keep our clients ahead of the curve.',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'from-amber-400 to-amber-600',
    },
    {
      id: 'creativity',
      title: 'Creativity',
      description: 'Craft fresh, thumb-stopping digital experiences that captivate attention and define unforgettable brand stories.',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-brand-orange to-brand-red',
    },
    {
      id: 'transparency',
      title: 'Transparency',
      description: 'Maintain open, honest, and regular reporting so you always know where your marketing budget is yielding returns.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-sky-400 to-sky-600',
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'Deliver peerless standards of service and visual quality that exceed standard benchmarks and establish digital authority.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-brand-magenta to-brand-plum',
    },
    {
      id: 'customer-success',
      title: 'Customer Success',
      description: 'Align our metrics with your business metrics, treating your revenue and transaction progress as our highest priority.',
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      description: 'Continuously upgrade our knowledge in local markets and international ad algorithms to implement state-of-the-art metrics.',
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-indigo-400 to-indigo-600',
    },
  ];

  const timelineEvents = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Siltawi Digital Marketing opened in Addis Ababa, aiming to elevate digital service quality for businesses in Ethiopia.',
    },
    {
      year: '2024',
      title: 'Expanded Digital Services',
      description: 'Integrated robust web development, deep SEO audit utilities, and multi-channel ad operations (Facebook, Instagram, Google).',
    },
    {
      year: '2025',
      title: 'Growing Client Network',
      description: 'Serviced 50+ local and global partners, earning a reputation for elite brand building and performance-focused ROAS.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-brand-obsidian overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-plum/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-widest text-brand-orange text-glow-orange block"
          >
            Who We Are
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight"
          >
            We Are Pioneers Of Creative Technology In East Africa
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-magenta mx-auto rounded-full" />
        </div>

        {/* Introduction & Mission/Vision Tabs Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Main Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Core Company Overview</span>
            <p className="text-xl text-slate-200 font-light leading-relaxed">
              Siltawi Digital Marketing helps businesses grow through branding, social media marketing, website development, SEO, content creation, and digital advertising.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              We started with a vision to provide world-class, premium agency expertise right here in Addis Ababa. Over the past few years, we have scaled regional champions and local startups alike, combining localized consumer intelligence with international creative standards.
            </p>
            
            {/* Interactive Tab Selector */}
            <div className="pt-6">
              <div className="flex gap-4 border-b border-white/5 mb-6">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-4 text-base font-bold tracking-wide transition-all duration-300 relative ${
                    activeTab === 'mission' ? 'text-brand-orange font-bold' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    <span>Our Mission</span>
                  </span>
                  {activeTab === 'mission' && (
                    <motion.div
                      layoutId="tab-line"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-4 text-base font-bold tracking-wide transition-all duration-300 relative ${
                    activeTab === 'vision' ? 'text-brand-magenta font-bold' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-5 h-5" />
                    <span>Our Vision</span>
                  </span>
                  {activeTab === 'vision' && (
                    <motion.div
                      layoutId="tab-line"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-magenta"
                    />
                  )}
                </button>
              </div>

              {/* Tab Display Card */}
              {activeTab === 'mission' ? (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-2xl glass-panel border border-brand-orange/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-full pointer-events-none" />
                  <h4 className="text-lg font-bold text-white mb-2">Empowering Growth Digitally</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To deliver highly measurable digital campaigns, premium high-converting technology, and world-class designs that translate marketing budgets into sustainable, recurring business operations and clear market dominance.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-2xl glass-panel border border-brand-magenta/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-magenta/5 rounded-bl-full pointer-events-none" />
                  <h4 className="text-lg font-bold text-white mb-2">Leading the African Frontier</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    To become the premier creative technology powerhouse of East Africa, recognized globally for setting new standards of visual luxury, data intelligence, and customer satisfaction.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Timeline Milestones (Right Column) */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 lg:pl-10">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-6">Our Journey & Milestones</span>
            
            <div className="relative border-l-2 border-brand-plum/20 ml-3 space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Glowing vertical point */}
                  <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-brand-obsidian border-2 border-brand-magenta flex items-center justify-center transition-all duration-300 group-hover:border-brand-orange">
                    <span className="w-1.5 h-1.5 bg-brand-magenta rounded-full group-hover:bg-brand-orange group-hover:scale-125 transition-all duration-300" />
                  </div>

                  {/* Year pill */}
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wide text-brand-orange bg-brand-orange/10 border border-brand-orange/20 mb-2">
                    {event.year}
                  </span>

                  <h4 className="text-lg font-bold text-white mb-2 font-display group-hover:text-brand-orange transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="pt-16 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Driven by Excellence</span>
            <h3 className="text-2xl font-bold text-white font-display mt-2">Our Core Operating Values</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/5 relative group overflow-hidden transition-all duration-300"
              >
                {/* Visual Accent bar on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-red group-hover:w-full transition-all duration-300" />

                {/* Value Icon container */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-brand-orange group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-brand-magenta transition-all duration-500 shadow-md">
                  {value.icon}
                </div>

                <h4 className="text-lg font-bold text-white font-display mb-3 group-hover:text-brand-orange transition-colors">
                  {value.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

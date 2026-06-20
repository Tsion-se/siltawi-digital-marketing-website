import React from 'react';
import { motion } from 'motion/react';
import { Play, TrendingUp, BarChart2, Globe, Sparkles, Check, ChevronRight, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden bg-brand-obsidian"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-plum/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/10 translate-y-1/10 w-96 h-96 rounded-full bg-brand-magenta/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* Decorative Particle Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:min-h-[75vh]">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
            
            {/* Upper Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-magenta/25 w-fit"
            >
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-red bg-clip-text text-transparent">
                Ethiopia's Leading Digital Agency
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-none capitalize"
            >
              Grow Your Business With{' '}
              <span className="bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-red bg-clip-text text-transparent text-glow">
                Powerful Digital Solutions
              </span>
            </motion.h1>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-slate-300 font-light max-w-xl leading-relaxed"
            >
              We help brands build a commanding online presence, attract high-quality customers, and achieve explosive digital growth through creative technology and data-driven strategies. Based in Addis Ababa.
            </motion.p>

            {/* CTA Option Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo('#contact')}
                className="relative group overflow-hidden px-8 py-4 rounded-xl text-sm font-bold tracking-wide text-white transition-all duration-300 shadow-xl shadow-brand-magenta/15"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-plum group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-brand-plum via-brand-magenta to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => handleScrollTo('#services')}
                className="px-8 py-4 rounded-xl border border-white/10 hover:border-brand-magenta/40 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group text-sm font-bold tracking-wide"
              >
                <span>Explore Services</span>
                <Play className="w-3.5 h-3.5 fill-current text-white/50 group-hover:text-white transition-colors" />
              </button>
            </motion.div>

            {/* Live Indicators / Floating stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8 max-w-lg"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold tracking-wide text-slate-400">
                  50+ Global Brands
                </span>
              </div>
              <div className="flex items-center gap-1.5 justify-center md:justify-start">
                <Check className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-semibold tracking-wide text-slate-400">
                  95% Retention
                </span>
              </div>
              <div className="flex items-center gap-1.5 justify-end md:justify-start">
                <Check className="w-4 h-4 text-brand-magenta" />
                <span className="text-xs font-semibold tracking-wide text-slate-400">
                  Addis Ababa Team
                </span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Digital Dashboard Mockup Section (Right Column) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center items-center">
            
            {/* Backdrop glowing circle */}
            <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-tr from-brand-orange/10 via-brand-magenta/10 to-brand-plum/10 filter blur-3xl transform rotate-45 select-none" />

            {/* Dashboard Mockup Panel (Glassmorphism) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative p-6 rounded-3xl glass-panel border-white/10 shadow-2xl w-full max-w-[430px]"
            >
              {/* Header inside mockup */}
              <div className="flex justify-between items-center pb-5 border-b border-white/5 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-brand-red/75" />
                    <span className="w-3 h-3 rounded-full bg-brand-orange/75" />
                    <span className="w-3 h-3 rounded-full bg-brand-plum/75" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-2">siltawi.panel.v1</span>
                </div>
                <div className="flex items-center gap-1 bg-brand-plum/30 text-brand-orange px-2.5 py-1 rounded-md text-[10px] font-mono leading-none">
                  <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping mr-1" />
                  LIVE METRICS
                </div>
              </div>

              {/* Central Graph & Info */}
              <div className="space-y-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Daily Leads Conversion</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold font-display text-white">+284.1%</span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
                      +14.2% Today
                    </span>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Facebook & IG Campaign</span>
                    <span className="font-semibold text-white">88% Effectiveness</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-orange to-brand-magenta h-full rounded-full w-[88%]" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Google SEO Authority</span>
                    <span className="font-semibold text-white">93% Rank</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-magenta to-brand-plum h-full rounded-full w-[93%]" />
                  </div>

                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Active Content Creation</span>
                    <span className="font-semibold text-white">72% Completed</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-orange to-brand-plum h-full rounded-full w-[72%]" />
                  </div>
                </div>

                {/* Mini Stat Widget items */}
                <div className="grid grid-cols-2 gap-4 pt-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-magenta/30 transition-all">
                    <span className="text-[10px] text-slate-400 block tracking-wide uppercase">Impressions</span>
                    <span className="text-lg font-bold text-white font-display block mt-1">1.2M+</span>
                    <span className="text-[10px] text-brand-orange font-semibold">Organic Reach</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-orange/30 transition-all">
                    <span className="text-[10px] text-slate-400 block tracking-wide uppercase">ROAS</span>
                    <span className="text-lg font-bold text-white font-display block mt-1">4.8x</span>
                    <span className="text-[10px] text-brand-magenta font-semibold">Ad Campaigns</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Floating UI Card Left */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -left-6 bottom-16 p-3.5 rounded-2xl glass-panel border-white/10 shadow-lg flex items-center gap-3 w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center shadow-lg">
                <BarChart2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">Growth Spike</span>
                <span className="text-sm font-bold text-white font-display">+186% CTR</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 ml-1 self-start" />
            </motion.div>

            {/* Secondary Floating UI Card Right */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -right-4 top-16 p-3.5 rounded-2xl glass-panel border-white/10 shadow-lg flex items-center gap-3 w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-magenta to-brand-plum flex items-center justify-center shadow-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">New Clients</span>
                <span className="text-sm font-bold text-white font-display">Active Now</span>
              </div>
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

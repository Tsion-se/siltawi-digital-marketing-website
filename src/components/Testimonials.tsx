import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      quote: 'Siltawi helped us increase our online sales by 200% within six months! Their analytics insights and customized ad funnels transformed how we reach clients in Addis Ababa.',
      author: 'Fikru Daniel',
      role: 'Business Owner & Director',
      company: 'Yene Logistics & Delivery',
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      quote: 'Their website design and marketing services transformed our brand presence completely. Our inbound leads surged by 80% with the new single-page corporate portal.',
      author: 'Hana Kebede',
      role: 'Startup Founder & Creative Lead',
      company: 'Kefa Premium Coffee Roasters',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
    },
    {
      id: 'testimonial-3',
      quote: 'Working with the Siltawi team was a masterclass in professional communication. They do not just post graphics — they built a scientific lead funnel with real conversions.',
      author: 'Dr. Abreham Tekle',
      role: 'Managing Partner',
      company: 'Ethio-Modern Dental Clinic',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      rating: 5,
    },
  ];

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 bg-brand-obsidian overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-magenta/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange text-glow-orange block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Loved By Ambitious Enterprises
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-magenta mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-4">
            Hear from leading business owners, founders, and managing directors in East Africa about how Siltawi scales physical products.
          </p>
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          {/* Main Slide card */}
          <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full p-8 sm:p-12 rounded-3xl glass-panel border border-white/5 shadow-2xl relative bg-brand-dark/30 text-center flex flex-col items-center"
              >
                {/* Floating Big Quote Mark */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-magenta flex items-center justify-center text-white shadow-lg shadow-brand-magenta/25">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1.5 mb-6 text-brand-orange mt-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>

                {/* Main Quote text */}
                <blockquote className="text-lg sm:text-xl text-slate-100 font-light italic leading-relaxed mb-8 max-w-2xl">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* User avatar metadata */}
                <div className="flex items-center gap-4 text-left">
                  <div className="relative w-14 h-14 rounded-full p-[1px] bg-gradient-to-br from-brand-orange to-brand-magenta">
                    <img
                      src={testimonials[activeIndex].avatarUrl}
                      alt={testimonials[activeIndex].author}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold text-white block font-display">
                      {testimonials[activeIndex].author}
                    </cite>
                    <span className="text-xs text-brand-orange font-semibold block">
                      {testimonials[activeIndex].role}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      {testimonials[activeIndex].company}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls Left/Right Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 z-20">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-brand-obsidian/80 border border-white/5 text-slate-400 hover:text-white hover:border-brand-orange flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-4 z-20">
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-brand-obsidian/80 border border-white/5 text-slate-400 hover:text-white hover:border-brand-magenta flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators Dots Bar */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-6 bg-gradient-to-r from-brand-orange to-brand-magenta'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

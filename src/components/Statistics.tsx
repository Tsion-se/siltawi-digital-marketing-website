import React, { useState, useEffect, useRef } from 'react';
import { Layers, Users, Award, Calendar, Heart } from 'lucide-react';

interface StatCardProps {
  key?: string;
  label: string;
  targetValue: number;
  suffix: string;
  icon: React.ReactNode;
  delay: number;
}

function StatCard({ label, targetValue, suffix, icon, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = targetValue;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth out easing (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasStarted, targetValue]);

  return (
    <div
      ref={cardRef}
      className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col items-center justify-center text-center relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/5"
    >
      {/* Dynamic Hover Glow Corner */}
      <span className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
      <span className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-brand-magenta/5 to-transparent rounded-tr-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

      {/* Floating Spark Icon Backdrop */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="w-16 h-1 px bg-gradient-to-r from-transparent via-brand-magenta to-transparent rounded-full shadow-[0_0_12px_var(--color-brand-magenta)]" />
      </div>

      {/* Metric icon with double ring hover */}
      <div className="relative mb-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-magenta rounded-2xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300 pointer-events-none" />
        <div className="w-16 h-16 rounded-2xl glass-panel border-white/10 flex items-center justify-center text-brand-orange group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-magenta transition-all duration-500 shadow-inner">
          {icon}
        </div>
      </div>

      {/* Metric value and label */}
      <div className="space-y-1">
        <span className="text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight flex justify-center items-baseline">
          {count}
          <span className="text-transparent bg-gradient-to-r from-brand-orange to-brand-magenta bg-clip-text font-bold ml-0.5">
            {suffix}
          </span>
        </span>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mt-2">
          {label}
        </p>
      </div>

    </div>
  );
}

export default function Statistics() {
  const stats = [
    {
      id: 'projects',
      label: 'Projects Completed',
      targetValue: 100,
      suffix: '+',
      icon: <Layers className="w-7 h-7" />,
      delay: 0,
    },
    {
      id: 'clients',
      label: 'Active Clients',
      targetValue: 50,
      suffix: '+',
      icon: <Users className="w-7 h-7" />,
      delay: 1,
    },
    {
      id: 'team',
      label: 'Team Members',
      targetValue: 15,
      suffix: '+',
      icon: <Award className="w-7 h-7" />,
      delay: 2,
    },
    {
      id: 'experience',
      label: 'Years Experience',
      targetValue: 3,
      suffix: '+',
      icon: <Calendar className="w-7 h-7" />,
      delay: 3,
    },
    {
      id: 'satisfaction',
      label: 'Client Satisfaction',
      targetValue: 95,
      suffix: '%',
      icon: <Heart className="w-7 h-7" />,
      delay: 4,
    },
  ];

  return (
    <section id="statistics" className="relative py-20 bg-brand-obsidian/95 border-y border-white/5 overflow-hidden">
      {/* Background glow dots */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-plum/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic Horizontal layout or Bento Grid style setup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              label={stat.label}
              targetValue={stat.targetValue}
              suffix={stat.suffix}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

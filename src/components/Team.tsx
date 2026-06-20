import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { TeamMember } from '../types';

export default function Team() {
  const team: TeamMember[] = [
    {
      id: 'ceo-founder',
      name: 'Biniam Siltawi',
      role: 'CEO & Founder',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Leading strategic direction and digital transformations for enterprises in East Africa since 2018.',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'marketing-manager',
      name: 'Selamawit Tsion',
      role: 'Marketing Manager',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Expert conversion-specialist designing multi-channel paid ads with millions of Birr in managed returns.',
      socials: {
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'web-dev-lead',
      name: 'Dawit Abreham',
      role: 'Web Development Team',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Fullstack web engineer building blazing fast, responsive React architectures and database nodes.',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
    {
      id: 'graphic-designer',
      name: 'Kiya Asrat',
      role: 'Graphic Design Team',
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Visual artist drafting clean packaging labels, premium user interfaces, and brand identity systems.',
      socials: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'content-creator',
      name: 'Ephrem Hailu',
      role: 'Content Creation Team',
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Professional corporate photographer and video director crafting viral reels and marketing copies.',
      socials: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: 'seo-analyst',
      name: 'Kidus Yohannes',
      role: 'SEO Specialist',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Information architect sorting localized search queues on Google to land top organic leads.',
      socials: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
    },
  ];

  return (
    <section id="team" className="relative py-24 bg-brand-obsidian/95 border-y border-white/5 overflow-hidden">
      {/* Background visual sparkles */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-plum/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-magenta text-glow block">
            Meet the Brains
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Our Elite Dream Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-magenta mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            A dynamic group of creatives, coders, marketers, and technical analysts working together from Addis Ababa to deliver spectacular results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl glass-panel border border-white/5 overflow-hidden bg-brand-dark/40 flex flex-col items-center"
            >
              {/* Profile Image card container */}
              <div className="relative w-full aspect-square overflow-hidden">
                {/* Visual hover ring */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/20 to-transparent opacity-40 z-10 transition-opacity duration-300 group-hover:opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-magenta/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10" />

                <img
                  src={member.imageUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out select-none"
                />

                {/* Floating link arrow top-right on hover only */}
                <span className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-obsidian/80 text-brand-orange flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 backdrop-blur-sm border border-white/5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Text context details */}
              <div className="p-6 text-center w-full flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-brand-orange transition-colors duration-300">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold tracking-wide text-brand-magenta bg-brand-magenta/10 border border-brand-magenta/20 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {member.role}
                  </span>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-sm mx-auto mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Social media connections */}
                <div className="flex justify-center items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-brand-orange/25 transition-all duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-brand-magenta/25 transition-all duration-200"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-brand-red/25 transition-all duration-200"
                      aria-label={`${member.name} Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-brand-plum/25 transition-all duration-200"
                      aria-label={`${member.name} Facebook`}
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

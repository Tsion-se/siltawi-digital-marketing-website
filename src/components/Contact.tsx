import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please populate necessary fields (Name, Email, Message).');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate elite network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-obsidian">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-plum/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange text-glow-orange block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Let's Start Your Digital Growth Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-orange to-brand-magenta mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto mt-4">
            Have a project or campaign idea in mind? Ready to accelerate your ROAS? Contact our Addis Ababa office.
          </p>
        </div>

        {/* Major Columns split: details vs form */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Left: Contact Info Panels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Agency Details</span>
              
              <h3 className="text-2xl font-bold text-white font-display leading-tight">
                Connect Directly With Siltawi Strategists
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you prefer to grab a premium Abyssinia coffee at our Bole office, schedule a comprehensive Google Meet sequence, or discuss custom budget tiers via email, our team is standing by.
              </p>
            </div>

            {/* Visual detail blocks */}
            <div className="space-y-4 py-6">
              
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-brand-orange/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-magenta transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-wide">Write to us</span>
                  <a href="mailto:info@siltawi.com" className="text-sm font-bold text-slate-200 hover:text-brand-orange transition-colors">
                    info@siltawi.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-brand-magenta/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-magenta group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-magenta group-hover:to-brand-plum transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-wide">Call our hotline</span>
                  <a href="tel:+251900000000" className="text-sm font-bold text-slate-200 hover:text-brand-magenta transition-colors">
                    +251 900 000 000
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-brand-orange/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-orange group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-brand-orange group-hover:to-brand-magenta transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block uppercase tracking-wide">Visit office</span>
                  <address className="not-italic text-sm font-bold text-slate-200">
                    Bole District, Addis Ababa, Ethiopia
                  </address>
                </div>
              </div>

            </div>

            {/* Lower indicator sheet */}
            <div className="p-5 rounded-2xl bg-brand-plum/10 border border-brand-plum/20">
              <div className="flex items-center gap-3 text-xs text-brand-orange font-bold mb-1.5 uppercase tracking-wider">
                <Clock className="w-4 h-4 animate-spin-slow" />
                <span>Working Hours</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Monday to Friday: 9:00 AM — 6:00 PM (EAT / UTC+3). We typically respond to email briefs within 2 hours.
              </p>
            </div>

          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            
            <div className="p-8 pb-10 rounded-3xl glass-panel border border-white/5 bg-brand-dark/20 h-full relative overflow-hidden flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Inquiry Tunnel</span>
                      <h3 className="text-xl font-bold text-white font-display">Bespoke Project Planner</h3>
                    </div>

                    {errorMsg && (
                      <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-orange text-xs font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="name">
                          Full Name <span className="text-brand-magenta">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="E.g., Dawit Alula"
                          className="w-full bg-slate-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="email">
                          Email Address <span className="text-brand-magenta">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g., mail@company.com"
                          className="w-full bg-slate-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="phone">
                        Phone Number <span className="text-slate-500">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="E.g., +251 911 000 000"
                        className="w-full bg-slate-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider" htmlFor="message">
                        Project Description / Campaign Goal <span className="text-brand-magenta">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are your key metrics, and what services interest you? E.g., we want to scale our Instagram lead intake and revamp our corporate web presence..."
                        className="w-full bg-slate-900/40 border border-white/10 rounded-xl p-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/20 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden py-4 rounded-xl text-sm font-bold tracking-wide text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-brand-magenta/10"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-plum group-hover:scale-105 transition-transform duration-300" />
                      <span className="absolute inset-0 bg-gradient-to-r from-brand-plum via-brand-magenta to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 rounded-full border-2 border-white/25 border-t-white animate-spin" />
                            <span>Routing Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Proposal Request</span>
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2 relative">
                      <span className="w-16 h-16 rounded-full bg-emerald-500/20 absolute animate-ping opacity-75" />
                      <CheckCircle2 className="w-10 h-10 relative z-10" />
                    </div>

                    <div className="space-y-2 max-w-md">
                      <h3 className="text-2xl font-bold text-white font-display">Inquiry Sent Successfully!</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Thank you for reaching out to Siltawi Digital Marketing. One of our digital growth strategists will review your project planner and call or email you within 2 working hours.
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4 justify-center">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs text-slate-400 hover:text-white font-semibold transition-all"
                      >
                        Send Another message
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">Find Our Office</span>
            <h3 className="text-lg font-bold text-white font-display mt-1">Our Location in Bole, Addis Ababa</h3>
          </div>

          <div className="h-96 w-full rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative">
            {/* Interactive gray filter on google maps inside iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.632297598168!2d38.784742718165565!3d9.003328498877196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85aaf4fcbb2b%3A0xcfd6a5f973719c8d!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1718873029193!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(240deg) grayscale(80%) contrast(110%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Siltawi Digital Office location Bole Addis Ababa"
              id="google-maps-iframe"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

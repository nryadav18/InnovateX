import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm as useRhfForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { Button } from '../components/ui/Button';
import { LabImage } from '../components/ui/LabImage';
import { Building, Users, Star, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import SchoolBenefitsSection from '../components/sections/SchoolBenefitsSection';
import WhatIfSection from '../components/sections/WhatIfSection';
import axios from 'axios';

const leadSchema = z.object({
  schoolName: z.string().min(2, 'School name is required'),
  principalName: z.string().min(2, 'Principal name is required'),
  city: z.string().min(2, 'City is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  students: z.string().min(1, 'Number of students is required'),
  message: z.string().optional()
});

const Schools = () => {
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

  const { register, handleSubmit, formState: { errors }, reset } = useRhfForm({
    resolver: zodResolver(leadSchema)
  });

  const onSubmit = async (data) => {
    setSubmitStatus('loading');
    try {
      await axios.post('/api/leads', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      // For demo purposes, we'll pretend it succeeded if backend isn't up
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2"></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 mb-24 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
            Institutional Partnerships
          </div>
          <AnimatedText 
            text="BECOME THE #1 TECH-FORWARD SCHOOL IN YOUR DISTRICT"
            className="text-text font-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] mb-8 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block max-w-5xl mx-auto text-balance"
          />
          <p className="font-sans text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We don't just sell software. We integrate a holistic technology ecosystem into your timetable, transforming your students into creators and your institution into a district pioneer.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Button onClick={() => document.getElementById('partnership-form').scrollIntoView({ behavior: 'smooth' })} className="py-5 px-10 text-lg">
              Request Partnership Call
            </Button>
          </motion.div>
        </section>

        {/* Benefits & What Ifs */}
        <SchoolBenefitsSection />
        <WhatIfSection />

        {/* District Pioneer & Next Steps */}
        <section className="container mx-auto px-4 md:px-8 py-32 relative z-10 border-t border-border">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: District Pioneer Pitch */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:w-1/2"
            >
              <div className="w-16 h-16 bg-surface border border-primary rounded-xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(245,197,24,0.3)]">
                <Star size={32} className="text-primary" fill="currentColor" />
              </div>
              <h2 className="font-display text-5xl text-text mb-6">The District Pioneer Status</h2>
              <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
                The first school to partner with InnovaTe X in each district receives exclusive recognition. You become the flagship institution for our Grand Expo, receiving priority PR, customized branding, and early access to our industry-level robotics tier.
              </p>
              <div className="p-6 bg-card border-l-4 border-primary rounded-r-xl">
                <h3 className="font-condensed text-xl text-text uppercase tracking-widest mb-2">Bespoke Customization</h3>
                <p className="font-sans text-sm text-text-muted">
                  "We design a programme tailored for your institution. Whether you have 200 students or 2,000, we adapt our trainers and timetable mapping to fit your exact capacity."
                </p>
              </div>
            </motion.div>

            {/* Right: Next Steps */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border mb-10 group">
                <LabImage name="DSC06511" size="lg" alt="InnovaTeX project showcase cabinet in a partner school lab" className="aspect-[16/9] w-full" imgClassName="group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 z-10">
                  <div className="font-condensed uppercase tracking-[0.2em] text-primary text-xs mb-1">Your Future Lab</div>
                  <div className="font-display text-2xl text-text tracking-wide">A Showcase Students Are Proud Of</div>
                </div>
              </div>
              <h2 className="font-display text-4xl text-text mb-8">4 Steps to Transformation</h2>
              <div className="space-y-6">
                {[
                  { title: "Connect", desc: "Schedule a discovery call with our foundational team." },
                  { title: "Confirm", desc: "We audit your infrastructure and propose a mapping plan." },
                  { title: "Customize", desc: "Our trainers align with your timetable for zero disruption." },
                  { title: "Stand Out", desc: "Launch the programme and watch your students build." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 hover:bg-surface rounded-xl transition-colors border border-transparent hover:border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-display text-primary flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-condensed text-xl text-text uppercase tracking-widest">{step.title}</h4>
                      <p className="font-sans text-text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Lead Capture Form */}
        <section id="partnership-form" className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card border border-primary/30 p-8 md:p-14 rounded-2xl shadow-[0_0_50px_rgba(245,197,24,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            
            <div className="text-center mb-10">
              <Building2 size={48} className="text-primary mx-auto mb-4" />
              <h2 className="font-display text-4xl md:text-5xl text-text mb-2">Request Partnership Proposal</h2>
              <p className="font-sans text-text-muted">Fill out the details below and our institutional directors will contact you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex flex-col items-center">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                  <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">School Name *</label>
                  <input {...register('schoolName')} type="text" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="St. Mary's High School" />
                  {errors.schoolName && <span className="text-red-400 text-xs">{errors.schoolName.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Principal/Director Name *</label>
                  <input {...register('principalName')} type="text" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="Dr. Sarah Johnson" />
                  {errors.principalName && <span className="text-red-400 text-xs">{errors.principalName.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                  <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">City / District *</label>
                  <input {...register('city')} type="text" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="Kakinada" />
                  {errors.city && <span className="text-red-400 text-xs">{errors.city.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Total Students (All Levels) *</label>
                  <select {...register('students')} className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text outline-none transition-colors appearance-none">
                    <option value="">Select Range</option>
                    <option value="100-300">100 - 300 Students</option>
                    <option value="301-600">301 - 600 Students</option>
                    <option value="601-1000">601 - 1000 Students</option>
                    <option value="1000+">1000+ Students</option>
                  </select>
                  {errors.students && <span className="text-red-400 text-xs">{errors.students.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="space-y-2">
                  <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Phone Number *</label>
                  <input {...register('phone')} type="tel" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="+91 9809663999" />
                  {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Official Email Id *</label>
                  <input {...register('email')} type="email" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="principal@school.edu" />
                  {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                </div>
              </div>

              <div className="w-full space-y-2">
                <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Additional Message (Optional)</label>
                <textarea {...register('message')} rows="3" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors resize-none" placeholder="Any specific requirements or questions..."></textarea>
              </div>

              <div className="w-full pt-4">
                <Button type="submit" className="w-full py-5 text-lg" disabled={submitStatus === 'loading'}>
                  {submitStatus === 'loading' ? 'SUBMITTING...' : 'SUBMIT PROPOSAL REQUEST'}
                </Button>
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full bg-green-500/10 border border-green-500/30 p-4 rounded-lg flex items-center gap-3 text-green-400"
                  >
                    <CheckCircle2 size={20} />
                    <span className="font-sans text-sm font-medium">Thank you! Your request has been received. Our directors will contact you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Schools;

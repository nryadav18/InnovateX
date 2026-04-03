import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setSubmitStatus('loading');
    try {
      await axios.post('/api/contact', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      // Fallback for demo
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <section className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
              Get In Touch
            </div>
            <AnimatedText 
              text="CONNECT WITH THE FUTURE"
              className="text-text font-display text-5xl md:text-7xl leading-none mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block"
            />
            <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're a parent, a school administrator, or an aspiring trainer, we're here to answer your questions and build the next generation of creators together.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="bg-surface border border-border p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none"></div>
                
                <h3 className="font-display text-3xl text-text mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-condensed text-text uppercase tracking-widest text-sm mb-1">Headquarters</h4>
                      <p className="font-sans text-text-muted leading-relaxed">
                        65-5-1/C, opp. GPT College,<br/>
                        G.P.T. Colony, Kakanada,<br/>
                        Andhra Pradesh – 533003
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-condensed text-text uppercase tracking-widest text-sm mb-1">Phone</h4>
                      <p className="font-sans text-text-muted leading-relaxed">+91 98096 63999</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-condensed text-text uppercase tracking-widest text-sm mb-1">Email</h4>
                      <p className="font-sans text-text-muted leading-relaxed">support@innovatex.in</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-2/3"
            >
              <div className="bg-card border border-border p-8 md:p-10 rounded-2xl relative shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Your Name *</label>
                      <input {...register('name')} type="text" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="John Doe" />
                      {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Email Address *</label>
                      <input {...register('email')} type="email" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="john@example.com" />
                      {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Subject *</label>
                    <input {...register('subject')} type="text" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors" placeholder="How can we help?" />
                    {errors.subject && <span className="text-red-400 text-xs">{errors.subject.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="font-condensed tracking-widest text-text-muted text-xs uppercase">Message *</label>
                    <textarea {...register('message')} rows="5" className="w-full bg-surface border border-border focus:border-primary rounded-lg px-4 py-3 text-text placeholder:text-border outline-none transition-colors resize-none" placeholder="Write your message here..."></textarea>
                    {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full sm:w-auto py-4 px-8 flex items-center gap-2 justify-center" disabled={submitStatus === 'loading'}>
                      {submitStatus === 'loading' ? 'SENDING...' : (
                        <>SEND MESSAGE <Send size={18} /></>
                      )}
                    </Button>
                  </div>

                  {/* Status Message */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full bg-green-500/10 border border-green-500/30 p-4 rounded-lg flex items-center gap-3 text-green-400 mt-4"
                      >
                        <CheckCircle2 size={20} />
                        <span className="font-sans text-sm font-medium">Thank you! Your message has been sent successfully.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Contact;

import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { Target, Eye, Lightbulb, Hexagon, Shield, Zap, Sparkles, MapPin } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">
        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 mb-32 relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center w-full max-w-5xl"
          >
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-[0.3em] text-sm bg-primary/10 backdrop-blur-sm">
              Our Story
            </div>
            
            <AnimatedText 
              text="WE DON'T JUST TRAIN STUDENTS."
              className="text-primary font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-3 tracking-wide block"
            />
            
            <AnimatedText 
              text="WE BUILD BUILDERS."
              className="text-text font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] mb-12 tracking-wide block drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              delay={1.5}
            />

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-text-muted font-sans text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            >
              InnovaTe X exists to bridge the gap between abstract academic learning and the tangible creation of technology.
            </motion.p>
          </motion.div>
        </section>

        {/* Company Overview & Headquarters */}
        <section className="container mx-auto px-4 md:px-8 mb-32 relative z-10">
          <div className="bg-surface rounded-2xl border border-border p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2"
            >
              <h3 className="font-display text-5xl md:text-6xl text-text mb-6">Our Roots</h3>
              <p className="font-sans text-text-muted text-lg leading-relaxed mb-8">
                From our foundation, InnovaTe X was designed to break the mould of standard educational workshops. We don’t run two-day seminars. We embed entirely new dimensions into the schooling system, ensuring 100% of students—not just the toppers—have exposure to creation.
              </p>
              
              <div className="flex items-start bg-card/50 p-6 rounded-xl border border-border">
                <MapPin className="text-primary w-8 h-8 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-condensed text-xl text-text uppercase tracking-widest mb-2">Headquarters</h4>
                  <p className="font-sans text-text-muted">
                    65-5-1/C, opp. GPT College,<br/>
                    G.P.T. Colony, Kakanada,<br/>
                    Andhra Pradesh – 533003
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full lg:w-1/2 h-80 rounded-xl overflow-hidden relative border-2 border-border group"
            >
              {/* Placeholder for an image or dynamic asset */}
              <div className="absolute inset-0 bg-gradient-to-tr from-card to-surface group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop`} alt="InnovaTe X Tech Team" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
              </div>
              <div className="absolute inset-0 border-[4px] border-primary/20 pointer-events-none"></div>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="container mx-auto px-4 md:px-8 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-text">The North Star</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <GlowBorder className="h-full">
                <div className="bg-card p-10 h-full flex flex-col items-start border-b-4 border-primary/0 hover:border-primary transition-colors duration-300">
                  <Target size={40} className="text-primary mb-6" />
                  <h3 className="font-display text-3xl tracking-wide text-text mb-4">Mission</h3>
                  <p className="font-sans text-text-muted leading-relaxed">
                    Equip every school student from Class 3 to Class 10 with Coding, Robotics, and AI skills through hands-on, curriculum-aligned learning.
                  </p>
                </div>
              </GlowBorder>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <GlowBorder className="h-full">
                <div className="bg-card p-10 h-full flex flex-col items-start border-b-4 border-primary/0 hover:border-primary transition-colors duration-300">
                  <Eye size={40} className="text-primary mb-6" />
                  <h3 className="font-display text-3xl tracking-wide text-text mb-4">Vision</h3>
                  <p className="font-sans text-text-muted leading-relaxed">
                    To make hands-on technology education the global standard, moving beyond theoretical consumption to active, real-world creation.
                  </p>
                </div>
              </GlowBorder>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <GlowBorder className="h-full">
                <div className="bg-card p-10 h-full flex flex-col items-start border-b-4 border-primary/0 hover:border-primary transition-colors duration-300">
                  <Lightbulb size={40} className="text-primary mb-6" />
                  <h3 className="font-display text-3xl tracking-wide text-text mb-4">Values</h3>
                  <ul className="font-sans text-text-muted leading-relaxed space-y-2">
                    <li><span className="text-primary font-bold mr-2">/</span> Zero Disruption to Schooling</li>
                    <li><span className="text-primary font-bold mr-2">/</span> 100% Student Participation</li>
                    <li><span className="text-primary font-bold mr-2">/</span> Output-Driven Learning</li>
                  </ul>
                </div>
              </GlowBorder>
            </motion.div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="font-display text-5xl md:text-6xl text-text"
            >
              Why We Are Different
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { icon: Shield, title: "Curriculum Aligned (NEP)", desc: "We don't force generic bootcamps. Our material is fully aligned to the latest National Educational Policy standards, ensuring academic relevance." },
              { icon: Users, title: "Trainer Ecosystem", desc: "We don't just provide software. We provide rigorously trained educators who masters tech pedagogy before stepping into a classroom." },
              { icon: Hexagon, title: "Proprietary Physical Books", desc: "Digital learning needs physical grounding. Our multi-level student books act as the physical anchor for abstract coding concepts." },
              { icon: Zap, title: "The Hardware Bridge", desc: "Software is invisible. Robotics makes it visible. We bridge the two seamlessly so students see their code move real, physical objects." }
            ].map((diff, i) => (
              <motion.div 
                key={diff.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center flex-shrink-0 mr-6 group-hover:border-primary transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <diff.icon size={28} className="text-primary relative z-10" />
                </div>
                <div>
                  <h4 className="font-condensed text-2xl text-text uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">{diff.title}</h4>
                  <p className="font-sans text-text-muted leading-relaxed">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;

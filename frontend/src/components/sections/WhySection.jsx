import { motion } from 'framer-motion';
import { GlowBorder } from '../ui/GlowBorder';
import { Code2, Bot } from 'lucide-react';

const WhySection = () => {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/5">
            Our Philosophy
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-text">The Power to Build</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowBorder className="h-full">
              <div className="p-8 md:p-12 h-full flex flex-col items-start bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface via-bg to-bg relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <Code2 size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-4xl tracking-wide text-text mb-6">Why Coding?</h3>
                <p className="font-sans text-text-muted leading-relaxed text-lg">
                  Code is a superpower. It turns any idea into a real app, game, or solution. With 90% of careers now being tech-driven, learning to code is no longer optional. Beyond syntax, debugging builds unparalleled resilience and logical thinking in young minds.
                </p>
              </div>
            </GlowBorder>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlowBorder className="h-full">
              <div className="p-8 md:p-12 h-full flex flex-col items-start bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-surface via-bg to-bg relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
                  <Bot size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-4xl tracking-wide text-text mb-6">Why Robotics?</h3>
                <p className="font-sans text-text-muted leading-relaxed text-lg">
                  The moment a child's code moves a physical robot, something changes permanently. Abstract logic suddenly becomes physical reality. It bridges the gap between digital thoughts and tangible engineering, sparking a lifelong fascination with how things work.
                </p>
              </div>
            </GlowBorder>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-surface border-l-4 border-primary p-8 md:p-16 rounded-tr-3xl rounded-br-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background quote icon */}
          <div className="absolute -top-12 -right-6 text-[20rem] leading-none font-display text-bg opacity-[0.8] select-none pointer-events-none text-outline-primary">"</div>
          <p className="font-condensed italic text-3xl md:text-5xl text-text leading-tight md:leading-snug relative z-10 max-w-4xl tracking-wide">
            "Not teaching code today is like not teaching reading in 1960."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySection;

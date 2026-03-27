import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden border-t border-b border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full point-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex-shrink-0 flex flex-col items-center justify-center bg-bg/50 backdrop-blur-sm p-8 rounded-full border-2 border-primary w-48 h-48 sm:w-56 sm:h-56 shadow-[0_0_40px_rgba(245,197,24,0.15)]"
          >
            <Award size={48} className="text-primary mb-2" />
            <div className="font-display text-4xl sm:text-5xl text-text leading-none mb-1">100%</div>
            <div className="font-condensed text-xs sm:text-sm text-primary uppercase tracking-widest text-center">Renewal Rate<br/>Year 2</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="text-6xl text-primary/40 font-display leading-none mb-4">"</div>
            <p className="font-sans text-2xl md:text-3xl lg:text-4xl text-text leading-snug font-medium italic mb-8">
              We saw the change in three months. Parents were calling to say their children were excited to come to school. That had never happened before.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-primary"></div>
              <div>
                <h4 className="font-condensed text-xl text-text uppercase tracking-widest">School Principal</h4>
                <p className="font-sans text-sm text-text-muted">InnovaTe X Partner School, Andhra Pradesh</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

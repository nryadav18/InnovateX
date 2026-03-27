import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-24 bg-bg relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute left-[50%] top-0 h-[48rem] max-w-none -translate-x-1/2 stroke-border [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M.5 60V.5H60" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/30">
            <ShieldCheck size={40} className="text-primary" />
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] text-text mb-6 leading-none tracking-wide text-balance">
            Become the <span className="text-primary italic">#1</span> Tech-Forward School in Your District
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            The first school to partner with InnovaTe X in each district receives exclusive <span className="text-text font-bold">District Pioneer</span> recognition and priority implementation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button to="/contact" variant="primary" className="text-xl py-6 px-12 w-full sm:w-auto shadow-[0_0_30px_rgba(245,197,24,0.3)] hover:shadow-[0_0_40px_rgba(245,197,24,0.5)]">
              Start Your Future Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

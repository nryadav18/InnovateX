import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { AnimatedText } from '../ui/AnimatedText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20">
      {/* Animated Golden Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(var(--color-primary-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-dim) 1px, transparent 1px)',
             backgroundSize: '80px 80px',
             backgroundPosition: 'center center'
           }}
      >
        <motion.div 
          animate={{ y: [0, 80] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 bg-bg opacity-90"
          style={{ backdropFilter: 'blur(3px)' }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-block border border-primary text-primary px-5 py-2 rounded-full text-sm sm:text-base tracking-[0.3em] font-condensed uppercase bg-bg/50 backdrop-blur-sm shadow-[0_0_15px_rgba(245,197,24,0.3)]"
        >
          Coding <span className="mx-2 opacity-50">•</span> Robotics <span className="mx-2 opacity-50">•</span> AI
        </motion.div>

        <AnimatedText 
          text="OUR TINY TOTS"
          className="text-primary font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none mb-1 tracking-wider"
          delay={0.4}
        />
        
        <AnimatedText 
          text="STAND OUT"
          className="text-text font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none mb-8 tracking-wider drop-shadow-2xl"
          delay={1.2}
        />

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-muted font-sans text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed"
        >
          Binary Minds | Bright Futures — equipping Class 3 to Class 10 students with real technology skills through hands-on school programmes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Button to="/schools" variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">
            Partner With Us
          </Button>
          <Button to="/programme" variant="outline" className="w-full sm:w-auto text-lg py-5 px-10">
            Explore Programme
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={40} className="drop-shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

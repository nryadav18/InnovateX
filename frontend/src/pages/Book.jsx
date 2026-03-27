import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { CheckCircle2, BookOpen, PenTool, Layout, MonitorSmartphone } from 'lucide-react';

const levels = [
  { name: 'Level 1 Entry', classes: 'Class 3' },
  { name: 'Level 1 Consolidation', classes: 'Class 4' },
  { name: 'Level 2 Foundations', classes: 'Class 5' },
  { name: 'Level 2 Growth', classes: 'Class 6' },
  { name: 'Level 3 Intermediate', classes: 'Class 7' },
  { name: 'Level 3 Project Entry', classes: 'Class 8' },
  { name: 'Level 4 Advanced', classes: 'Class 9' },
  { name: 'Level 4 Capstone', classes: 'Class 10' }
];

const Book = () => {
  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        <section className="container mx-auto px-4 md:px-8 relative z-10 font-sans">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
                The Tangible Anchor
              </div>
              
              <AnimatedText 
                text="THE STUDENT BOOK"
                className="text-text font-display text-5xl md:text-7xl leading-none mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block"
              />
              
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                A physical companion to digital creation. Meticulously designed from Class 3 to Class 10, the InnovaTe X Student Book merges Coding and Robotics into a single, cohesive, hands-on curriculum entirely aligned to modern school standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Hands-on projects built in',
                  'Aligned to school curriculum',
                  'Covers both Coding + Robotics',
                  'Published exclusively by InnovaTe X'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-surface p-4 rounded-lg border border-border">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-text font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: 3D Book Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 flex justify-center items-center perspective-[1500px]"
            >
              <div className="relative w-64 md:w-80 aspect-[1/1.4] transition-transform duration-1000 transform-gpu hover:-rotate-y-12 hover:rotate-x-12 hover:scale-105" style={{ transform: 'rotateY(-25deg) rotateX(10deg)', transformStyle: 'preserve-3d' }}>
                
                {/* Book Front */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-bg border-l-8 border-primary rounded-r-2xl shadow-2xl flex flex-col p-8" style={{ transform: 'translateZ(15px)', backfaceVisibility: 'hidden' }}>
                  <div className="text-3xl font-display font-bold tracking-wider text-text mb-1">
                    InnovaTe <span className="text-primary italic">X</span>
                  </div>
                  <div className="text-[8px] text-text-muted uppercase tracking-widest mb-auto">
                    Binary Minds | Bright Futures
                  </div>
                  
                  <div className="text-center my-auto">
                    <BookOpen size={48} className="text-primary mx-auto mb-4 opacity-50" />
                    <div className="font-display text-4xl text-text tracking-widest">CODING</div>
                    <div className="font-condensed text-primary text-sm tracking-[0.4em] mb-2 px-4 py-1 border-t border-b border-primary/30 inline-block">&</div>
                    <div className="font-display text-4xl text-text tracking-widest">ROBOTICS</div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="font-condensed text-text-muted uppercase tracking-widest text-xs">Student Edition</div>
                    <div className="font-sans text-text text-sm font-bold">Level 1 - Level 4</div>
                  </div>
                </div>

                {/* Book Spine (3D depth illusion) */}
                <div className="absolute top-0 bottom-0 left-[-30px] w-[30px] bg-primary-dim origin-right border-l border-white/20" style={{ transform: 'rotateY(-90deg) translateZ(0)' }}></div>
                
                {/* Book Back/Pages (3D depth illusion) */}
                <div className="absolute top-[5px] bottom-[5px] right-[-15px] w-[15px] bg-[#f5f5f5] rounded-r origin-left shadow-inner" style={{ transform: 'rotateY(90deg) translateZ(0)' }}></div>
                
                {/* Book Bottom (Pages) */}
                <div className="absolute bottom-[-15px] left-0 right-0 h-[15px] bg-[#e0e0e0] origin-top" style={{ transform: 'rotateX(-90deg) translateZ(0)' }}></div>

              </div>
            </motion.div>
          </div>

        </section>

        {/* The 8 Levels */}
        <section className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-text text-center">8 Levels of Progression</h2>
            <p className="font-sans text-text-muted text-lg mt-4 max-w-2xl mx-auto">
              A structured, scaffolded journey. Each book builds upon the cognitive leaps made in the previous year, leaving zero gaps in knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {levels.map((level, i) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlowBorder className="h-full">
                  <div className="bg-card p-6 h-full flex flex-col items-center justify-center text-center group">
                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mb-4 border border-border group-hover:border-primary transition-colors">
                      <span className="font-display text-xl text-primary">{i+1}</span>
                    </div>
                    <div className="font-condensed text-text-muted text-xs uppercase tracking-widest mb-1">{level.classes}</div>
                    <h4 className="font-sans font-bold text-text text-lg">{level.name}</h4>
                  </div>
                </GlowBorder>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Book;

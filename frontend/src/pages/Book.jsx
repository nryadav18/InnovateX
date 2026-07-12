import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { CheckCircle2 } from 'lucide-react';

const levels = [
  { name: 'Flyers', focus: 'Foundations & digital fluency', image: '/covers/flyers.webp' },
  { name: 'Movers', focus: 'Logic, web & first code', image: '/covers/movers.webp' },
  { name: 'Advanced', focus: 'Python & applied projects', image: '/covers/advanced.webp' },
  { name: 'Proficient', focus: 'Full-stack, AI & capstone builds', image: '/covers/proficient.webp' }
];

// Covers are pre-cropped to the front face and downscaled to lightweight WebP
// (~120KB each vs. ~17MB source spreads), so they load near-instantly. They
// just need to fill their frame.
const COVER_CROP = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

const Book = () => {
  const [active, setActive] = useState(0);

  // Auto-advance the cover slider every 2s. All four covers stay mounted and
  // only their opacity toggles, so slides cross-fade on the GPU with no reflow
  // and no re-fetch — zero lag between transitions.
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % levels.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

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
                A physical companion to digital creation. Meticulously designed across four progressive levels — Flyers to Proficient — the InnovaTe X Student Book merges Coding and Robotics into a single, cohesive, hands-on curriculum entirely aligned to modern school standards.
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

            {/* Right: 3D Book Mockup with live cover slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 flex flex-col justify-center items-center perspective-[1500px]"
            >
              <div className="relative w-64 md:w-80 aspect-[1/1.4] transition-transform duration-1000 transform-gpu hover:scale-105" style={{ transform: 'rotateY(-25deg) rotateX(10deg)', transformStyle: 'preserve-3d' }}>

                {/* Book Front — the printed cover (auto-sliding through the 4 levels) */}
                <div className="absolute inset-0 border-l-8 border-primary rounded-r-2xl shadow-2xl overflow-hidden bg-bg" style={{ transform: 'translateZ(15px)', backfaceVisibility: 'hidden' }}>

                  {levels.map((level, i) => (
                    <div
                      key={level.name}
                      aria-hidden={i !== active}
                      className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === active ? 'opacity-100' : 'opacity-0'}`}
                      style={{ backgroundImage: `url("${level.image}")`, ...COVER_CROP }}
                    />
                  ))}

                  {/* Glass gloss + edge shading for a printed-cover feel */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/15 via-transparent to-black/20"></div>
                  <div className="absolute inset-y-0 left-0 w-6 pointer-events-none bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>

                {/* Book Spine (3D depth illusion) */}
                <div className="absolute top-0 bottom-0 left-[-30px] w-[30px] bg-primary-dim origin-right border-l border-white/20" style={{ transform: 'rotateY(-90deg) translateZ(0)' }}></div>

                {/* Book Back/Pages (3D depth illusion) */}
                <div className="absolute top-[5px] bottom-[5px] right-[-15px] w-[15px] bg-[#f5f5f5] rounded-r origin-left shadow-inner" style={{ transform: 'rotateY(90deg) translateZ(0)' }}></div>

                {/* Book Bottom (Pages) */}
                <div className="absolute bottom-[-15px] left-0 right-0 h-[15px] bg-[#e0e0e0] origin-top" style={{ transform: 'rotateX(-90deg) translateZ(0)' }}></div>

              </div>

              {/* Live caption + progress dots, synced to the slider */}
              <div className="mt-14 flex flex-col items-center gap-4">
                <div className="h-8 overflow-hidden text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="font-condensed uppercase tracking-[0.3em] text-sm"
                    >
                      <span className="text-text">{levels[active].name}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-2.5">
                  {levels.map((level, i) => (
                    <button
                      key={level.name}
                      onClick={() => setActive(i)}
                      aria-label={`Show ${level.name} cover`}
                      className={`h-2 rounded-full transition-all duration-500 ${i === active ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        {/* The 4 Levels */}
        <section className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-text text-center">4 Levels of Progression</h2>
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
                  <div className="bg-card p-6 h-full flex flex-col items-center text-center group">
                    <div className="w-full aspect-[1/1.4] mb-6 overflow-hidden rounded shadow-lg border border-border group-hover:border-primary/50 transition-colors">
                      <div
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url("${level.image}")`, ...COVER_CROP }}
                        role="img"
                        aria-label={`${level.name} Student Book cover`}
                      />
                    </div>
                    <div className="font-condensed text-primary text-xs uppercase tracking-widest mb-1">Level {i + 1}</div>
                    <h4 className="font-display text-2xl text-text tracking-wide mb-2">{level.name}</h4>
                    <p className="font-sans text-text-muted text-sm">{level.focus}</p>
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

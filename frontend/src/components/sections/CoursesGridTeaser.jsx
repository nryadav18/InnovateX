import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal, Shield, Beaker, Hexagon, Code2, Zap, Rocket, GraduationCap } from 'lucide-react';

const coding = [
  { level: 'Flyers', num: 1, icon: Terminal, topics: 'Foundations, typing, digital fluency & safe internet' },
  { level: 'Movers', num: 2, icon: Beaker, topics: 'Logic, algorithms, web design & first code' },
  { level: 'Advanced', num: 3, icon: Code2, topics: 'Python programming & applied projects' },
  { level: 'Proficient', num: 4, icon: Rocket, topics: 'Full-stack, AI assistants & capstone builds' }
];

const CodingGridTeaser = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section className="py-24 bg-surface relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/5">
              The Path Ahead
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-text">Level-Based Curriculum</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link to="/coding" className="text-primary font-condensed tracking-widest uppercase hover:text-text transition-colors flex items-center group">
              View All Coding Courses
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="relative">
        <div
          className="courses-scroll w-full overflow-x-auto overflow-y-visible pb-8 cursor-grab active:cursor-grabbing pl-4 md:pl-8 lg:pl-16"
          aria-label="Scrollable level curriculum cards"
        >
          <motion.div
            className="flex gap-6 w-max pr-8 md:pr-16 snap-x snap-mandatory"
            style={{ x: xTransform }}
          >
            {coding.map((cdng, i) => (
              <motion.div
                key={cdng.level}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                className="w-72 snap-start bg-card rounded-xl p-8 border border-border flex flex-col items-start gap-4 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(245,197,24,0.15)] transition-all"
              >
                <div className="w-14 h-14 bg-bg rounded-lg flex items-center justify-center border border-border">
                  <cdng.icon className="text-primary w-7 h-7" />
                </div>
                <div className="mt-2">
                  <div className="font-condensed text-primary text-xs uppercase tracking-widest mb-1">Level {cdng.num}</div>
                  <h3 className="font-display text-4xl text-text leading-none">{cdng.level}</h3>
                </div>
                <p className="text-text-muted font-sans text-sm h-16">{cdng.topics}</p>
                <Link to={`/coding`} className="mt-auto pt-4 border-t border-border w-full text-xs font-condensed uppercase tracking-widest text-primary hover:text-text transition-colors flex justify-between items-center group">
                  View Curriculum
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
};

export default CodingGridTeaser;

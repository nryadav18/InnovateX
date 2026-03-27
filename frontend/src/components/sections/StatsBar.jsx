import { motion } from 'framer-motion';
import { StatCounter } from '../ui/StatCounter';

const stats = [
  { value: 100, suffix: '%', label: 'Schools Renewed Year 2' },
  { value: 8, suffix: '', label: 'Classes Covered (Class 3–10)' },
  { value: 36, suffix: '', label: 'Day Trainer Intensive' },
  { value: 4, suffix: '', label: 'Levels of Learning' },
];

const StatsBar = () => {
  return (
    <section className="bg-surface py-16 border-y border-border relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-display text-primary mb-3 drop-shadow-[0_0_15px_rgba(245,197,24,0.4)]">
                <StatCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-muted font-condensed tracking-widest uppercase text-sm md:text-base max-w-[150px] mx-auto text-balance">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

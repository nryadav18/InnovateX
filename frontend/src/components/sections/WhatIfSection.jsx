import { motion } from 'framer-motion';

const scenarios = [
  "What if your school's assembly featured a student-built robot demonstration — built entirely by a Grade 4 child?",
  "What if a student from your school won a national technology olympiad and named your school in every interview?",
  "What if parents were choosing your school specifically because of its coding and robotics programme?",
  "What if your teachers were confident technology educators — not just attendees of a one-day workshop that changed nothing?"
];

const WhatIfSection = () => {
  return (
    <section className="py-24 bg-[#0a0f1d] relative">
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at center, var(--color-surface) 0%, var(--color-bg) 100%)' }}></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-display text-5xl md:text-7xl text-primary tracking-wide drop-shadow-[0_0_20px_rgba(245,197,24,0.3)] mb-4"
          >
            IMAGINE ONE YEAR FROM NOW
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {scenarios.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card p-8 md:p-10 border-l-4 border-primary rounded-r-xl shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Decorative gradient wipe */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out z-0"></div>
              
              <div className="relative z-10 flex items-start">
                <span className="font-display text-5xl text-primary/40 mr-4 leading-none select-none">"</span>
                <p className="font-condensed text-xl md:text-2xl text-text leading-tight tracking-wide italic">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIfSection;

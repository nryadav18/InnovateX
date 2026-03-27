import { motion } from 'framer-motion';

const benefits = [
  {
    num: "1",
    title: "Identity & Ranking",
    desc: "You become the school that thinks ahead."
  },
  {
    num: "2",
    title: "Academic Performance",
    desc: "Students who code, study differently."
  },
  {
    num: "3",
    title: "Parent Confidence",
    desc: "Parents choose you and never leave."
  },
  {
    num: "4",
    title: "Competition Wins",
    desc: "Medals. Trophies. Your name, announced."
  },
  {
    num: "5",
    title: "Zero Disruption",
    desc: "It fits in. Doesn't fight your timetable."
  },
  {
    num: "6",
    title: "Staff Transformation",
    desc: "Your teachers become tech champions."
  }
];

const SchoolBenefitsSection = () => {
  return (
    <section className="py-24 bg-bg relative border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/5">
            Partner Advantages
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-text">Transformation Beyond Coding</h2>
          <p className="font-sans text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Partnered schools become more vibrant, future-ready, and confident. It changes what your school stands for.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-default"
            >
              {/* Massive background number */}
              <div className="absolute -top-14 -left-6 text-[8rem] font-display text-surface leading-none select-none transition-colors duration-300 group-hover:text-primary/10 z-0">
                {benefit.num}
              </div>
              
              <div className="relative z-10 pl-6 border-l-2 border-border group-hover:border-primary transition-colors duration-300">
                <h3 className="font-display text-3xl tracking-wide text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="font-sans text-text-muted text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SchoolBenefitsSection;

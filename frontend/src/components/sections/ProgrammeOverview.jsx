import { motion } from 'framer-motion';
import { GlowBorder } from '../ui/GlowBorder';
import { Button } from '../ui/Button';

const phases = [
  {
    phase: 1,
    title: 'Digital Fluency & AI',
    topics: ['Computer Basics & OS', 'Generative AI Introduction', 'Effective Prompting'],
    project: 'First AI-Assisted Story'
  },
  {
    phase: 2,
    title: 'Web Builder — HTML',
    topics: ['HTML5 Structure & Tags', 'Web Styling Basics', 'Responsive Layout Concepts'],
    project: 'Personal Portfolio Webpage'
  },
  {
    phase: 3,
    title: 'Python & Turtle Art',
    topics: ['Python Syntax & Variables', 'Loops & Conditions', 'Turtle Graphics Library'],
    project: 'Algorithmic Art Generator'
  },
  {
    phase: 4,
    title: 'Python Apps & Games',
    topics: ['Functions & Scopes', 'Game Logic Design', 'Interactive User Input'],
    project: 'Text-Based Adventure Game'
  },
  {
    phase: 5,
    title: 'Pedagogy & Grand Expo',
    topics: ['Teaching Methodologies', 'Presentation Skills', 'Project Showcasing'],
    project: 'Grand Expo Demonstration'
  },
  {
    phase: 6,
    title: 'Digital Citizenship',
    topics: ['Online Safety & Privacy', 'Spotting Deepfakes', 'AI Ethics & Future'],
    project: 'Digital Citizen Campaign'
  }
];

const ProgrammeOverview = () => {
  return (
    <section className="py-24 bg-surface relative z-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/5">
              Curriculum Architecture
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-text">The Journey</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Button to="/programme" variant="outline">View Full Syllabus</Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <GlowBorder className="h-full">
                <div className="bg-card p-8 h-full flex flex-col relative overflow-hidden">
                  {/* Background Number */}
                  <div className="absolute -right-6 -bottom-10 text-[10rem] font-display text-surface leading-none select-none transition-transform duration-500 group-hover:scale-110 opacity-50">
                    {phase.phase}
                  </div>

                  <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-center mb-6">
                      <span className="font-display text-3xl text-primary">PHASE {phase.phase}</span>
                    </div>

                    <h3 className="font-condensed text-2xl text-text uppercase tracking-wide mb-6">
                      {phase.title}
                    </h3>

                    <ul className="space-y-3 mb-8">
                      {phase.topics.map((topic, j) => (
                        <li key={j} className="flex items-start text-text-muted font-sans text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0"></span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Project Reveal */}
                  <div className="relative z-10 mt-auto pt-6 border-t border-border overflow-hidden">
                    <div className="transform translate-y-0 opacity-100 transition-all duration-300 group-hover:translate-y-full group-hover:opacity-0 absolute inset-x-0 bottom-0 text-primary font-condensed tracking-widest uppercase text-sm">
                      Hover for Key Project
                    </div>
                    <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 flex items-center gap-2">
                      <span className="text-bg bg-primary px-2 py-0.5 text-xs font-bold rounded uppercase tracking-wider">Project</span>
                      <span className="text-text font-condensed tracking-wider">{phase.project}</span>
                    </div>
                  </div>

                </div>
              </GlowBorder>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgrammeOverview;

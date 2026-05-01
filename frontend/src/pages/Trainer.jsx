import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { BookOpen, Hammer, Rocket, MessageSquare, Award, Users, CheckCircle2, Milestone } from 'lucide-react';

const phases = [
  { num: 1, title: 'Coding Foundations', hours: '15 Hours', outcome: 'Master core programming logic using Python & HTML.' },
  { num: 2, title: 'Robotics & Hardware', hours: '18 Hours', outcome: 'Assemble circuits, sensors, and program microcontrollers.' },
  { num: 3, title: 'Applied App & Game Dev', hours: '20 Hours', outcome: 'Develop interactive software applications and logic grids.' },
  { num: 4, title: 'Autonomous IoT Systems', hours: '22 Hours', outcome: 'Bridge software with motors and wireless hardware systems.' },
  { num: 5, title: 'Dual-Tech Pedagogy', hours: '18 Hours', outcome: 'Master the art of teaching both code and physical hardware.' },
  { num: 6, title: 'Digital Citizenship & Expo', hours: '15 Hours', outcome: 'Guide students on AI ethics and present final capstones.' }
];

const Trainer = () => {
  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 mb-24 text-center relative z-10">
          <AnimatedText 
            text="THE TECH WIZARD INTENSIVE"
            className="text-text font-display text-5xl md:text-7xl lg:text-[6rem] leading-none mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block max-w-5xl mx-auto"
          />
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Aspiring mentors transformed into dual-qualified Coding & Robotics educators. Fully equipped to teach both high-level software development and hands-on hardware engineering.
          </p>
        </section>

        {/* Who is this for? */}
        <section className="container mx-auto px-4 md:px-8 mb-24 max-w-5xl relative z-10">
          <GlowBorder>
            <div className="bg-surface p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/30">
                <Users size={40} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-text mb-4">Who is this for?</h3>
                <p className="font-sans text-text-muted text-lg leading-relaxed">
                  This programme is designed for passionate educators, fresh graduates, or school teachers who want to upskill. <strong className="text-text font-medium">No prior coding or robotics experience is required.</strong> We start from absolute zero and build you into a dual-tech master of pedagogy, fully capable of leading both software labs and hardware workshops over intensive training days.
                </p>
              </div>
            </div>
          </GlowBorder>
        </section>

        {/* Methodology Cycle */}
        <section className="container mx-auto px-4 md:px-8 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-text">The 4-Step Methodology</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { icon: BookOpen, title: '1. Learn', desc: 'Absorb the core logic behind the technology.' },
              { icon: Hammer, title: '2. Break', desc: 'Dismantle existing code to see how it fails.' },
              { icon: Rocket, title: '3. Build', desc: 'Create a brand new project from scratch.' },
              { icon: MessageSquare, title: '4. Explain', desc: 'Teach the concept back to the cohort.' }
            ].map((step, i) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 w-full bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors relative"
              >
                {i !== 3 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-border z-0">
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.div>
                  </div>
                )}
                <div className="w-16 h-16 mx-auto bg-surface rounded-full flex items-center justify-center mb-6 border border-border">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h4 className="font-condensed text-xl text-text uppercase tracking-widest mb-3">{step.title}</h4>
                <p className="font-sans text-sm text-text-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6 Phases Summary */}
        <section className="container mx-auto px-4 md:px-8 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-text">Intensive Roadmap</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface p-6 rounded-xl border border-border flex flex-col hover:shadow-[0_0_20px_rgba(245,197,24,0.1)] transition-shadow"
              >
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-border/50">
                  <span className="font-condensed text-primary uppercase tracking-widest text-sm">Phase {phase.num}</span>
                  <span className="bg-bg text-text-muted text-xs px-2 py-1 rounded font-mono border border-border">{phase.hours}</span>
                </div>
                <h4 className="font-display text-2xl text-text mb-3">{phase.title}</h4>
                <div className="mt-auto pt-4 flex items-start gap-2 text-sm">
                  <Milestone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-text-muted">{phase.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Assessment Rubric Table */}
        <section className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl text-text">Assessment Rubric</h2>
            <p className="font-sans text-text-muted mt-4">Strict evaluation criteria to ensure highest quality educators.</p>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border font-condensed tracking-widest text-primary uppercase">
                  <th className="p-4 md:p-6 font-normal">Component</th>
                  <th className="p-4 md:p-6 font-normal">Weight</th>
                  <th className="p-4 md:p-6 font-normal min-w-[300px]">Criteria for Passing</th>
                </tr>
              </thead>
              <tbody className="bg-card font-sans text-sm md:text-base text-text">
                <tr className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td className="p-4 md:p-6 font-bold flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Technical Accuracy</td>
                  <td className="p-4 md:p-6 text-text-muted font-mono">40%</td>
                  <td className="p-4 md:p-6 text-text-muted">Code runs without syntax errors; hardware circuits are wired securely and logic is utilized correctly without reliance on AI.</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td className="p-4 md:p-6 font-bold flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Pedagogical Delivery</td>
                  <td className="p-4 md:p-6 text-text-muted font-mono">35%</td>
                  <td className="p-4 md:p-6 text-text-muted">Ability to explain concepts using real-world analogies suitable for an 8-12 year old audience.</td>
                </tr>
                <tr className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                  <td className="p-4 md:p-6 font-bold flex items-center gap-2"><CheckCircle2 size={16} className="text-primary"/> Project Output</td>
                  <td className="p-4 md:p-6 text-text-muted font-mono">25%</td>
                  <td className="p-4 md:p-6 text-text-muted">Completion of the Grand Expo Demo Project; fully functional and creatively tailored.</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

      </div>
    </PageTransition>
  );
};

export default Trainer;

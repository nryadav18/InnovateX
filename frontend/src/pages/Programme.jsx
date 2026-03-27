import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { ChevronDown, Code, Layout, Terminal, Gamepad2, Cpu, Radio, CheckCircle2 } from 'lucide-react';

const phasesData = [
  {
    phase: 1,
    title: 'Digital Fluency & AI',
    icon: Code,
    topics: [
      { step: 'Module 1', title: 'Introduction to Operating Systems', desc: 'Understanding file systems, basic navigation, and digital hygiene.', project: 'Navigating environments' },
      { step: 'Module 2', title: 'Typing & Shortcuts Mastery', desc: 'Proper hand placement, core shortcuts (Ctrl+C, Ctrl+V, etc).', project: 'Speed typing benchmark' },
      { step: 'Module 3', title: 'What is Generative AI?', desc: 'Exploring LLMs, image generators, and AI limitations.', project: 'AI image generation' },
      { step: 'Module 4', title: 'Prompt Engineering 101', desc: 'Crafting effective prompts, context setting, role playing.', project: 'First AI-Assisted Story' }
    ]
  },
  {
    phase: 2,
    title: 'Web Builder — HTML',
    icon: Layout,
    topics: [
      { step: 'Module 1', title: 'How the Web Works & HTML Structure', desc: 'The client-server model and the anatomy of an HTML document.', project: 'My First Web Page' },
      { step: 'Module 2', title: 'Text Formatting & Links', desc: 'Headings, paragraphs, anchors, lists, and semantic tags.', project: 'Interactive Hyperlink Tree' },
      { step: 'Module 3', title: 'Adding Images & Basic Styling', desc: 'Media tags, attributes, and an introduction to inline styling.', project: 'Personal Portfolio Webpage' }
    ]
  },
  {
    phase: 3,
    title: 'Python & Turtle Art',
    icon: Terminal,
    topics: [
      { step: 'Module 1', title: 'Intro to Python Syntax & Data Types', desc: 'Variables, integers, floats, strings, and basic math.', project: 'Simple Calculator' },
      { step: 'Module 2', title: 'Conditionals & Loops', desc: 'Boolean logic, If/Else, and repetitive tasks.', project: 'Number Guessing Game' },
      { step: 'Module 3', title: 'Introduction to Turtle Graphics', desc: 'Drawing shapes with code using the Turtle library.', project: 'Algorithmic Art Generator' }
    ]
  },
  {
    phase: 4,
    title: 'Python Apps & Games',
    icon: Gamepad2,
    topics: [
      { step: 'Module 1', title: 'Functions, Scope & Logic', desc: 'Modularizing code and managing complex state.', project: 'Custom Utilities' },
      { step: 'Module 2', title: 'Game Logic Implementation', desc: 'Grid systems, win conditions, and turn-based logic.', project: 'Tic-Tac-Toe App' },
      { step: 'Module 3', title: 'Advanced Input & Polish', desc: 'Handling edge cases and creating a polished user experience.', project: 'Text-Based Adventure Game' }
    ]
  },
  {
    phase: 5,
    title: 'Foundational Robotics',
    icon: Cpu,
    topics: [
      { step: 'Module 1', title: 'Electronics & Circuitry', desc: 'Understanding circuit loops, LEDs, resistors, and breadboards.', project: 'LED + Push Button Circuit' },
      { step: 'Module 2', title: 'Sensors & Inputs', desc: 'Gathering environmental data using tilt, magnetic, and light sensors.', project: 'Smart Doorbell System' },
      { step: 'Module 3', title: 'Motors & Physical Mechanics', desc: 'Controlling DC motors and understanding translational movement.', project: 'Motorized Concept Car' }
    ]
  },
  {
    phase: 6,
    title: 'Advanced IoT & Automation',
    icon: Radio,
    topics: [
      { step: 'Module 1', title: 'Microcontroller Logic', desc: 'Uploading software logic to hardware boards (Arduino/ESP).', project: 'Smart Traffic Light' },
      { step: 'Module 2', title: 'Autonomous Systems', desc: 'Bridging motors and sensors to create self-guiding behavior.', project: 'Line Following Robot' },
      { step: 'Module 3', title: 'Wireless Communication', desc: 'Connecting devices for remote communication and data exchange.', project: 'RFID Attendance System' },
      { step: 'Module 4', title: 'Capstone Integration', desc: 'Combining Full Stack software concepts with complex hardware.', project: 'Grand Innovation Expo' }
    ]
  }
];

const Programme = () => {
  const [expandedPhase, setExpandedPhase] = useState(1);

  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24">

        {/* Header */}
        <section className="container mx-auto px-4 md:px-8 mb-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
            Full Curriculum
          </div>
          <AnimatedText
            text="THE INNOVATEX MASTERY TRACK"
            className="text-text font-display text-5xl md:text-7xl leading-none mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block"
          />
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive, step-by-step breakdown of how we transform absolute beginners into confident technologists who build real-world software applications and fully autonomous robotic systems.
          </p>
        </section>

        {/* Timeline & Accordion */}
        <section className="container mx-auto px-4 md:px-8 max-w-5xl relative">

          {/* Vertical Golden Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-border rounded-full hidden sm:block">
            <motion.div
              className="w-full bg-primary rounded-full shadow-[0_0_15px_rgba(245,197,24,0.5)]"
              initial={{ height: "0%" }}
              animate={{ height: `${(expandedPhase / 6) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="space-y-6 sm:pl-16">
            {phasesData.map((phase) => {
              const isActive = expandedPhase === phase.phase;
              return (
                <div
                  key={phase.phase}
                  className={`bg-surface border transition-all duration-300 rounded-xl overflow-hidden ${isActive ? 'border-primary shadow-[0_5px_30px_-10px_rgba(245,197,24,0.2)]' : 'border-border hover:border-primary/50'}`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setExpandedPhase(isActive ? null : phase.phase)}
                    className="w-full p-6 md:p-8 flex items-center justify-between bg-card hover:bg-surface transition-colors focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-colors ${isActive ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-border text-text-muted'}`}>
                        <phase.icon size={28} />
                      </div>
                      <div className="text-left">
                        <h2 className="font-display text-3xl md:text-4xl text-text tracking-wide">{phase.title}</h2>
                      </div>
                    </div>
                    <ChevronDown className={`text-text-muted transition-transform duration-300 ${isActive ? 'rotate-180 text-primary' : ''}`} size={28} />
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 md:p-8 pt-0 border-t border-border mt-2 grid grid-cols-1 gap-4">
                          {phase.topics.map((topic, i) => (
                            <div key={i} className="bg-bg/50 border border-border p-5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-primary/30 transition-colors">
                              <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="font-mono text-xs font-bold bg-surface border border-border px-2 py-1 rounded text-text-muted">{topic.step}</span>
                                  <h4 className="font-sans font-bold text-text group-hover:text-primary transition-colors">{topic.title}</h4>
                                </div>
                                <p className="font-sans text-sm text-text-muted">{topic.desc}</p>
                              </div>
                              <div className="flex-shrink-0 bg-primary/5 border border-primary/20 px-4 py-2 rounded flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-primary" />
                                <span className="font-condensed text-primary uppercase text-xs tracking-wider">Project: {topic.project}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </section>
      </div>
    </PageTransition>
  );
};

export default Programme;

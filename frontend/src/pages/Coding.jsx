import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { LabImage } from '../components/ui/LabImage';
import { ChevronDown, Code, Terminal, BookOpen, Layers, Shield, Zap } from 'lucide-react';

const levelTabs = ['Flyers', 'Movers', 'Advanced', 'Proficient'];

const courseData = {
  'Flyers': [
    { id: '1.1', title: 'Computer Typing Mastery', level: 'Beginner', topics: ['Home row keys positioning', 'Posture and ergonomics', 'Speed drill basics'], projects: ['Typing Race Game'] },
    { id: '1.2', title: 'OS & Keyboard Shortcuts', level: 'Beginner', topics: ['Ctrl+C, Ctrl+V, Win+D', 'File system navigation', 'Window management tricks'], projects: ['Shortcut Ninja Assessment'] },
    { id: '1.3', title: 'Digital Drawing Basics', level: 'Beginner', topics: ['Mouse control', 'Shapes and colors', 'Digital canvas'], projects: ['My First Digital Painting'] },
    { id: '1.4', title: 'Gmail Professionality', level: 'Beginner', topics: ['Composing formal emails', 'Email etiquette & CC/BCC', 'Managing attachments'], projects: ['Drafting an Official Principal Request'] },
    { id: '1.5', title: 'MS Office Suite - Word', level: 'Beginner', topics: ['Formatting text & fonts', 'Inserting images & tables', 'Page layouts'], projects: ['School Club Newsletter Page'] },
    { id: '1.6', title: 'Safe Internet Searching', level: 'Beginner', topics: ['Search engine mechanics', 'Evaluating sources', 'Safe browsing habits'], projects: ['Research Scavenger Hunt'] }
  ],
  'Movers': [
    { id: '2.1', title: 'Cybersecurity Awareness', level: 'Intermediate', topics: ['Creating strong passwords', 'Identifying Phishing attempts', 'Privacy Settings overview'], projects: ['Privacy Audit Scorecard'] },
    { id: '2.2', title: 'Generative AI Tools Basics', level: 'Intermediate', topics: ['What is an LLM?', 'DALL-E image generation', 'Ethics of AI'], projects: ['AI Assisted Storybook Generation'] },
    { id: '2.3', title: 'MS Office Suite - PowerPoint', level: 'Intermediate', topics: ['Slide layouts', 'Transitions & animations', 'Presentation delivery'], projects: ['My Hobby Presentation'] },
    { id: '2.4', title: 'HTML & CSS Basics', level: 'Intermediate', topics: ['HTML Tags & Elements', 'Styling Text with CSS', 'The Box Model'], projects: ['Personal "About Me" Portfolio'] },
    { id: '2.5', title: 'Prompt Engineering 101', level: 'Intermediate', topics: ['Context Setting in AI', 'Roleplay Prompts', 'Iterative Refining'], projects: ['Historical Figure Chatbot Prompts'] },
    { id: '2.6', title: 'Intro to Algorithms', level: 'Intermediate', topics: ['What is an algorithm?', 'Sequential logic', 'Flowcharting'], projects: ['Peanut Butter Jelly Algorithm'] }
  ],
  'Advanced': [
    { id: '3.1', title: 'Intro to Python Programming', level: 'Advanced', topics: ['Variables & Data Types', 'Math Operations', 'Print statements & Strings'], projects: ['Interactive Text Calculator'] },
    { id: '3.2', title: 'HTML & CSS Layouts', level: 'Advanced', topics: ['CSS Flexbox basics', 'CSS Grid basics', 'Responsive Design concepts'], projects: ['Responsive Science Blog Layout'] },
    { id: '3.3', title: 'Digital Media Ethics', level: 'Advanced', topics: ['Copyright & Fair Use', 'Creative Commons', 'Plagiarism in digital age'], projects: ['Properly Cited Research Page'] },
    { id: '3.4', title: 'Python Control Flow', level: 'Advanced', topics: ['If/Else Conditional Logic', 'For Loops & Iteration', 'While Loops'], projects: ['Number Guessing Game', 'Star Pattern Generator'] },
    { id: '3.5', title: 'Cybersecurity - Deepfakes', level: 'Advanced', topics: ['Identifying generated media', 'Verification tools', 'Social impact'], projects: ['Fact-checker Toolkit Concept'] },
    { id: '3.6', title: 'Python Turtle Graphics', level: 'Advanced', topics: ['Importing modules', 'Drawing with code', 'Loop-based geometry'], projects: ['Algorithmic Mandala Generator'] }
  ],
  'Proficient': [
    { id: '4.1', title: 'Python Functions & Scope', level: 'Expert', topics: ['Defining custom functions', 'Global vs Local variables', 'Return values & Recursion'], projects: ['Custom Math Utility Library'] },
    { id: '4.2', title: 'Advanced Algorithms', level: 'Expert', topics: ['Sorting logic (Bubble, Select)', 'Searching logic (Linear, Binary)', 'Optimization basics'], projects: ['Data Sorter Visualizer Script'] },
    { id: '4.3', title: 'Building AI Assistants', level: 'Expert', topics: ['API integrations concept', 'System prompts engineering', 'Chaining prompts'], projects: ['Study Companion AI Bot Design'] },
    { id: '4.4', title: 'Python Game Development', level: 'Expert', topics: ['Game loops & Delta time', 'State management', 'User input event handling'], projects: ['Text-Based Adventure Game', 'Tic-Tac-Toe Logic'] },
    { id: '4.5', title: 'Full Stack Integration Concepts', level: 'Expert', topics: ['REST APIs & JSON data', 'Client-Server architecture', 'Frontend to Backend flow'], projects: ['Weather Data Fetcher Dashboard'] },
    { id: '4.6', title: 'Capstone Exhibition Prep', level: 'Expert', topics: ['Project compilation', 'Debugging and Polish', 'Technical presentation'], projects: ['Final Capstone Exhibition Project'] }
  ]
};

const CourseCard = ({ course }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-surface rounded-xl border border-border p-6 relative group hover:border-primary/50 transition-colors h-full flex flex-col">
      <div className="absolute top-0 right-0 p-4">
        <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded 
          ${course.level === 'Beginner' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
            course.level === 'Intermediate' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
              course.level === 'Advanced' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}
        >
          {course.level}
        </span>
      </div>

      <div className="text-text-muted font-mono font-bold text-sm mb-2">{course.id}</div>
      <h3 className="font-display text-2xl text-text mb-6 pr-20">{course.title}</h3>

      {/* Topics (Collapsed/Expanded) */}
      <div className="flex-grow">
        <div className="mb-2 font-condensed tracking-widest text-primary uppercase text-sm">Key Topics</div>
        <ul className="space-y-2 mb-6">
          {course.topics.slice(0, expanded ? course.topics.length : 2).map((topic, i) => (
            <li key={i} className="flex items-start text-sm text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 mr-2 flex-shrink-0"></span>
              {topic}
            </li>
          ))}
          {!expanded && course.topics.length > 2 && (
            <li className="text-xs text-text-muted italic ml-3">+ {course.topics.length - 2} more</li>
          )}
        </ul>
      </div>

      {/* Projects Dropdown */}
      <div className="mt-auto pt-4 border-t border-border">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-left focus:outline-none group/btn"
        >
          <span className="font-condensed tracking-widest text-text uppercase text-sm group-hover/btn:text-primary transition-colors">
            {expanded ? 'Hide Details' : 'View Projects & Details'}
          </span>
          <ChevronDown className={`text-text-muted transition-transform duration-300 ${expanded ? 'rotate-180 text-primary' : ''}`} size={18} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-2">
                <div className="mb-2 font-condensed tracking-widest text-primary uppercase text-sm">Projects Built</div>
                <div className="flex flex-wrap gap-2">
                  {course.projects.map((proj, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-text px-3 py-1.5 rounded text-xs">
                      <Code size={12} className="text-primary" />
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState(levelTabs[0]);

  // Framer motion variants for tab content replacement
  const variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>

        <section className="container mx-auto px-4 md:px-8 mb-16 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
            Software & Digital Fluency
          </div>
          <AnimatedText
            text="CODING COURSES BY LEVEL"
            className="text-text font-display text-5xl md:text-7xl leading-none mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block"
          />
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            From basic typing and digital hygiene to full-scale Python game development and API integrations, meticulously mapped to cognitive milestones.
          </p>
        </section>

        {/* Industry toolchain band */}
        <section className="container mx-auto px-4 md:px-8 mb-16 relative z-10 max-w-6xl">
          <div className="relative rounded-2xl overflow-hidden border border-border group">
            <LabImage name="DSC06637" size="lg" alt="Industry-grade software toolchain: ROS, Gazebo, OpenCV and more" className="aspect-[21/9] md:aspect-[21/7] w-full" imgClassName="group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/20" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-6 md:p-12 max-w-xl">
                <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-xs bg-primary/10 backdrop-blur-sm">
                  Real Tools, Not Toys
                </div>
                <h2 className="font-display text-3xl md:text-5xl text-text tracking-wide leading-none">
                  From First Keystroke to <span className="text-primary">Industry Frameworks</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar border-b border-border/50 mb-12 pb-px justify-start md:justify-center">
            {levelTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-4 font-display text-2xl tracking-wider transition-colors whitespace-nowrap ${isActive ? 'text-primary' : 'text-text-muted hover:text-text'}`}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="activeCousreTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full shadow-[0_0_10px_rgba(245,197,24,0.5)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {courseData[activeTab]?.map((course, i) => (
                <motion.div
                  key={course.id}
                  variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
                >
                  <GlowBorder className="h-full">
                    <CourseCard course={course} />
                  </GlowBorder>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

      </div>
    </PageTransition>
  );
};

export default Courses;

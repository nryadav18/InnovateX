import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { Cpu, Zap, Battery, Car, Lightbulb, Activity, Radio, Navigation, Building2 } from 'lucide-react';

const roboticsData = [
  { class: 'Class 3', icon: Battery, projects: ['LED + Push Button Circuit', 'Simple Door Bell', 'LED Series/Parallel', 'Battery Circuit', 'DC Fan'] },
  { class: 'Class 4', icon: Lightbulb, projects: ['RGB LED', 'Tilt Sensor', 'Door Magnet Switch', 'Water Level Alarm', 'Motor Car'] },
  { class: 'Class 5', icon: Zap, projects: ['Motor as Dynamo', 'Solar Model', 'Solar Street Light', 'Touchless Switch and Doorbell', 'RGB Control'] },
  { class: 'Class 6', icon: Activity, projects: ['Solar Tracker', 'RC Car', 'Gravity Battery', 'Power Bank', 'Smart Water Level'] },
  { class: 'Class 7', icon: Navigation, projects: ['Smart Night Lamp', 'Automatic Water Pump Controller', 'Smart Dustbin (Auto Open)', 'Car Smart Parking', 'Metal Detector'] },
  { class: 'Class 8', icon: Radio, projects: ['RFID Attendance System', 'OLED Display Interface', 'Automatic Washroom System', 'Smart Hand Gesture Control', 'Smart Helmet'] },
  { class: 'Class 9', icon: Cpu, projects: ['Automatic Plant Watering System', 'Line Following Robot', 'School Bell Timer System', 'OLED Smart Display Dashboard', 'Obstacle Avoiding Robot'] },
  { class: 'Class 10', icon: Car, projects: ['Smart Traffic Light', 'Automatic Railway Gate Control', 'Smart Waste Management', 'Smart Blind Stick', 'Smart School Bell with RTC'] },
  { class: 'Industry Level', icon: Building2, projects: ['Tesla Coil', 'NFC Smart Payment', 'Walking Robot', 'Smart Vehicle Accident Alert'] }
];

const Robotics = () => {
  return (
    <PageTransition>
      <div className="bg-bg min-h-screen pt-40 pb-24 relative overflow-hidden">

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2 "></div>
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        {/* Decorative Circuit Board Lines (CSS) */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        ></div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 mb-24 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
            The Hardware Bridge
          </div>
          <AnimatedText
            text="WHERE CODE MEETS THE PHYSICAL WORLD"
            className="text-text font-display text-5xl md:text-7xl leading-[1.1] mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] block max-w-5xl mx-auto"
          />
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Software is invisible. Robotics makes it visible. Experience the moment a child’s abstract logic suddenly becomes a physical reality driving real-world machines.
          </p>
        </section>

        {/* Projects Grid Container */}
        <section className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roboticsData.map((level, i) => (
              <motion.div
                key={level.class}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                <GlowBorder className="w-full">
                  <div className="bg-card h-full p-8 flex flex-col relative group">

                    <div className="relative z-10 flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(245,197,24,0.3)] transition-all">
                        <level.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        {level.class === 'Industry Level' ? (
                          <div className="text-xs text-primary font-bold tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]">Advanced Concept</div>
                        ) : null}
                        <h3 className="font-display text-3xl text-text tracking-wider leading-none">
                          {level.class}
                        </h3>
                      </div>
                    </div>

                    <div className="relative z-10 flex-grow">
                      <ul className="space-y-4">
                        {level.projects.map((project, j) => (
                          <li key={j} className="flex items-start group/item">
                            <span className="w-1.5 h-1.5 rounded-sm bg-primary/40 mt-1.5 mr-3 flex-shrink-0 group-hover/item:bg-primary group-hover/item:shadow-[0_0_5px_rgba(245,197,24,0.8)] transition-all"></span>
                            <span className="font-sans text-sm text-text-muted leading-relaxed group-hover/item:text-text transition-colors">
                              {project}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

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

export default Robotics;

import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { AnimatedText } from '../components/ui/AnimatedText';
import { GlowBorder } from '../components/ui/GlowBorder';
import { LabImage } from '../components/ui/LabImage';
import LabGallery from '../components/sections/LabGallery';
import { showcaseBays, componentPanels, robotShots, allImages } from '../data/labImages';
import { Cpu, Zap, Battery, Car, Lightbulb, Activity, Radio, Navigation, Building2, ArrowUpRight } from 'lucide-react';

const roboticsData = [
  { name: 'Flyers', icon: Battery, projects: ['LED + Push Button Circuit', 'Simple Door Bell', 'LED Series/Parallel', 'Battery Circuit', 'DC Fan', 'RGB LED', 'Tilt Sensor', 'Door Magnet Switch', 'Water Level Alarm', 'Motor Car'] },
  { name: 'Movers', icon: Zap, projects: ['Motor as Dynamo', 'Solar Model', 'Solar Street Light', 'Touchless Switch and Doorbell', 'RGB Control', 'Solar Tracker', 'RC Car', 'Gravity Battery', 'Power Bank', 'Smart Water Level'] },
  { name: 'Advanced', icon: Navigation, projects: ['Smart Night Lamp', 'Automatic Water Pump Controller', 'Smart Dustbin (Auto Open)', 'Car Smart Parking', 'Metal Detector', 'RFID Attendance System', 'OLED Display Interface', 'Automatic Washroom System', 'Smart Hand Gesture Control', 'Smart Helmet'] },
  { name: 'Proficient', icon: Cpu, projects: ['Automatic Plant Watering System', 'Line Following Robot', 'School Bell Timer System', 'OLED Smart Display Dashboard', 'Obstacle Avoiding Robot', 'Smart Traffic Light', 'Automatic Railway Gate Control', 'Smart Waste Management', 'Smart Blind Stick', 'Smart School Bell with RTC'] },
  { name: 'Industry Level', icon: Building2, projects: ['Tesla Coil', 'NFC Smart Payment', 'Walking Robot', 'Smart Vehicle Accident Alert'] }
];

const SectionHeading = ({ eyebrow, title, sub }) => (
  <div className="text-center mb-14 relative z-10">
    <div className="inline-block px-4 py-1.5 mb-5 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
      {eyebrow}
    </div>
    <h2 className="font-display text-4xl md:text-6xl text-text tracking-wide">{title}</h2>
    {sub && <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed mt-5">{sub}</p>}
  </div>
);

const Robotics = () => {
  return (
    <PageTransition>
      <div className="bg-bg min-h-screen relative overflow-hidden">

        {/* ================= HERO with lab photography ================= */}
        <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <LabImage
              name="DSC06507"
              size="lg"
              eager
              alt="InnovaTeX robotics lab — Think, Build, Code, Innovate wall"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/75 to-bg" />
            <div className="absolute inset-0 bg-bg/20" />
            {/* Circuit texture */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 0, transparent 50%)', backgroundSize: '22px 22px' }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center pt-40 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10 backdrop-blur-sm"
            >
              The Hardware Bridge
            </motion.div>
            <AnimatedText
              text="WHERE CODE MEETS THE PHYSICAL WORLD"
              className="text-text font-display text-5xl md:text-7xl leading-[1.1] mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] block max-w-5xl mx-auto"
            />
            <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Software is invisible. Robotics makes it visible. Experience the moment a child’s abstract logic suddenly becomes a physical reality driving real-world machines.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-condensed uppercase tracking-widest text-text-muted text-sm"
            >
              <span><span className="text-primary font-display text-2xl mr-2">40+</span>Physical Builds</span>
              <span className="hidden sm:block w-px h-5 bg-border" />
              <span><span className="text-primary font-display text-2xl mr-2">5</span>Skill Tiers</span>
              <span className="hidden sm:block w-px h-5 bg-border" />
              <span><span className="text-primary font-display text-2xl mr-2">100%</span>Hands-On</span>
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURED BUILDS (showcase bays) ================= */}
        <section className="relative py-24 md:py-28 border-t border-border">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            <SectionHeading
              eyebrow="Flagship Exhibits"
              title="Signature Builds"
              sub="Every InnovaTeX lab is anchored by showcase-grade projects — the kind students demo at the Grand Expo."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {showcaseBays.map((bay, i) => (
                <motion.div
                  key={bay.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlowBorder className="h-full">
                    <div className="group relative h-full">
                      <LabImage
                        name={bay.name}
                        size="sm"
                        alt={bay.title}
                        className="aspect-[3/4] w-full"
                        imgClassName="group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="font-condensed uppercase tracking-[0.18em] text-primary text-[10px] mb-1">{bay.tag}</div>
                        <div className="font-display text-xl md:text-2xl text-text leading-none tracking-wide">{bay.title}</div>
                      </div>
                    </div>
                  </GlowBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRESSION GRID (class projects) ================= */}
        <section className="relative py-16 md:py-24">
          <div
            className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-primary) 0, var(--color-primary) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
          />
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            <SectionHeading
              eyebrow="Flyers → Industry"
              title="The Robotics Progression"
              sub="A build for every stage — from a first blinking LED to autonomous, industry-grade systems."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roboticsData.map((level, i) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: (i % 3) * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex"
                >
                  <GlowBorder className="w-full">
                    <div className="bg-card h-full p-8 flex flex-col relative group">
                      <div className="relative z-10 flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                        <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(245,197,24,0.3)] transition-all">
                          <level.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-primary font-bold tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_rgba(245,197,24,0.5)]">
                            {level.name === 'Industry Level' ? 'Advanced Concept' : `Level ${i + 1}`}
                          </div>
                          <h3 className="font-display text-3xl text-text tracking-wider leading-none">
                            {level.name}
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
          </div>
        </section>

        {/* ================= LIVE PROJECT FEATURE (split) ================= */}
        <section className="relative py-20 md:py-28 bg-surface border-y border-border overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-block px-4 py-1.5 mb-5 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/10">
                  From Circuit to System
                </div>
                <h2 className="font-display text-4xl md:text-6xl text-text tracking-wide mb-6 leading-none">
                  Real Machines. <span className="text-primary italic">Real Physics.</span>
                </h2>
                <p className="font-sans text-text-muted text-lg leading-relaxed mb-8">
                  Students don’t simulate — they solder, wire, and debug. An automatic railway gate that senses an approaching train. A parking system that counts free bays. An arm that grips on command. This is where code stops being theory.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <LabImage name="DSC06584" size="sm" alt="Robotic arm build" className="aspect-[4/5] rounded-xl border border-border" imgClassName="hover:scale-105" />
                  <LabImage name="DSC06567" size="sm" alt="Otto biped robot" className="aspect-[4/5] rounded-xl border border-border" imgClassName="hover:scale-105" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4"
              >
                <GlowBorder>
                  <LabImage name="DSC06644" size="lg" alt="Automatic railway gate project glowing in the lab" className="aspect-[16/10] w-full" imgClassName="hover:scale-105" />
                </GlowBorder>
                <div className="grid grid-cols-2 gap-4">
                  <GlowBorder>
                    <LabImage name="DSC06632" size="sm" alt="Autonomous robot car full build" className="aspect-[4/3] w-full" imgClassName="hover:scale-105" />
                  </GlowBorder>
                  <GlowBorder>
                    <LabImage name="DSC06562" size="sm" alt="Smart parking working model track" className="aspect-[4/3] w-full" imgClassName="hover:scale-105" />
                  </GlowBorder>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= THE COMPONENTS ================= */}
        <section className="relative py-24 md:py-28">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            <SectionHeading
              eyebrow="The Building Blocks"
              title="Hardware They Master"
              sub="Microcontrollers, displays and a full sensor suite — the same components used in real industry."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {componentPanels.filter((c) => c.orient === 'portrait').map((panel, i) => (
                <motion.div
                  key={panel.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlowBorder className="h-full">
                    <div className="group relative h-full">
                      <LabImage
                        name={panel.name}
                        size="sm"
                        alt={panel.title}
                        className="aspect-[4/5] w-full"
                        imgClassName="group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                        <div>
                          <div className="font-condensed uppercase tracking-[0.18em] text-primary text-[11px] mb-1">{panel.tag}</div>
                          <div className="font-display text-2xl text-text leading-none tracking-wide">{panel.title}</div>
                        </div>
                        <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                      </div>
                    </div>
                  </GlowBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INSIDE THE LAB (full gallery) ================= */}
        <section className="relative py-24 md:py-28 bg-surface border-t border-border">
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            <SectionHeading
              eyebrow="Photo Gallery"
              title="Inside the InnovaTeX Lab"
              sub="Tap any frame to explore. Every image is a real build from a real classroom."
            />
            <LabGallery items={allImages} />
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Robotics;

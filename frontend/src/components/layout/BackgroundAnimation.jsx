import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Terminal, Bot, Cpu, Keyboard, Sparkles, FileCode2, ShieldAlert } from 'lucide-react';

const MOTTOS = [
  { text: "Python Coding", icon: Terminal },
  { text: "Robotics", icon: Bot },
  { text: "Automation", icon: Cpu },
  { text: "Computer Typing", icon: Keyboard },
  { text: "Generative AI", icon: Sparkles },
  { text: "HTML", icon: FileCode2 },
  { text: "Cyber Security", icon: ShieldAlert }
];

const BackgroundAnimation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Generate items on client side to avoid purity/hydration issues
    const generatedItems = Array.from({ length: 25 }).map((_, i) => {
      const motto = MOTTOS[i % MOTTOS.length];
      return {
        id: i,
        text: motto.text,
        Icon: motto.icon,
        top: Math.random() * 100, // percentages for top
        duration: 30 + Math.random() * 40, // very slow: 30-70s
        delay: -(Math.random() * 70), // Negative delay so they are scattered already
        size: 1.5 + Math.random() * 2, // rem
        opacity: 0.1 + Math.random() * 0.15, // boosted opacity (10% to 25%)
      };
    });
    setItems(generatedItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
      {/* Floating texts with Icons */}
      {items.map((item) => {
        const IconComponent = item.Icon;
        return (
          <motion.div
            key={item.id}
            className="absolute flex items-center gap-3 whitespace-nowrap text-[#F5C518] font-bold uppercase tracking-widest select-none"
            style={{
              top: `${item.top}%`,
              fontSize: `${item.size}rem`,
              opacity: item.opacity,
            }}
            initial={{ x: '-50vw' }} // Start left off-screen
            animate={{ x: '150vw' }} // Move right past screen
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "linear",
              delay: item.delay,
            }}
          >
            <IconComponent size={`${item.size + 0.5}rem`} className="opacity-80" />
            <span>{item.text}</span>
          </motion.div>
        );
      })}

      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_100%)] opacity-80" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;

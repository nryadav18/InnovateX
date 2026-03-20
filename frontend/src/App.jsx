import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Bot, Cpu, ShieldCheck } from 'lucide-react';
import './index.css';

import logo from './assets/InnovateX_logo.png';

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Use string array because emojis can have multiple codepoints
    const characters = ['0', '1', '</>', '🤖', '💻', '⚙️', '🔒', '🚀', '🧠'];
    const fontSize = 18;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 215, 0, 0.4)'; // Golden yellow
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="matrix-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.6,
      }}
    />
  );
};

const features = [
  { icon: Code, text: "Coding", color: "#64ffda" },
  { icon: Bot, text: "Robotics", color: "#ff8a65" },
  { icon: Cpu, text: "Generative AI", color: "#b388ff" },
  { icon: ShieldCheck, text: "Cybersecurity", color: "#ffb74d" }
];

function App() {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const FeatureIcon = features[currentFeature].icon;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>

      {/* Background Matrix Effect */}
      <MatrixRain />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <motion.img
          src={logo}
          alt="InnovateX Logo"
          style={{ width: '350px', marginBottom: '2rem' }}
          whileHover={{ scale: 1.05 }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1
          className="glow-text"
          style={{ color: 'var(--color-accent)', fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          style={{ color: 'var(--color-text-dark)', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '600px', lineHeight: '1.6' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Binary Minds, Bright Futures. Something Exciting is Coming Soon.
        </motion.p>

        {/* Dynamic Features Showcase */}
        <div style={{ height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid rgba(255,215,0,0.1)' }}
            >
              <FeatureIcon size={32} color={features[currentFeature].color} />
              <span style={{ fontSize: '1.5rem', fontWeight: '500', color: 'var(--color-text-light)' }}>
                {features[currentFeature].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Footer / Decorations */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', color: 'var(--color-text-dark)', fontSize: '0.9rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        © {new Date().getFullYear()} InnovateX. All rights reserved.
      </motion.div>

    </div>
  );
}

export default App;

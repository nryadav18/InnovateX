import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../ui/Button';
import { AnimatedText } from '../ui/AnimatedText';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true); // browsers only allow muted autoplay

  // Kick off playback and try to enable sound on the visitor's first interaction
  // (unmuted autoplay is blocked until a user gesture occurs).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});

    const enableSound = () => {
      if (!videoRef.current) return;
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play().catch(() => {});
      setMuted(false);
      remove();
    };
    const remove = () => {
      ['pointerdown', 'keydown', 'touchstart', 'wheel'].forEach((e) =>
        window.removeEventListener(e, enableSound)
      );
    };
    ['pointerdown', 'keydown', 'touchstart', 'wheel'].forEach((e) =>
      window.addEventListener(e, enableSound, { once: true, passive: true })
    );
    return remove;
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) {
      v.volume = 1;
      v.play().catch(() => {});
    }
    setMuted(v.muted);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-20">
      {/* Intro video backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/Innovatex_Intro.mp4"
          poster="/robotics/DSC06515.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Cinematic scrim: darker top (navbar) & bottom (headline + section blend), lighter middle so the film shows through */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/75 via-bg/45 to-bg" />
        <div className="absolute inset-0 bg-bg/20" />
      </div>

      {/* Animated Golden Grid Background */}
      <div className="absolute inset-0 opacity-[0.12] z-0 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(var(--color-primary-dim) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-dim) 1px, transparent 1px)',
             backgroundSize: '80px 80px',
             backgroundPosition: 'center center'
           }}
      >
        <motion.div
          animate={{ y: [0, 80] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-block border border-primary text-primary px-5 py-2 rounded-full text-sm sm:text-base tracking-[0.3em] font-condensed uppercase bg-bg/50 backdrop-blur-sm shadow-[0_0_15px_rgba(245,197,24,0.3)]"
        >
          Coding <span className="mx-2 opacity-50">•</span> Robotics <span className="mx-2 opacity-50">•</span> AI
        </motion.div>

        <AnimatedText
          text="OUR TINY TOTS"
          className="text-primary font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none mb-1 tracking-wider drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          delay={0.4}
        />

        <AnimatedText
          text="STAND OUT"
          className="text-text font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none mb-8 tracking-wider drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          delay={1.2}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-muted font-sans text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          Binary Minds | Bright Futures — equipping Students with real technology skills through hands-on school programmes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Button to="/schools" variant="primary" className="w-full sm:w-auto text-lg py-5 px-10">
            Partner With Us
          </Button>
          <Button to="/programme" variant="outline" className="w-full sm:w-auto text-lg py-5 px-10">
            Explore Programme
          </Button>
        </motion.div>
      </div>

      {/* Sound toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={toggleMute}
        aria-label={muted ? 'Unmute intro video' : 'Mute intro video'}
        className="absolute bottom-10 right-6 md:right-10 z-20 flex items-center gap-2 rounded-full border border-primary/40 bg-bg/60 backdrop-blur-sm px-4 py-2.5 text-primary hover:border-primary hover:bg-bg/80 transition-colors shadow-[0_0_15px_rgba(245,197,24,0.2)]"
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        <span className="font-condensed uppercase tracking-widest text-xs hidden sm:inline">
          {muted ? 'Tap for sound' : 'Sound on'}
        </span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary cursor-pointer z-20"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={40} className="drop-shadow-[0_0_10px_rgba(245,197,24,0.5)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

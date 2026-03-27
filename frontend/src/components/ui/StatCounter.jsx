import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export const StatCounter = ({ from = 0, to, suffix = "", duration = 2, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(from, {
    mass: 1,
    stiffness: 75,
    damping: 20,
    duration: duration * 1000
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(to);
    }
  }, [isInView, springValue, to]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{displayValue}</motion.span>{suffix}
    </span>
  );
};

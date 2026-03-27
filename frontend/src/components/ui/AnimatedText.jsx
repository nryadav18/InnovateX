import { motion } from 'framer-motion';

export const AnimatedText = ({ text, el: Wrapper = 'h1', className, delay = 0 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    })
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    hidden: { opacity: 0, y: 40 }
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-flex mr-[0.2em]">
            <motion.span variants={child}>{word}</motion.span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import LabGallery from './LabGallery';
import { galleryHighlights } from '../../data/labImages';

const LabShowcaseSection = () => {
  return (
    <section className="py-24 bg-bg relative overflow-hidden border-t border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/30 text-primary uppercase font-condensed tracking-widest text-sm bg-primary/5">
            Real Classrooms · Real Builds
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-text">Inside the InnovaTeX Lab</h2>
          <p className="font-sans text-text-muted text-lg mt-6 max-w-2xl mx-auto">
            Not renders. Not stock photos. These are the actual robots, circuits and exhibits our students design, build and demo.
          </p>
        </motion.div>

        <LabGallery items={galleryHighlights} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="flex justify-center mt-14"
        >
          <Button to="/robotics" variant="outline" className="text-lg py-5 px-10">
            Explore the Robotics Lab
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default LabShowcaseSection;

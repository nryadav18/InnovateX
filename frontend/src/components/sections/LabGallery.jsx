import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { LabImage } from '../ui/LabImage';
import { Lightbox } from '../ui/Lightbox';

/**
 * Masonry photo grid with an integrated lightbox. Portrait + landscape shots flow
 * naturally via CSS columns, staying fully responsive (2 → 3 → 4 columns).
 */
const aspectFor = (orient) =>
  orient === 'portrait' ? 'aspect-[3/4]' : orient === 'square' ? 'aspect-square' : 'aspect-[4/3]';

const LabGallery = ({ items, className = '' }) => {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className={`columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 ${className}`}>
        {items.map((item, i) => (
          <motion.button
            key={item.name}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group mb-4 md:mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-card text-left focus:outline-none focus:ring-2 focus:ring-primary/60"
          >
            <div className="relative">
              <LabImage
                name={item.name}
                size="sm"
                alt={item.title}
                className={`w-full ${aspectFor(item.orient)}`}
                imgClassName="group-hover:scale-105"
              />
              {/* gradient + caption reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="font-condensed uppercase tracking-[0.2em] text-primary text-[11px] mb-0.5">{item.tag}</div>
                <div className="font-display text-xl text-text leading-tight tracking-wide">{item.title}</div>
              </div>
              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-bg/60 border border-border/60 backdrop-blur-sm flex items-center justify-center text-text opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox items={items} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </>
  );
};

export default LabGallery;

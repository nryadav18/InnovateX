import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { img } from '../../data/labImages';

/**
 * Full-screen lightbox for browsing lab photos. Controlled via `index` (null = closed).
 * Supports keyboard (Esc / ← / →) and click-to-dismiss on the backdrop.
 */
export const Lightbox = ({ items, index, onClose, onNavigate }) => {
  const open = index !== null && index !== undefined;

  const go = useCallback(
    (dir) => {
      if (!open) return;
      const next = (index + dir + items.length) % items.length;
      onNavigate(next);
    },
    [open, index, items.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, go]);

  const current = open ? items[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 backdrop-blur-md p-4 md:p-10"
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full border border-border bg-surface/80 text-text flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <X size={22} />
          </button>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous"
            className="absolute left-3 md:left-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-border bg-surface/80 text-text flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next"
            className="absolute right-3 md:right-8 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-border bg-surface/80 text-text flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={26} />
          </button>

          {current && (
            <motion.figure
              key={current.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full flex flex-col items-center"
            >
              <img
                src={img(current.name)}
                alt={current.title}
                className="max-h-[78vh] w-auto max-w-full object-contain rounded-lg border border-border shadow-[0_0_60px_rgba(0,0,0,0.6)]"
              />
              <figcaption className="mt-5 text-center">
                <span className="font-display text-3xl text-text tracking-wide">{current.title}</span>
                {current.tag && (
                  <span className="block mt-1 font-condensed uppercase tracking-[0.25em] text-primary text-sm">
                    {current.tag}
                  </span>
                )}
                <span className="block mt-2 font-mono text-xs text-text-muted">
                  {index + 1} / {items.length}
                </span>
              </figcaption>
            </motion.figure>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;

import { cn } from '../../utils/cn';
import { img, thumb } from '../../data/labImages';

/**
 * Responsive, lazy-loaded lab photograph.
 * - `size="sm"` (700px) for grids/thumbnails, `size="lg"` (1600px) for heroes/lightbox.
 * - The shimmer placeholder sits *behind* the image, and the image itself is always
 *   rendered (never opacity-gated on a JS load event) so it can't get stuck hidden when
 *   the browser serves it from cache. The placeholder simply shows through until the
 *   photo's pixels paint over it.
 */
export const LabImage = ({ name, size = 'sm', alt = '', className, imgClassName, eager = false }) => {
  const src = size === 'lg' ? img(name) : thumb(name);

  return (
    <div className={cn('relative overflow-hidden bg-surface', className)}>
      {/* shimmer placeholder (behind the image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-card to-bg animate-pulse" />
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'relative h-full w-full object-cover transition-transform duration-700 ease-out',
          imgClassName
        )}
      />
    </div>
  );
};

export default LabImage;

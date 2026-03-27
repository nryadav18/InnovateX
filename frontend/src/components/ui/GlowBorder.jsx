import { cn } from '../../utils/cn';

export const GlowBorder = ({ children, className }) => {
  return (
    <div className={cn("group relative rounded-xl bg-surface p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(245,197,24,0.3)]", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-border to-border group-hover:from-primary group-hover:to-primary-dim transition-colors duration-500 rounded-xl"></div>
      <div className="relative h-full bg-card rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

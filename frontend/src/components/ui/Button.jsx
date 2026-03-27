import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export const Button = ({ children, variant = "primary", className, to, onClick, type = "button", ...props }) => {
  const baseStyles = "group relative overflow-hidden inline-flex items-center justify-center font-sans font-bold uppercase tracking-wider px-8 py-4 transition-all duration-300 rounded-sm";
  
  const variantStyles = {
    primary: "bg-primary text-bg",
    outline: "border border-primary text-primary",
  };

  const hoverEffect = variant === 'outline' 
    ? "absolute inset-0 w-0 bg-primary transition-all duration-[400ms] ease-out group-hover:w-full"
    : "absolute inset-0 w-0 bg-white transition-all duration-[400ms] ease-out group-hover:w-full";
  
  const textStyles = variant === 'outline'
    ? "relative z-10 text-primary group-hover:text-bg transition-colors duration-300"
    : "relative z-10 text-bg group-hover:text-bg transition-colors duration-300";

  const Content = () => (
    <>
      <span className={hoverEffect} aria-hidden="true"></span>
      <span className={textStyles}>{children}</span>
    </>
  );

  const mergedClass = cn(baseStyles, variantStyles[variant], className);

  if (to) {
    return (
      <Link to={to} className={mergedClass} {...props}>
        <Content />
      </Link>
    );
  }

  return (
    <button type={type} className={mergedClass} onClick={onClick} {...props}>
      <Content />
    </button>
  );
};

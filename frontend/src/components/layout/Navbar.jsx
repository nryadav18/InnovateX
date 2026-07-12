import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import Logo from '../../assets/InnovateX_logo.png'
import { useLenis } from 'lenis/react';

const navLinks = [
  { name: 'Programme', path: '/programme' },
  { name: 'Coding', path: '/coding' },
  { name: 'Robotics', path: '/robotics' },
  { name: 'Trainer', path: '/trainer' },
  { name: 'Book', path: '/book' },
  // { name: 'For Schools', path: '/schools' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lenis = useLenis();

  const handleScrollTop = () => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-[padding,background-color,border-color,box-shadow] duration-300 transform-gpu ${(isScrolled || mobileMenuOpen) ? 'bg-[#0A0D1A]/80 backdrop-blur-lg py-4 border-b border-border shadow-lg' : 'bg-transparent py-6 border-b border-transparent shadow-none'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleScrollTop} className="flex flex-col z-50">
            <div className="text-3xl font-display font-bold tracking-wider text-text">
              <img src={Logo} alt="InnovateX_Logo" style={{ width: '250px', height: '80px' }} />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleScrollTop}
                  className="relative group font-display tracking-widest text-lg md:text-xl text-text hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            {/* <Button to="/schools" variant="primary">Partner With Us</Button> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden z-50 text-text hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0A0D1A]/60 backdrop-blur-2xl z-40 flex flex-col pt-32 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => {
                      handleScrollTop();
                      setMobileMenuOpen(false);
                    }}
                    className="font-display text-4xl tracking-widest text-text hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
              >
                <Button to="/schools" variant="primary" className="w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                  Partner With Us
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

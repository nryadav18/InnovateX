import { Link } from 'react-router-dom';
import { Globe, Tv, MessageSquare, Terminal, ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';

const Footer = () => {
  const lenis = useLenis();
  const handleScrollTop = () => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  };
  const links = [
    { name: 'About Us', path: '/about' },
    { name: 'The Programme', path: '/programme' },
    { name: 'Coding', path: '/coding' },
    { name: 'Robotics Lab', path: '/robotics' },
    { name: 'Trainer Training', path: '/trainer' },
    { name: 'Student Book', path: '/book' },
    { name: 'For Schools', path: '/schools' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-bg border-t border-primary relative overflow-hidden mt-20">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 */}
          <div className="space-y-6">
            <Link to="/" onClick={handleScrollTop} className="inline-block">
              <div className="text-4xl font-display font-bold tracking-wider text-text">
                InnovaTe <span className="text-primary italic">X</span>
              </div>
              <div className="text-xs text-text-muted uppercase tracking-widest mt-1">
                Binary Minds | Bright Futures
              </div>
            </Link>
            <p className="text-text-muted font-sans text-sm leading-relaxed">
              Equipping every school student with Coding, Robotics, and AI skills through hands-on, curriculum-aligned learning. Where ideas become real, moving things.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-condensed text-2xl text-text uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={handleScrollTop} className="text-text-muted hover:text-primary transition-colors font-sans text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-condensed text-2xl text-text uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-text-muted font-sans text-sm">
              <li className="leading-relaxed">
                <span className="font-bold text-text">Headquarters:</span><br />
                65-5-1/C, opp. GPT College,<br />
                G.P.T. Colony, Kakanada,<br />
                Andhra Pradesh – 533003
              </li>
              <li>
                <span className="font-bold text-text">Tel:</span> +91 – 980966 3999, 4999
              </li>
              <li>
                <span className="font-bold text-text">Email:</span> support@innovatex.global
              </li>
              <li>
                <span className="font-bold text-text">Web:</span> www.innovatex.global
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-condensed text-2xl text-text uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex space-x-4 mb-8">
              {[Globe, Tv, MessageSquare, Terminal].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Link" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text hover:bg-primary hover:text-bg hover:border-primary transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <h4 className="font-condensed text-lg text-text uppercase tracking-wider mb-4">Newsletter</h4>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors placeholder:text-border"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-2 bottom-2 bg-primary text-bg px-3 rounded hover:bg-primary-dim transition-colors flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#050810] py-4 border-t border-border border-opacity-30">
        <div className="container mx-auto px-4 md:px-8 text-center text-text-muted text-xs font-sans">
          Copyright © 2026 InnovaTeX | All Rights Reserved | Kakanada, Andhra Pradesh
        </div>
      </div>
    </footer>
  );
};

export default Footer;

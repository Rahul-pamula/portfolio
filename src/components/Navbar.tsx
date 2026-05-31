import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset adjustment

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -offset, duration: 1.2 });
      } else {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/75 backdrop-blur-lg border-b border-slate-100/80 shadow-premium py-3.5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => { 
            e.preventDefault(); 
            const lenis = (window as any).lenis;
            if (lenis) lenis.scrollTo(0, { duration: 1.2 });
            else window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
          className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-slate-900 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-premium flex items-center justify-center text-white font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform duration-300">
            RP
          </span>
          <span className="relative overflow-hidden block">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">Rahul Pamula</span>
            <span className="absolute inset-0 block text-brand-start translate-y-full transition-transform duration-300 group-hover:translate-y-0">Rahul Pamula</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`relative py-1.5 px-1 text-sm font-medium transition-colors duration-300 hover:text-slate-900 ${
                  activeSection === link.id ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSectionUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-premium rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleScrollTo('contact')}
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/10 active:scale-95 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-premium-hover py-6 px-6 border-t border-slate-100 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`text-left text-base py-2 font-medium transition-colors border-b border-slate-50 ${
                  activeSection === link.id ? 'text-brand-start font-semibold' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl bg-gradient-premium text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

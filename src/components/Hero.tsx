import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const command = "$ woami";

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let i = 0;
    const typeCommand = () => {
      if (i < command.length) {
        setTypedText(command.slice(0, i + 1));
        i++;
        timeoutId = setTimeout(typeCommand, 150);
      } else {
        timeoutId = setTimeout(() => setShowOutput(true), 500);
      }
    };
    timeoutId = setTimeout(typeCommand, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent">
      {/* Sleek Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-start/10 via-[#050305]/0 to-[#050305]/0 pointer-events-none" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-start/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-end/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center">
        {/* Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#0a0508] rounded-xl border border-brand-start/20 shadow-[0_0_40px_rgba(225,29,72,0.15)] overflow-hidden flex flex-col pointer-events-auto relative"
        >
          {/* Subtle red glow around the terminal */}
          <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(225,29,72,0.05)] pointer-events-none"></div>

          {/* Terminal Header */}
          <div className="h-10 border-b border-brand-start/10 flex items-center px-4 bg-[#0d070b]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-[11px] font-mono text-gray-500 pr-12">
              memory_console - zsh
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base min-h-[360px] flex flex-col">
            <div className="text-gray-300">
              <span className="text-brand-start font-bold">{typedText}</span>
              {!showOutput && <span className="animate-pulse w-2.5 h-5 bg-brand-start inline-block ml-2 align-middle"></span>}
            </div>
            
            {showOutput && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 space-y-6"
              >
                <div>
                  <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-2">
                    Rahul Pamula
                  </h1>
                  <span className="inline-block bg-gradient-premium bg-clip-text text-transparent font-bold text-xl">
                    AI & Backend Engineer
                  </span>
                </div>
                
                <p className="text-gray-400 max-w-2xl font-sans leading-relaxed">
                  Architecting intelligent systems and high-performance backends that deliver measurable, real-world impact. Currently focused on scalable AI pipelines and zero-trust architectures.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 font-sans mt-auto">
                  <button
                    onClick={() => handleScrollTo('projects')}
                    className="group flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-brand-start/10 border border-brand-start/30 text-brand-start font-semibold hover:bg-brand-start/20 hover:shadow-glow-red active:scale-[0.98] transition-all duration-300"
                  >
                    Explore My Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  
                  <a
                    href="/RAHUL_RESUME.pdf"
                    download="RAHUL_RESUME.pdf"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 active:scale-[0.98] transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                  
                  <a
                    href="mailto:pamularahul123@gmail.com?subject=Let's%20Work%20Together"
                    className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-brand-start text-white font-bold hover:bg-brand-start/90 hover:shadow-glow-red active:scale-[0.98] transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Hire Me
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-brand-start/50 font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-start/50 to-transparent" />
      </motion.div>
    </section>
  );
}


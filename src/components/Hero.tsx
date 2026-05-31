import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Parallax values for mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms for decorative layers and content
  const bgX = useTransform(mouseX, [-400, 400], [-15, 15]);
  const bgY = useTransform(mouseY, [-400, 400], [-15, 15]);
  const contentX = useTransform(mouseX, [-400, 400], [-5, 5]);
  const contentY = useTransform(mouseY, [-400, 400], [-5, 5]);

  useEffect(() => {
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = clientX - innerWidth / 2;
      const y = clientY - innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMoveGlobal);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = Math.min(45, Math.floor((width * height) / 25000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
      });
    }

    let mouseLocal = { x: -1000, y: -1000 };

    const handleMouseMoveLocal = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseLocal.x = e.clientX - rect.left;
      mouseLocal.y = e.clientY - rect.top;
    };

    const handleMouseLeaveLocal = () => {
      mouseLocal.x = -1000;
      mouseLocal.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMoveLocal, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeaveLocal, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.fillStyle = 'rgba(79, 140, 255, 0.16)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Line to mouse cursor
        if (mouseLocal.x > -1000) {
          const dx = p1.x - mouseLocal.x;
          const dy = p1.y - mouseLocal.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(0, 198, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseLocal.x, mouseLocal.y);
            ctx.stroke();
          }
        }

        // Lines between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(79, 140, 255, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMoveLocal);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScrollTo = (id: string) => {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Decorative ambient background glows with mouse parallax */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-100/40 opacity-30 blur-[100px] pointer-events-none" 
      />
      <motion.div 
        style={{ x: useTransform(mouseX, [-400, 400], [15, -15]), y: useTransform(mouseY, [-400, 400], [15, -15]) }}
        className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-cyan-100/50 opacity-40 blur-[120px] pointer-events-none" 
      />
      
      {/* Interactive Particle Network Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto opacity-70"
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <motion.div 
        style={{ x: contentX, y: contentY }}
        className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center pointer-events-none"
      >
        {/* Soft Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/60 text-blue-600 text-xs font-semibold mb-8 shadow-sm pointer-events-auto backdrop-blur-sm"
        >
          <Terminal className="w-3.5 h-3.5 animate-pulse" />
          <span>Scale · AI · Backend Systems</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6 pointer-events-auto"
        >
          Rahul Pamula
          <span className="block mt-2 text-gradient">
            AI & Backend Engineer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl font-normal leading-relaxed mb-10 pointer-events-auto"
        >
          I design and build scalable backend systems, high-performance database schemas, and AI-powered applications that deliver measurable real-world impact.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto pointer-events-auto"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-premium text-white font-semibold shadow-md hover:shadow-[0_0_20px_rgba(79,140,255,0.4)] active:scale-[0.97] hover:scale-[1.02] transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          
          <a
            href="/RAHUL_RESUME.pdf"
            download="RAHUL_RESUME.pdf"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-350 hover:shadow-[0_0_15px_rgba(0,198,255,0.15)] hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>

          <a
            href="mailto:pamularahul123@gmail.com?subject=Let's%20Work%20Together"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 hover:shadow-[0_0_15px_rgba(17,24,39,0.3)] hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
        </motion.div>

        {/* Floating tech highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex flex-wrap gap-x-8 gap-y-4 justify-center text-sm font-semibold text-slate-400 pointer-events-auto"
        >
          <div className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            FastAPI & FastAPI Async
          </div>
          <div className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            NLP & Multimodal AI
          </div>
          <div className="flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            PostgreSQL & Multi-tenancy
          </div>
          <div className="flex items-center gap-2 hover:text-emerald-500 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Docker & Cloud DevOps
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

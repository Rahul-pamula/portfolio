import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { MessageSquare, Target, Cpu, HardDrive } from 'lucide-react';

function Counter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) {
      return (latest / 1000000).toFixed(1) + 'M';
    }
    return Math.floor(latest).toLocaleString();
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  useEffect(() => {
    return rounded.on('change', (v) => setDisplayValue(v));
  }, [rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function Metrics() {
  const stats = [
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
      label: "Messages Processed",
      value: 1200000,
      suffix: "+",
    },
    {
      icon: <Target className="w-5 h-5 text-cyan-500" />,
      label: "NLP Accuracy",
      value: 96,
      suffix: "%",
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      label: "APIs Built",
      value: 15,
      suffix: "+",
    },
    {
      icon: <HardDrive className="w-5 h-5 text-emerald-500" />,
      label: "Systems Deployed",
      value: 8,
      suffix: "+",
    },
  ];

  return (
    <section className="relative -mt-12 z-20 max-w-5xl mx-auto px-6 md:px-12 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/85 backdrop-blur-md rounded-3xl border border-slate-100/90 shadow-[0_15px_50px_rgba(0,0,0,0.04)] p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 pointer-events-auto hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-shadow duration-500"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center p-2 group">
            <div className="w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center mb-3.5 border border-slate-100/80 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
              <div className="group-hover:animate-pulse">
                {stat.icon}
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              <Counter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5 transition-colors duration-300 group-hover:text-slate-500">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

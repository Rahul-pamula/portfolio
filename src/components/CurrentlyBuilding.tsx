import { motion } from 'framer-motion';
import { Hammer, Sparkles } from 'lucide-react';

export default function CurrentlyBuilding() {
  const currentBuilds = [
    {
      title: "Civic App",
      desc: "Building a platform to drive local community engagement and issue tracking with real-time sync.",
      status: "Active Development",
      icon: <Hammer className="w-4 h-4 text-brand-start" />,
      color: "border-white/5 hover:border-brand-start/30 hover-glow-red",
      hoverColor: "group-hover:text-brand-start"
    },
    {
      title: "Design System UI",
      desc: "Architecting a comprehensive component library with Framer Motion for highly interactive enterprise dashboards.",
      status: "Active Development",
      icon: <Sparkles className="w-4 h-4 text-brand-end" />,
      color: "border-white/5 hover:border-brand-end/30 hover-glow-red",
      hoverColor: "group-hover:text-brand-end"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0508] relative z-10">
      {/* Subtle top section border separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-10">
          {/* Pulsing blinking live dot indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-start opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-start shadow-[0_0_10px_rgba(225,29,72,0.8)]"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-start">
            Currently Building (Live Status)
          </span>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {currentBuilds.map((build, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, scale: 1.015 }}
              className={`card-premium glass-panel p-6 border ${build.color} transition-all duration-300 flex flex-col justify-between group cursor-default`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#050305] border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-white/20 transition-all duration-300">
                    {build.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-start/10 border border-brand-start/20 text-brand-start uppercase tracking-wider backdrop-blur-sm">
                    {build.status}
                  </span>
                </div>
                <h3 className={`text-base font-bold font-display text-white mb-2 transition-colors duration-300 ${build.hoverColor}`}>
                  {build.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {build.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

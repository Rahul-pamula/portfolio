import { motion } from 'framer-motion';
import { Hammer, Sparkles } from 'lucide-react';

export default function CurrentlyBuilding() {
  const currentBuilds = [
    {
      title: "Civic App",
      desc: "Building a platform to drive local community engagement with interactive mapping and issue reporting features.",
      status: "Active Development",
      icon: <Hammer className="w-4 h-4 text-emerald-500" />,
      color: "border-emerald-100 hover:border-emerald-200/80 hover:shadow-emerald-500/5",
    },
    {
      title: "Chatnalyxer v2",
      desc: "Upgrading real-time message processor to support multi-channel integrations and offline parsing caching schemas.",
      status: "Active Development",
      icon: <Sparkles className="w-4 h-4 text-blue-500" />,
      color: "border-blue-100 hover:border-blue-200/80 hover:shadow-blue-500/5",
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Subtle top section border separator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-10">
          {/* Pulsing blinking live dot indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {currentBuilds.map((build, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4, scale: 1.015 }}
              className={`bg-slate-50/30 p-6 rounded-2xl border ${build.color} shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group cursor-default`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {build.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50/60 border border-emerald-100/50 text-emerald-700 uppercase tracking-wider">
                    {build.status}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {build.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
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

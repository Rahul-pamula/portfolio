import { motion } from 'framer-motion';
import { Cpu, Server, ShieldCheck, Database } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Server className="w-6 h-6 text-brand-start" />,
      title: "Scalable Architecture",
      desc: "Designing decoupled, asynchronous backend services using FastAPI and message queue systems to handle concurrent workloads smoothly."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-end" />,
      title: "Natural Language Processing",
      desc: "Integrating Azure AI Services and Custom NLP algorithms for parsing, extracting, and processing structured information from multimodal inputs."
    },
    {
      icon: <Database className="w-6 h-6 text-brand-start" />,
      title: "Multi-tenant Databases",
      desc: "Modeling secure and performant PostgreSQL database structures using SQLAlchemy ORM with multi-tenancy support and optimized indexing."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-end" />,
      title: "Production Uptime",
      desc: "Deploying automated pipelines via CI/CD, configuring Docker containers, and maintaining high availability across Render/AWS deployments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#030102] relative overflow-hidden z-10">
      {/* Subtle details */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-end/10 via-[#070707]/0 to-[#070707]/0 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Core Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold uppercase tracking-wider text-brand-start mb-3 block"
            >
              ENGINEERING PHILOSOPHY
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight mb-6"
            >
              Building systems designed for performance, resilience, and growth.
            </motion.h2>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                }
              }}
              className="space-y-4 text-gray-400 text-base leading-relaxed"
            >
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                I am a product-minded systems engineer specializing in backend infrastructures and AI integrations. I build robust APIs, architect clean database structures, and engineer data processing pipelines that convert raw complex payloads into structured database records.
              </motion.p>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                Whether it is building custom multi-tenant CRM systems or orchestrating NLP pipelines that achieve 96% accuracy under strict production workloads, my focus is always on writing testable code, optimizing response times, and ensuring system maintainability.
              </motion.p>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                I collaborate closely with product teams to build clean technical foundations, leveraging modern tools like Docker, Git Actions, and AWS to maintain complete visibility and deploy continuously with confidence.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column - Skill Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.015 }}
                className={`card-premium glass-panel p-6 cursor-default group ${
                  idx === 0 ? 'hover-glow-red' :
                  idx === 1 ? 'hover:shadow-[0_0_30px_rgba(76,29,149,0.15)] hover:border-[rgba(76,29,149,0.3)]' :
                  idx === 2 ? 'hover-glow-red' :
                  'hover:shadow-[0_0_30px_rgba(76,29,149,0.15)] hover:border-[rgba(76,29,149,0.3)]'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 group-hover:border-white/20 transition-all duration-350 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-start transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

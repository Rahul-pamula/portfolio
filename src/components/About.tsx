import { motion } from 'framer-motion';
import { Cpu, Server, ShieldCheck, Database } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: "Scalable Architecture",
      desc: "Designing decoupled, asynchronous backend services using FastAPI and message queue systems to handle concurrent workloads smoothly."
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      title: "Natural Language Processing",
      desc: "Integrating Azure AI Services and Custom NLP algorithms for parsing, extracting, and processing structured information from multimodal inputs."
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      title: "Multi-tenant Databases",
      desc: "Modeling secure and performant PostgreSQL database structures using SQLAlchemy ORM with multi-tenancy support and optimized indexing."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Production Uptime",
      desc: "Deploying automated pipelines via CI/CD, configuring Docker containers, and maintaining high availability across Render/AWS deployments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle details */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Core Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              Building systems designed for performance, resilience, and growth.
            </h2>
            
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                I am a product-minded systems engineer specializing in backend infrastructures and AI integrations. I build robust APIs, architect clean database structures, and engineer data processing pipelines that convert raw complex payloads into structured database records.
              </p>
              <p>
                Whether it is building custom multi-tenant CRM systems or orchestrating NLP pipelines that achieve 96% accuracy under strict production workloads, my focus is always on writing testable code, optimizing response times, and ensuring system maintainability.
              </p>
              <p>
                I collaborate closely with product teams to build clean technical foundations, leveraging modern tools like Docker, Git Actions, and AWS to maintain complete visibility and deploy continuously with confidence.
              </p>
            </div>
          </div>

          {/* Right Column - Skill Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
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

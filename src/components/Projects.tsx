import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, Cpu, Layers } from 'lucide-react';

export default function Projects() {
  const projectList = [
    {
      id: "chatnalyxer",
      title: "Chatnalyxer",
      tagline: "AI-Powered WhatsApp Communication Assistant",
      desc: "Architected a real-time message processor and notification system. Implemented NLP for parsing structured tasks and deadlines from conversational streams, eliminating administrative overhead.",
      metric: "96% NLP Accuracy",
      metricLabel: "Task & Deadline Extraction",
      tags: ["FastAPI", "Azure AI", "PostgreSQL", "SQLAlchemy", "Render", "CI/CD"],
      github: "https://github.com/Rahul-pamula/chatnalyxer",
      demo: "https://rahul-pamula.github.io/chatnalyxer/",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      color: "from-blue-500/10 to-blue-600/5",
      border: "hover:border-blue-200"
    },
    {
      id: "tailoring",
      title: "Tailoring Business Platform",
      tagline: "Mobile-First Custom Apparel Web Platform",
      desc: "Engineered a custom full-stack business portal for a local client. Features a dynamic image gallery, pricing matrix tables, and a real-time apparel order management dashboard optimized for mobile users.",
      metric: "+30% Order Volume",
      metricLabel: "Client Business Growth",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary", "Express"],
      github: "https://github.com/Rahul-pamula",
      demo: "https://tailoring-red.vercel.app",
      icon: <Layers className="w-5 h-5 text-cyan-500" />,
      color: "from-cyan-500/10 to-cyan-600/5",
      border: "hover:border-cyan-200"
    },
    {
      id: "shrflow",
      title: "ShrFlow Backend Engine",
      tagline: "Production-Grade Digital Platform API (NDA)",
      desc: "Designed and developed modular APIs and database schemas for a high-traffic production digital system. Optimized complex data flows, improving system response latency and processing integrity.",
      metric: "NDA Confidential",
      metricLabel: "Backend Scale & Performance",
      tags: ["Python", "FastAPI Async", "PostgreSQL", "Systems Design", "Docker", "Git"],
      github: "", // NDA protected, removed Github repo URL
      demo: "", // NDA protected
      icon: <Shield className="w-5 h-5 text-indigo-500" />,
      color: "from-indigo-500/10 to-indigo-600/5",
      border: "hover:border-indigo-200"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
              PORTFOLIO PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Production-grade systems built for performance and growth.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-500 text-base max-w-sm">
            A selection of AI-driven tools, client applications, and backend systems designed with scalable paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`bg-white rounded-2xl border border-slate-100 shadow-premium flex flex-col justify-between overflow-hidden transition-all duration-300 relative group ${
                project.id === 'chatnalyxer' ? 'hover:border-blue-200 hover:shadow-[0_15px_45px_rgba(79,140,255,0.12)]' :
                project.id === 'tailoring' ? 'hover:border-cyan-200 hover:shadow-[0_15px_45px_rgba(0,198,255,0.12)]' :
                'hover:border-indigo-200 hover:shadow-[0_15px_45px_rgba(99,102,241,0.12)]'
              }`}
            >
              {/* Card Header Background Graphic */}
              <div className={`h-3 bg-gradient-to-r ${project.color}`} />
              
              {/* Custom floating particle flow representing active messages for Chatnalyxer */}
              {project.id === "chatnalyxer" && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-45">
                  <div className="absolute bottom-20 right-8 w-1.5 h-1.5 rounded-full bg-blue-400 animate-flow-dot" style={{ animationDelay: '0s', animationDuration: '3.2s' }} />
                  <div className="absolute bottom-24 right-16 w-2 h-2 rounded-full bg-cyan-400/80 animate-flow-dot" style={{ animationDelay: '0.8s', animationDuration: '2.6s' }} />
                  <div className="absolute bottom-16 right-24 w-1 h-1 rounded-full bg-blue-500 animate-flow-dot" style={{ animationDelay: '1.6s', animationDuration: '3.8s' }} />
                  <div className="absolute bottom-28 right-12 w-2 h-2 rounded-full bg-indigo-400/80 animate-flow-dot" style={{ animationDelay: '2.4s', animationDuration: '2.9s' }} />
                </div>
              )}

              <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 transition-all duration-300 group-hover:scale-110 ${
                      project.id === "chatnalyxer" ? "animate-pulse border-blue-100 bg-blue-50/50" : ""
                    }`}>
                      {project.icon}
                    </div>
                    
                    {/* Metric Badge */}
                    <div className="text-right">
                      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-800 transition-all duration-300 ${
                        project.id === "chatnalyxer" ? "relative shadow-[0_0_15px_rgba(79,140,255,0.25)] border-blue-200 bg-blue-50/50 text-blue-600" : ""
                      }`}>
                        {project.id === "chatnalyxer" && (
                          <span className="absolute inset-0 rounded-full border border-blue-400 animate-ping opacity-35" />
                        )}
                        {project.metric}
                      </span>
                      <span className="block text-[10px] text-slate-400 font-medium mt-1">
                        {project.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-xs text-blue-600 font-semibold mb-4">{project.tagline}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-slate-100/50 group-hover:text-slate-600 transition-colors duration-350"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors link-underline"
                      >
                        <Github className="w-4 h-4" />
                        Code Repository
                      </a>
                    )}
                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 ml-auto transition-colors link-underline"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : project.id === "chatnalyxer" ? (
                      <span className="text-xs text-slate-400 font-semibold ml-auto flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active Repo
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-semibold ml-auto flex items-center gap-1">
                        🔒 Confidential
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

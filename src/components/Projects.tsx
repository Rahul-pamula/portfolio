import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Mail, Leaf, Cpu } from 'lucide-react';

// A 3D tilt card component
function ProjectCard({ project }: { project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl border border-slate-100 shadow-premium flex flex-col justify-between relative group ${
        project.id === 'telebot' ? 'hover:border-indigo-300' :
        project.id === 'agriflow' ? 'hover:border-emerald-300' :
        'hover:border-blue-300'
      }`}
    >
      {/* 3D Inner Content Wrapper */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="p-8 flex-grow flex flex-col justify-between relative z-10"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 shadow-sm ${
              project.id === "telebot" ? "bg-indigo-50 border-indigo-100 text-indigo-500 group-hover:scale-110" : 
              project.id === "agriflow" ? "bg-emerald-50 border-emerald-100 text-emerald-500 group-hover:scale-110" :
              "bg-blue-50 border-blue-100 text-blue-500 group-hover:scale-110"
            }`}>
              {project.icon}
            </div>
            
            <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-800">
              {project.metric}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-blue-600 font-semibold mb-4">{project.tagline}</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors link-underline"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 ml-auto transition-colors link-underline"
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative Glow underneath the card */}
      <div 
        style={{ transform: "translateZ(-10px)" }}
        className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-10 ${
          project.id === "telebot" ? "bg-indigo-400" :
          project.id === "agriflow" ? "bg-emerald-400" :
          "bg-blue-400"
        }`} 
      />
    </motion.div>
  );
}

export default function Projects() {
  const projectList = [
    {
      id: "telebot",
      title: "Email_To_Telebot",
      tagline: "Your Personal AI Email Assistant. 100% Private.",
      desc: "A completely private, self-hosted AI agent that reads emails, summarizes them using ultra-fast Llama-3, and delivers them to Telegram. Features a Zero-Trust architecture and a 3D BYOC deployment portal.",
      metric: "Zero-Trust Cloud",
      tags: ["Supabase", "Groq Llama-3", "React Three Fiber", "Deno"],
      github: "https://github.com/Rahul-pamula/Email_to_telebot",
      demo: "https://rahul-pamula.github.io/Email_to_telebot/",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      id: "agriflow",
      title: "AgriFlow",
      tagline: "AI Platform for Indian Farmers",
      desc: "Leverages Retrieval-Augmented Generation (RAG) with Google Gemini 2.0 to deliver context-aware farming advice, combining historical agricultural data, government schemes, and live weather conditions.",
      metric: "RAG & Gemini 2.0",
      tags: ["Google Gemini", "RAG", "Vector Embeddings", "React"],
      github: "https://github.com/Rahul-pamula",
      demo: "https://agriflow-frontend.onrender.com/",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      id: "chatnalyxer",
      title: "Chatnalyxer",
      tagline: "AI-Powered WhatsApp Assistant",
      desc: "Architected a real-time message processor and notification system. Implemented NLP for parsing structured tasks and deadlines from conversational streams, eliminating administrative overhead.",
      metric: "96% NLP Accuracy",
      tags: ["FastAPI", "Azure AI", "PostgreSQL", "SQLAlchemy"],
      github: "https://github.com/Rahul-pamula/chatnalyxer",
      demo: "https://rahul-pamula.github.io/chatnalyxer/",
      icon: <Cpu className="w-6 h-6" />,
    }
  ];

  return (
    <section id="projects" className="py-32 bg-slate-50 relative perspective-1000">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
              PORTFOLIO PROJECTS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Production-grade systems built for impact.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-500 text-lg max-w-sm">
            Showcasing scalable backends, real-time AI agents, and polished 3D interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

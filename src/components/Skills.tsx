import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Cloud } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("backend");

  const skillCategories = [
    {
      id: "backend",
      title: "Backend Engineering",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
      skills: ["FastAPI", "Python Async", "Node.js (Express)", "Django", "REST APIs", "Message Queues", "WebSockets"]
    },
    {
      id: "ai_ml",
      title: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      skills: ["NLP / NER", "LLMs (Llama-3, Gemini 2.0)", "RAG Systems", "Vector Embeddings", "Azure AI Services", "Scikit-learn"]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: ["PostgreSQL", "Supabase", "MongoDB", "SQLAlchemy ORM", "Redis", "Schema Design"]
    },
    {
      id: "devops",
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-emerald-500" />,
      skills: ["Docker", "GitHub Actions (CI/CD)", "AWS (S3, Lambda)", "Deno Edge Functions", "Render", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
            TECHNICAL ARSENAL
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Core toolkit for building modern applications.
          </h2>
          <p className="text-slate-500 text-base">
            I specialize in building robust backend architectures and integrating cutting-edge AI models into scalable applications. No fluff, just the tools I use in production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Selector (Left Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive 
                      ? "bg-slate-50 border-blue-200 shadow-sm" 
                      : "bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                    isActive ? "bg-white border-blue-100 shadow-sm" : "bg-slate-100 border-transparent"
                  }`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${isActive ? "text-blue-600" : "text-slate-700"}`}>
                      {category.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Display Grid (Right Content) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl border border-slate-100 p-8 md:p-12 min-h-[300px] flex items-center">
            {skillCategories.map((category) => {
              if (category.id !== activeCategory) return null;
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full"
                >
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200/60">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-slate-900">{category.title} Stack</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 font-semibold hover:border-blue-300 hover:shadow-md hover:text-blue-600 transition-all cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

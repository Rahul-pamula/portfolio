import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Cloud } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("databases");

  const skillCategories = [
    {
      id: "ai_ml",
      title: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      skills: [
        { name: "Natural Language Processing (NLP)", level: "Advanced" },
        { name: "Named Entity Recognition (NER)", level: "Advanced" },
        { name: "Multimodal AI (Text, Image, PDF, Audio)", level: "Intermediate" },
        { name: "Azure AI Services", level: "Intermediate" },
        { name: "Scikit-learn & Python Data Science", level: "Advanced" },
        { name: "Data Preprocessing & Evaluation", level: "Advanced" }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Terminal className="w-5 h-5 text-cyan-500" />,
      skills: [
        { name: "FastAPI & FastAPI Async", level: "Expert" },
        { name: "Django & Flask", level: "Advanced" },
        { name: "Node.js (Express)", level: "Advanced" },
        { name: "Asynchronous Queue Processing", level: "Expert" },
        { name: "RESTful API Architecture", level: "Expert" },
        { name: "Systems Design & Modeling", level: "Advanced" }
      ]
    },
    {
      id: "databases",
      title: "Databases & ORM",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: "PostgreSQL Architecture", level: "Advanced" },
        { name: "SQLAlchemy ORM", level: "Expert" },
        { name: "Database Schema Design & Indexes", level: "Advanced" },
        { name: "MySQL & MongoDB", level: "Advanced" },
        { name: "Multi-tenant Schemes", level: "Advanced" },
        { name: "Data Persistence & Transaction Rules", level: "Advanced" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Testing",
      icon: <Cloud className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: "Docker Containerization", level: "Advanced" },
        { name: "AWS (S3, Lambda, SES)", level: "Intermediate" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced" },
        { name: "Unit & Integration Testing (Pytest)", level: "Advanced" },
        { name: "Cloud Deployments (Render, AWS)", level: "Advanced" },
        { name: "Git Workflow & Version Control", level: "Expert" }
      ]
    }
  ];

  const getProficiencyPercentage = (level: string) => {
    switch (level) {
      case "Expert": return 95;
      case "Advanced": return 85;
      case "Intermediate": return 70;
      default: return 60;
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 via-slate-100/40 to-blue-50/20 relative overflow-hidden">
      {/* Background design accents */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-blue-50/30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-indigo-50/30 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Core toolkit for engineering robust software.
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            A comprehensive list of core libraries, frameworks, architectures, and operations tools I write production code with.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6, scale: 1.025 }}
                animate={
                  isActive 
                    ? {
                        boxShadow: [
                          "0 4px 30px rgba(0, 0, 0, 0.03)",
                          "0 12px 45px rgba(79, 140, 255, 0.18)",
                          "0 4px 30px rgba(0, 0, 0, 0.03)"
                        ],
                        borderColor: [
                          "rgba(243, 244, 246, 0.8)",
                          "rgba(79, 140, 255, 0.5)",
                          "rgba(243, 244, 246, 0.8)"
                        ]
                      }
                    : {}
                }
                transition={
                  isActive 
                    ? { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    : { duration: 0.3 }
                }
                className={`p-8 rounded-[28px] border transition-all duration-500 group select-none cursor-pointer relative overflow-hidden will-change-transform ${
                  isActive 
                    ? "bg-gradient-to-br from-white/90 to-blue-50/25 border-slate-200/80" 
                    : "bg-white/60 backdrop-blur-md border-slate-100 hover:border-blue-200/40 hover:bg-white/80 shadow-premium"
                }`}
              >
                {/* Glowing subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-premium transition-opacity duration-500 pointer-events-none ${
                  isActive ? "opacity-[0.02]" : "opacity-0"
                }`} />

                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 relative z-10">
                  <motion.div 
                    animate={
                      isActive 
                        ? {
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.06, 0.94, 1]
                          }
                        : {}
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut"
                    }}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-300 ${
                      isActive ? "bg-white shadow-sm border-blue-200" : "bg-slate-50 border-slate-100 group-hover:scale-110"
                    }`}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className={`text-lg font-bold transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {category.skills.map((skill, idx) => {
                    const skillPct = getProficiencyPercentage(skill.level);
                    return (
                      <motion.div 
                        key={idx} 
                        whileHover={{ scale: 1.025, x: 4 }}
                        className={`flex flex-col gap-1 p-3 rounded-2xl transition-all duration-250 border border-transparent cursor-default group/skill will-change-transform ${
                          category.id === 'ai_ml' ? 'hover:bg-blue-50/30 hover:border-blue-100/50' :
                          category.id === 'backend' ? 'hover:bg-cyan-50/30 hover:border-cyan-100/50' :
                          category.id === 'databases' ? 'hover:bg-indigo-50/30 hover:border-indigo-100/50' :
                          'hover:bg-emerald-50/30 hover:border-emerald-100/50'
                        }`}
                      >
                        <span className={`text-sm font-semibold text-slate-800 transition-colors duration-200 ${
                          category.id === 'ai_ml' ? 'group-hover/skill:text-blue-600' :
                          category.id === 'backend' ? 'group-hover/skill:text-cyan-600' :
                          category.id === 'databases' ? 'group-hover/skill:text-indigo-600' :
                          'group-hover/skill:text-emerald-600'
                        }`}>
                          {skill.name}
                        </span>
                        
                        {/* Micro-Details: Hardware-accelerated progress bars */}
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] text-slate-400 font-medium">
                            {skill.level} Proficiency
                          </span>
                          <span className={`text-[10px] font-bold ${
                            category.id === 'ai_ml' ? 'text-blue-500' :
                            category.id === 'backend' ? 'text-cyan-500' :
                            category.id === 'databases' ? 'text-indigo-500' :
                            'text-emerald-500'
                          }`}>
                            {skillPct}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100/80 rounded-full overflow-hidden mt-1 relative">
                          <motion.div 
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: skillPct / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                            style={{ originX: 0 }}
                            className={`h-full rounded-full bg-gradient-to-r ${
                              category.id === 'ai_ml' ? 'from-blue-500 to-cyan-400' :
                              category.id === 'backend' ? 'from-cyan-500 to-teal-400' :
                              category.id === 'databases' ? 'from-indigo-500 to-blue-400' :
                              'from-emerald-500 to-teal-400'
                            } will-change-transform`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Cloud } from 'lucide-react';

export default function Skills() {
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

  return (
    <section id="skills" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col gap-1 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200">
                    <span className="text-sm font-semibold text-slate-800">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {skill.level} Proficiency
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Engineer",
      company: "Freelance",
      duration: "May 2026",
      type: "Remote",
      highlights: [
        "Consulted with a small tailoring business client to bring their services online, targeting customers who prefer simple digital solutions.",
        "Designed and implemented a mobile-friendly custom apparel platform, optimizing the core order and review workflows."
      ]
    },
    {
      role: "Software Engineer",
      company: "Runway Digital Media",
      duration: "Jan 2026 – May 2026",
      type: "Internship / Remote",
      highlights: [
        "Built and optimized scalable backend systems and full-stack applications in a fast-paced startup environment.",
        "Enhanced system performance and engineered maintainable code architectures for core products."
      ]
    },
    {
      role: "AI & Backend Developer",
      company: "byteXL",
      duration: "Aug 2025 – Oct 2025",
      type: "Apprenticeship / Remote",
      highlights: [
        "Developed an AI-driven system during the AI/ML Sprint focused on extracting meaningful insights from real-world communication data.",
        "Integrated NLP pipelines to parse real-time unstructured conversational payloads efficiently."
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "Freelance",
      duration: "Mar 2024 – Jun 2024",
      type: "Freelance / Remote",
      highlights: [
        "Developed a complete backend system using Django, implementing admin authentication, product management, and customer reviews.",
        "Integrated Cloudinary for secure and fast image storage, and designed a robust relational database schema."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
            PROFESSIONAL HISTORY
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Building impact-driven software systems.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-100 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Dot indicator */}
              <span className="absolute -left-[45px] md:-left-[53px] top-1.5 w-6 h-6 rounded-full bg-blue-50 border-4 border-white flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </span>

              {/* Card Container */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover hover:border-blue-200/80 hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-4.5 h-4.5 text-slate-400" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Job Bullet Highlights */}
                <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

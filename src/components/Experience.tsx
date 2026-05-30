import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "ShrFlow (Confidential Project)",
      duration: "Jan 2026 – Present",
      type: "Contract / Remote",
      highlights: [
        "Collaborated with external teams to build a scalable, production-grade digital platform under strict NDA guidelines.",
        "Designed and implemented high-performance backend APIs using FastAPI and Python async, prioritizing maintainability and response latency.",
        "Optimized backend data processing workflows, significantly enhancing data integrity and overall system responsiveness.",
        "Created modular, reusable system modules allowing rapid scalability and integration of future service nodes.",
        "Set up robust test coverage and debugging workflows to improve core infrastructure stability."
      ]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Tailoring Business Platform",
      duration: "Apr 2026 – May 2026",
      type: "Freelance / Remote",
      highlights: [
        "Launched a mobile-first web system for a tailoring business, generating a 30% increase in order volume within the first month.",
        "Crafted a responsive user interface optimized for mobile and non-technical clients, improving core usability scores by 25%.",
        "Built a secure administrative console to manage custom apparel pricing matrices, product catalogues, and review workflows.",
        "Integrated dynamic cloud media storage handlers, compressing page load speeds by 50% through cached responsive image distribution."
      ]
    },
    {
      role: "AI/ML Project Developer",
      company: "ByteXL (Chatnalyxer Integration)",
      duration: "Aug 2025 – Oct 2025",
      type: "Industry Project / Remote",
      highlights: [
        "Constructed a production-ready FastAPI backend designed to parse real-time WhatsApp incoming payloads and send push notifications.",
        "Engineered an NLP system leveraging Azure AI Services for task and deadline entity extraction, achieving 96% accuracy on evaluation datasets.",
        "Designed a multi-tenant PostgreSQL schema via SQLAlchemy ORM to manage multimodal user inputs and session structures.",
        "Established CI/CD deployment pipelines using GitHub Actions for automated testing and deployment on Render, achieving 99.9% uptime."
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
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, CheckCircle, Award } from 'lucide-react';

export default function Resume() {
  const certifications = [
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2025" },
    { name: "Introduction to SQL", issuer: "DataFlair", year: "2025" },
    { name: "AI/ML Development Sprint", issuer: "ByteXL", year: "2025" }
  ];

  return (
    <section id="resume" className="py-24 bg-[#030102] relative z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-brand-start/10 via-[#070707]/0 to-[#070707]/0 pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-start mb-3 block">
            RESUME & CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
            Qualifications & certifications at a glance.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Quick Profile Details & Download CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="card-premium glass-panel p-8 flex flex-col gap-6 h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1f0d14] flex items-center justify-center border border-brand-start/50 shadow-glow-red">
                    <FileText className="w-5 h-5 text-brand-start" />
                  </div>
                  <div>
                    <h3 className="font-bold font-display text-lg text-white">Rahul Pamula</h3>
                    <p className="text-xs text-gray-400 font-medium">System Architect & NLP Specialist</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Core Strengths
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Systems Architecture",
                      "Database Modeling",
                      "API Engineering",
                      "NLP Integration",
                      "Scalability Tuning",
                      "CI/CD Pipelines"
                    ].map((strength) => (
                      <div key={strength} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-brand-end flex-shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Certifications & Badges
                  </h4>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:border-brand-start/30 transition-colors">
                        <Award className="w-5 h-5 text-brand-start mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-white leading-tight">
                            {cert.name}
                          </p>
                          <p className="text-[10px] text-gray-400 mt-0.5">
                            Issued by {cert.issuer} · {cert.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                <a
                  href="/RAHUL_RESUME.pdf"
                  download="RAHUL_RESUME.pdf"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-premium text-white font-semibold text-sm transition-all duration-300 hover:shadow-glow-red active:scale-[0.98] w-full text-center"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <a
                  href="/RAHUL_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-panel text-gray-300 font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:text-white active:scale-[0.98] w-full text-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  View in New Tab
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded PDF Viewer */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="card-premium glass-panel p-4 h-full flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-gray-400 ml-2">RAHUL_RESUME.pdf</span>
                </div>
              </div>

              {/* PDF Embed Frame */}
              <div className="relative flex-grow min-h-[500px] bg-[#050305] rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="/RAHUL_RESUME.pdf#toolbar=0&navpanes=0"
                  className="absolute inset-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity duration-300 filter invert-[0.9] hue-rotate-[180deg]"
                  title="Rahul Pamula Resume PDF"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

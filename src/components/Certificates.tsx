import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      id: "az900",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Valid & Active",
      verifyLink: "https://learn.microsoft.com/en-us/users/rahulpamula/credentials",
      icon: <Award className="w-8 h-8 text-brand-start" />,
      skills: ["Cloud Concepts", "Azure Architecture", "Azure Management & Governance"]
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-[#0a0508] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-end/10 via-[#0a0508]/0 to-[#0a0508]/0 pointer-events-none -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-start mb-3 block">
              CERTIFICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-tight">
              Verified industry credentials.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-premium glass-panel p-8 relative group overflow-hidden hover-glow-red"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-start/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-start/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/5 shadow-sm flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-brand-start/20 rounded-2xl animate-pulse blur-sm" />
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{cert.title}</h3>
                  <p className="text-sm font-semibold text-brand-start mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="mb-8">
                <ul className="space-y-2">
                  {cert.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                      <CheckCircle className="w-4 h-4 text-brand-end" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                  {cert.date}
                </span>
                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-brand-start hover:text-brand-accent transition-colors link-underline"
                  >
                    Verify Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

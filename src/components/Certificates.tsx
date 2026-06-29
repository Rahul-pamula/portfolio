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
      icon: <Award className="w-8 h-8 text-blue-600" />,
      skills: ["Cloud Concepts", "Azure Architecture", "Azure Management & Governance"]
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 block">
              CERTIFICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Verified industry credentials.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-[24px] border border-slate-200 p-8 shadow-premium relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-110" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-2xl animate-pulse" />
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{cert.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="mb-8">
                <ul className="space-y-2">
                  {cert.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                  {cert.date}
                </span>
                {cert.verifyLink && (
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors link-underline"
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

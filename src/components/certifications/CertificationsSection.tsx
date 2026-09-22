import { certifications } from '../../data/certifications';
import { Award } from 'lucide-react';

export const CertificationsSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">Certifications and Achievements</h2>
        <p className="text-sm text-text-secondary">Professional licenses and validated skills.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="p-5 rounded-xl border border-border/50 bg-surface-elevated hover:bg-surface-elevated/80 transition-colors shadow-sm flex flex-col gap-3 group">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                <Award size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-text-primary text-sm leading-snug">{cert.title}</h3>
                <span className="text-xs text-text-secondary">{cert.issuer}</span>
                <span className="text-[11px] text-text-muted mt-1">Issued {cert.date}</span>
                {cert.credentialId && (
                  <span className="text-[11px] text-text-muted font-mono bg-surface px-2 py-1 rounded border border-border/50 w-fit mt-1">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
            {cert.skills && cert.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 pt-3 border-t border-border/30">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="text-[10px] px-2 py-1 rounded bg-surface border border-border/50 text-text-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

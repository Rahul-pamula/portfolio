import { experiences } from '../../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">Academic Background and Work Experience</h2>
        <p className="text-sm text-text-secondary">My professional journey and educational background.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Work Experience */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2 text-accent">
            <Briefcase size={20} />
            <h3 className="text-lg font-medium text-text-primary">Work Experience</h3>
          </div>
          <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.filter(e => e.type === 'work').map((exp) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-accent bg-surface-elevated shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(var(--accent),0.1)] z-10" />
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/50 bg-surface-elevated/50 hover:bg-surface-elevated transition-colors shadow-sm">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-text-primary text-sm">{exp.title}</h4>
                      <span className="text-[10px] text-text-muted shrink-0 bg-surface px-2 py-1 rounded-md border border-border/50">{exp.date}</span>
                    </div>
                    <span className="text-xs font-medium text-accent">{exp.organization}</span>
                    {exp.description && <p className="text-xs text-text-secondary mt-2 leading-relaxed">{exp.description}</p>}
                    {exp.metric && (
                      <div className="mt-3 px-3 py-2 bg-accent/10 rounded-md border border-accent/20">
                        <p className="text-xs text-accent font-medium">{exp.metric}</p>
                      </div>
                    )}
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="text-[10px] px-2 py-1 rounded-md bg-surface border border-border/50 text-text-secondary">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2 text-emerald-400">
            <GraduationCap size={20} />
            <h3 className="text-lg font-medium text-text-primary">Education</h3>
          </div>
          <div className="flex flex-col gap-4">
            {experiences.filter(e => e.type === 'education').map((edu) => (
              <div key={edu.id} className="p-4 rounded-xl border border-border/50 bg-surface-elevated/50 hover:bg-surface-elevated transition-colors shadow-sm flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-semibold text-text-primary text-sm">{edu.organization}</h4>
                  <span className="text-[10px] text-text-muted shrink-0 bg-surface px-2 py-1 rounded-md border border-border/50">{edu.date}</span>
                </div>
                <span className="text-xs text-text-secondary">{edu.title}</span>
                {edu.metric && (
                  <span className="inline-flex w-fit text-[11px] font-medium text-emerald-400/90 mt-1 bg-emerald-400/10 px-2 py-1 rounded border border-emerald-400/20">
                    {edu.metric}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

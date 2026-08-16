import { openSourceProjects } from '../../data/opensource';
import { Github, MessageCircle, AlertCircle } from 'lucide-react';

export const OpenSourceSection = () => {
  return (
    <section id="open-source" className="py-6 border-b border-border/50">
      <h2 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">Open Source Initiative</h2>
      
      <div className="flex flex-col gap-6">
        {openSourceProjects.map((project, idx) => (
          <div key={idx} className={`card-premium p-8 relative overflow-hidden ${project.isMainFocus ? 'border-accent/30' : ''}`}>
            {project.isMainFocus && (
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            )}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary tracking-tight">{project.title}</h3>
                  <div className="flex gap-2 mt-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-surface border border-border/50 rounded font-mono text-xs font-medium text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  <Github className="w-4 h-4" />
                  Repository
                </a>
                <a href={project.issuesUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  <AlertCircle className="w-4 h-4" />
                  Issues
                </a>
                <a href={project.discussionsUrl} target="_blank" rel="noreferrer" className="btn-primary">
                  <MessageCircle className="w-4 h-4" />
                  Discussions
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

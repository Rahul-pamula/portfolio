import { openSourceProjects } from '../../data/opensource';
import { Github, MessageCircle, AlertCircle } from 'lucide-react';

export const OpenSourceSection = () => {
  const mainProject = openSourceProjects.find(p => p.isMainFocus);

  if (!mainProject) return null;

  return (
    <section id="open-source" className="py-6 border-b border-border">
      <h2 className="text-xl font-semibold text-text-primary mb-6">Open Source Initiative</h2>
      
      <div className="card-premium p-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <h3 className="text-2xl font-bold text-text-primary">{mainProject.title}</h3>
            <div className="flex gap-2">
              {mainProject.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-text-secondary text-base leading-relaxed max-w-2xl mb-8">
            {mainProject.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={mainProject.repositoryUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <Github className="w-4 h-4" />
              View Project
            </a>
            <a href={mainProject.issuesUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <AlertCircle className="w-4 h-4" />
              Explore Issues
            </a>
            <a href={mainProject.discussionsUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle className="w-4 h-4" />
              Join Discussion
            </a>
          </div>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

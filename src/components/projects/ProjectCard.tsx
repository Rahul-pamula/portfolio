import type { Project } from '../../data/projects';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card-premium p-6 flex flex-col h-full group relative overflow-hidden">
      {/* Subtle background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors tracking-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.repositoryUrl && (
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-sm text-text-secondary leading-relaxed flex-grow mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-border/50">
          {project.language && (
            <div className="flex items-center gap-1.5 mr-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
              <span className="text-xs font-medium text-text-primary font-mono">{project.language}</span>
            </div>
          )}
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs text-text-muted px-2 py-1 bg-surface-elevated rounded border border-border/50 font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

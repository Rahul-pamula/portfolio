import { moreProjects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const MoreProjects = () => {
  return (
    <section id="projects" className="py-6 border-b border-border">
      <h2 className="text-xl font-semibold text-text-primary mb-6">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moreProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

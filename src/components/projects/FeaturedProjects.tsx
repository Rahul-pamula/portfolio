import { featuredProjects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export const FeaturedProjects = () => {
  return (
    <section id="featured-work" className="py-6 border-b border-border">
      <h2 className="text-xl font-semibold text-text-primary mb-6">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

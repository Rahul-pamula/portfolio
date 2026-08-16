import { openSourceProjects } from '../../data/opensource';
import { Heart } from 'lucide-react';

export const SupportCard = () => {
  const mainProject = openSourceProjects.find(p => p.isMainFocus);

  if (!mainProject) return null;

  return (
    <div className="card-premium p-6 border-accent/20 bg-accent/5 mt-8 mb-8">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent/10 rounded-lg text-accent">
          <Heart className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Help build open-source financial education.</h3>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            The {mainProject.title} is an open-source initiative relying on community contributions. Whether it's code, documentation, or ideas, your help matters.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={mainProject.issuesUrl} target="_blank" rel="noreferrer" className="btn-accent">
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

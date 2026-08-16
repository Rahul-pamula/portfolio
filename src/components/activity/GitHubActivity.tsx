import { githubActivity } from '../../data/github';

export const GitHubActivity = () => {
  return (
    <section className="py-6 border-b border-border">
      <h2 className="text-xl font-semibold text-text-primary mb-6">GitHub Footprint</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="card-premium p-6">
          <p className="text-text-muted text-sm font-medium mb-1 uppercase tracking-wider">Repositories</p>
          <p className="text-3xl font-bold text-text-primary">{githubActivity.totalRepositories}</p>
        </div>
        <div className="card-premium p-6 flex flex-col justify-center">
          <p className="text-text-muted text-sm font-medium mb-4 uppercase tracking-wider">Top Languages</p>
          <div className="w-full flex h-3 rounded-full overflow-hidden bg-surface-hover mb-3">
            {githubActivity.languages.map((lang, i) => (
              <div 
                key={i} 
                style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                className="h-full transition-all duration-500"
                title={`${lang.name} - ${lang.percentage}%`}
              ></div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {githubActivity.languages.slice(0, 3).map((lang, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }}></span>
                <span className="text-xs text-text-secondary">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

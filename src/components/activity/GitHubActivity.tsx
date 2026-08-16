import githubData from '../../data/generated/github-data.json';

export const GitHubActivity = () => {
  const user = githubData.user;
  
  return (
    <section className="py-6 border-b border-border/50">
      <h2 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">GitHub Footprint</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card-premium p-6 relative overflow-hidden group">
          <p className="text-text-muted text-xs font-semibold uppercase tracking-wider font-mono mb-2">Public Repositories</p>
          <p className="text-4xl font-bold text-text-primary group-hover:text-accent transition-colors font-mono">{user.public_repos || 46}</p>
          
          <div className="mt-4 flex gap-4 text-sm text-text-secondary">
            <div>
              <span className="font-semibold text-text-primary font-mono">{user.followers || 0}</span> followers
            </div>
            <div>
              <span className="font-semibold text-text-primary font-mono">{user.public_gists || 0}</span> gists
            </div>
          </div>
        </div>

        <div className="card-premium p-6 flex flex-col justify-center">
          <p className="text-text-muted text-xs font-semibold uppercase tracking-wider font-mono mb-4">Primary Languages</p>
          <div className="w-full flex h-2 rounded-full overflow-hidden bg-surface-elevated mb-4">
            <div className="h-full bg-[#3178c6] transition-all duration-500 hover:opacity-80" style={{ width: '45%' }} title="TypeScript"></div>
            <div className="h-full bg-[#3572A5] transition-all duration-500 hover:opacity-80" style={{ width: '35%' }} title="Python"></div>
            <div className="h-full bg-[#b07219] transition-all duration-500 hover:opacity-80" style={{ width: '20%' }} title="Java"></div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#3178c6]"></span>
              <span className="text-xs text-text-secondary font-mono">TypeScript</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#3572A5]"></span>
              <span className="text-xs text-text-secondary font-mono">Python</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#b07219]"></span>
              <span className="text-xs text-text-secondary font-mono">Java</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

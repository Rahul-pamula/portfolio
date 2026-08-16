import githubData from '../../data/generated/github-data.json';

export const ContributionStats = () => {
  const stats = githubData.recentStats;
  const totalLastYear = githubData.contributions?.totalLastYear || 0;

  return (
    <div className={`grid gap-4 mt-6 ${stats ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
      <div className="card-premium p-6">
        <p className="text-3xl font-bold text-accent mb-1 font-mono">{totalLastYear.toLocaleString()}</p>
        <p className="text-xs text-text-muted uppercase tracking-wider font-medium">Contributions<br/>Last 12 Months</p>
      </div>
      
      {stats && (
        <>
          <div className="card-premium p-6">
            <p className="text-3xl font-bold text-text-primary mb-1 font-mono">{stats.commits.toLocaleString()}</p>
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium">Total<br/>Commits</p>
          </div>
          
          <div className="card-premium p-6">
            <p className="text-3xl font-bold text-text-primary mb-1 font-mono">{stats.prs.toLocaleString()}</p>
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium">Pull Requests</p>
          </div>

          <div className="card-premium p-6">
            <p className="text-3xl font-bold text-text-primary mb-1 font-mono">{stats.issues.toLocaleString()}</p>
            <p className="text-xs text-text-muted uppercase tracking-wider font-medium">Issues</p>
          </div>
        </>
      )}
    </div>
  );
};

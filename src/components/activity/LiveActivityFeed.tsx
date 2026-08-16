import { GitPullRequest, GitCommit, MessageSquare, Tag, FileText } from 'lucide-react';
import githubData from '../../data/generated/github-data.json';

const getIconForType = (type: string) => {
  switch (type) {
    case 'PushEvent': return <GitCommit className="w-4 h-4 text-accent" />;
    case 'PullRequestEvent': return <GitPullRequest className="w-4 h-4 text-purple-400" />;
    case 'IssueCommentEvent': return <MessageSquare className="w-4 h-4 text-blue-400" />;
    case 'IssuesEvent': return <FileText className="w-4 h-4 text-amber-400" />;
    case 'ReleaseEvent': return <Tag className="w-4 h-4 text-emerald-400" />;
    default: return <GitCommit className="w-4 h-4 text-text-muted" />;
  }
};

const formatAction = (event: { type: string; payload?: { action?: string } }) => {
  switch (event.type) {
    case 'PushEvent': return 'Pushed';
    case 'PullRequestEvent': return event.payload?.action === 'opened' ? 'Opened PR' : 'Closed PR';
    case 'IssueCommentEvent': return 'Commented';
    case 'IssuesEvent': return event.payload?.action === 'opened' ? 'Opened Issue' : 'Closed Issue';
    case 'ReleaseEvent': return 'Released';
    default: return 'Contributed';
  }
};

const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
};

export const LiveActivityFeed = () => {
  const feed = githubData.activityFeed || [];

  return (
    <aside className="w-full xl:w-80 flex-shrink-0">
      <div className="sticky top-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">Live Activity</h3>
          </div>
          <span className="text-xs text-text-muted">Updated {formatTimeAgo(githubData.updatedAt)}</span>
        </div>

        <div className="flex flex-col gap-4">
          {feed.length === 0 ? (
            <div className="text-sm text-text-muted">No recent public activity.</div>
          ) : (
            feed.slice(0, 8).map((event: { id: string; type: string; repo: string; created_at: string; payload?: { action?: string } }, i: number) => (
              <div key={event.id || i} className="group flex gap-4 p-3 -mx-3 rounded-lg hover:bg-surface-hover transition-colors">
                <div className="mt-1">
                  {getIconForType(event.type)}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-medium text-text-primary truncate">
                    {formatAction(event)}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-text-secondary truncate">
                      {event.repo.replace('Rahul-pamula/', '')}
                    </span>
                    <span className="text-text-muted text-xs">&middot;</span>
                    <span className="text-xs text-text-muted whitespace-nowrap">
                      {formatTimeAgo(event.created_at)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </aside>
  );
};

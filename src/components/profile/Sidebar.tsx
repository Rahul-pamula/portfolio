import { profileData } from '../../data/profile';
import { Github, Linkedin, ExternalLink, GitCommit } from 'lucide-react';
import githubData from '../../data/generated/github-data.json';

export const Sidebar = () => {
  const user = githubData.user;
  
  return (
    <aside className="w-full flex flex-col gap-8 card-premium p-4 sm:p-6">

      {/* Profile Info */}
      <div className="flex flex-col gap-5">
        <div className="relative w-24 h-24 rounded-full p-1 border border-border bg-surface-elevated">
          <img
            src={user.avatar_url || profileData.avatarUrl}
            alt={profileData.name}
            className="w-full h-full rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-surface border border-border rounded-full flex items-center justify-center" title="Developer">
            <span className="text-xs">💻</span>
          </div>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">{profileData.name}</h1>
          <p className="text-base text-text-secondary mt-2 leading-relaxed">{profileData.bio}</p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-text-secondary mt-1">
          <div className="flex items-center gap-1.5 hover:text-text-primary transition-colors cursor-pointer">
            <span className="font-semibold text-text-primary">{user.followers || 0}</span> followers
          </div>
          <span className="text-border">&middot;</span>
          <div className="flex items-center gap-1.5 hover:text-text-primary transition-colors cursor-pointer">
            <span className="font-semibold text-text-primary">{user.following || 0}</span> following
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-border/50"></div>

      {/* Recent Activity Section */}
      <div className="flex flex-col gap-4 pb-2 w-full">
        <h3 className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] px-2">
          Recent Activity
        </h3>
        
        <div className="flex flex-col gap-3 px-2">
          <div className="flex items-start gap-3 group cursor-pointer">
            <div className="mt-1 text-emerald-400/60 group-hover:text-emerald-400 transition-colors">
              <GitCommit size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">Pushed — portfolio</span>
              <span className="text-[10px] text-text-muted">2 hours ago</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group cursor-pointer">
            <div className="mt-1 text-emerald-400/60 group-hover:text-emerald-400 transition-colors">
              <GitCommit size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">Pushed — agent-context-os</span>
              <span className="text-[10px] text-text-muted">5 hours ago</span>
            </div>
          </div>
        </div>

        <div className="w-full mt-2">
          <a 
            href="https://github.com/Rahul-pamula" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-surface-elevated border border-border/50 hover:border-accent/50 hover:bg-surface-elevated/80 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-medium text-text-primary">GitHub Contributions</span>
            </div>
            <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-border/50"></div>

      {/* Navigation */}
      <nav className="hidden xl:flex flex-col gap-3 flex-grow font-medium">
        <a href="#overview" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-border"></span> Overview
        </a>
        <a href="#contributions" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-border"></span> Contributions
        </a>
        <a href="#featured-work" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-border"></span> Featured Work
        </a>
        <a href="#open-source" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-3">
          <span className="w-1 h-1 rounded-full bg-border"></span> Open Source
        </a>
      </nav>

      <div className="h-px w-full bg-border/50 hidden xl:block"></div>

      {/* Social Links */}
      <div className="flex items-center gap-5 text-text-secondary">
        <a href={profileData.github} target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={profileData.website} target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
};

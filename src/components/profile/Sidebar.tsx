import { profileData } from '../../data/profile';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import githubData from '../../data/generated/github-data.json';

export const Sidebar = () => {
  const user = githubData.user;
  
  return (
    <aside className="w-full flex flex-col gap-8 bg-black/15 rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6">

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

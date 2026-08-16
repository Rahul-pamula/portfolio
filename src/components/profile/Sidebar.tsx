import { profileData } from '../../data/profile';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 xl:w-72 lg:h-screen lg:sticky top-0 p-6 flex flex-col gap-8 lg:border-r border-border">
      {/* Profile Info */}
      <div className="flex flex-col gap-4">
        <img
          src={profileData.avatarUrl}
          alt={profileData.name}
          className="w-16 h-16 rounded-full border border-border"
        />
        <div>
          <h1 className="text-xl font-semibold text-text-primary">{profileData.name}</h1>
          <p className="text-sm text-text-secondary mt-1">{profileData.bio}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex flex-col gap-2 flex-grow">
        <a href="#overview" className="text-sm text-text-secondary hover:text-text-primary transition-colors py-1">Overview</a>
        <a href="#featured-work" className="text-sm text-text-secondary hover:text-text-primary transition-colors py-1">Featured Work</a>
        <a href="#open-source" className="text-sm text-text-secondary hover:text-text-primary transition-colors py-1">Open Source</a>
        <a href="#projects" className="text-sm text-text-secondary hover:text-text-primary transition-colors py-1">Selected Projects</a>
      </nav>

      {/* Social Links */}
      <div className="flex items-center gap-4 text-text-secondary">
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

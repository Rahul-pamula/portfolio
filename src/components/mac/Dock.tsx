import { useState } from 'react';
import { User, Github, Terminal, Coffee, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

const DOCK_ITEMS = [
  { id: 'overview', icon: User, label: 'Profile', href: '#overview' },
  { id: 'projects', icon: Terminal, label: 'Projects', href: '#projects' },
  { id: 'github', icon: Github, label: 'GitHub', href: profileData.github, external: true },
  { id: 'contact', icon: Coffee, label: 'Connect', href: profileData.linkedin, external: true },
];

export const Dock = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div 
        className="flex items-end gap-2 px-3 pb-2 pt-3 rounded-2xl bg-surface/30 backdrop-blur-xl border border-border/50 shadow-2xl transition-colors duration-300"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {DOCK_ITEMS.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;
          
          let scale = 1;
          if (isHovered) scale = 1.4;
          else if (isNeighbor) scale = 1.15;

          return (
            <div 
              key={item.id}
              className="relative group flex flex-col items-center justify-end"
              onMouseEnter={() => setHoveredIdx(idx)}
            >
              {/* Tooltip bubble */}
              <div className={`absolute -top-12 px-3 py-1 bg-surface-elevated backdrop-blur-md text-text-primary text-xs rounded-md shadow-lg border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200`}>
                {item.label}
              </div>

              {/* Icon container with scaling */}
              <a 
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="flex items-center justify-center rounded-xl bg-gradient-to-br from-surface/80 to-surface/40 border border-border/50 shadow-inner backdrop-blur-md transition-all duration-200 cursor-pointer text-text-primary hover:text-accent"
                style={{ 
                  width: `${3.5 * scale}rem`, 
                  height: `${3.5 * scale}rem`,
                  marginBottom: isHovered ? '0.5rem' : '0'
                }}
              >
                <item.icon size={24 * (scale * 0.8)} strokeWidth={1.5} />
              </a>
              {/* Active dot indicator */}
              <div className="w-1 h-1 rounded-full bg-text-primary/50 mt-1 absolute -bottom-1"></div>
            </div>
          );
        })}

        <div className="w-px h-10 bg-border/50 mx-1 mb-1 rounded"></div>
        
        {/* Email Link */}
        <div 
          className="relative group flex flex-col items-center justify-end"
          onMouseEnter={() => setHoveredIdx(99)}
        >
          <div className="absolute -top-12 px-3 py-1 bg-surface-elevated backdrop-blur-md text-text-primary text-xs rounded-md shadow-lg border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200">
            Email
          </div>
          <a 
            href={profileData.email}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-xl bg-gradient-to-br from-surface/80 to-surface/40 border border-border/50 shadow-inner backdrop-blur-md transition-all duration-200 cursor-pointer text-text-primary hover:text-accent"
            style={{ 
              width: `${3.5 * (hoveredIdx === 99 ? 1.4 : 1)}rem`, 
              height: `${3.5 * (hoveredIdx === 99 ? 1.4 : 1)}rem`,
              marginBottom: hoveredIdx === 99 ? '0.5rem' : '0'
            }}
          >
            <Mail size={24 * ((hoveredIdx === 99 ? 1.4 : 1) * 0.8)} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
};

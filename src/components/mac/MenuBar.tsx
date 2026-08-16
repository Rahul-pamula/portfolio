import { useState, useEffect } from 'react';
import { Wifi, Battery, Search } from 'lucide-react';
import { MenuDropdown } from './MenuDropdown';
import { profileData } from '../../data/profile';
import { useTheme } from '../../context/ThemeProvider';
import githubData from '../../data/generated/github-data.json';

// Helper for formatting time elapsed
const formatTimeAgo = (dateString: string) => {
  const diff = Date.now() - new Date(dateString).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 24) return `${hours} hours ago`;
  return `${Math.floor(hours / 24)} days ago`;
};

// Helper for formatting Github events
const formatEvent = (type: string) => {
  if (type === 'PushEvent') return 'Push';
  if (type === 'PullRequestEvent') return 'Pull Request';
  if (type === 'IssuesEvent') return 'Issue';
  if (type === 'IssueCommentEvent') return 'Issue Comment';
  if (type === 'WatchEvent') return 'Starred Repository';
  return 'Activity';
};

export const MenuBar = () => {
  const [time, setTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggle = (menu: string) => {
    setActiveMenu(prev => prev === menu ? null : menu);
  };

  const closeMenu = () => setActiveMenu(null);

  const formatTime = (date: Date) => date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const formatDate = (date: Date) => date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case '1': e.preventDefault(); window.location.hash = '#overview'; break;
          case '2': e.preventDefault(); window.location.hash = '#contributions'; break;
          case '3': e.preventDefault(); window.location.hash = '#projects'; break;
          case '4': e.preventDefault(); window.location.hash = '#opensource'; break;
          case 'k': 
          case 'K': e.preventDefault(); handleToggle('file'); break; // Open file menu as a fallback command palette
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // History mapping from GitHub Data
  const recentHistory = githubData.activityFeed?.slice(0, 5).map((ev: any) => ({
    label: `${formatEvent(ev.type)} — ${ev.repo.split('/')[1] || ev.repo}`,
    shortcut: formatTimeAgo(ev.created_at)
  })) || [];

  return (
    <div className={`w-full h-7 backdrop-blur-md border-b flex items-center justify-between px-4 z-50 text-[13px] font-medium select-none shadow-sm relative transition-colors duration-300 ${theme === 'light' ? 'bg-white text-gray-900 border-gray-200' : 'bg-[#0d1117]/90 text-[#c9d1d9] border-[#30363d]/50'}`}>
      <div className="flex items-center gap-1 h-full">
        {/* Profile Menu */}
        <MenuDropdown 
          label={<span className="font-bold px-2">Rahul Pamula</span>}
          isOpen={activeMenu === 'profile'}
          onToggle={() => handleToggle('profile')}
          onClose={closeMenu}
          items={[
            { label: 'About Rahul', href: '#overview' },
            { isDivider: true, label: '' },
            { label: 'LinkedIn', href: profileData.linkedin, external: true, shortcut: '↗' },
            { label: 'GitHub', href: profileData.github, external: true, shortcut: '↗' },
            { label: 'Email Rahul', href: profileData.email, external: true },
            { isDivider: true, label: '' },
            { label: 'Resume', href: profileData.resume, external: true, shortcut: '↗' }
          ]}
        />
        
        {/* File Menu (Projects) */}
        <div className="hidden sm:block">
          <MenuDropdown 
            label={<span className="px-2 whitespace-nowrap">File</span>}
            isOpen={activeMenu === 'file'}
            onToggle={() => handleToggle('file')}
            onClose={closeMenu}
            items={[
              { label: 'Financial Literacy Simulator', href: 'https://github.com/LifeSimLabs/financial-literacy-simulator', external: true },
              { label: 'ShrFlow', href: 'https://github.com/Runway-Digital-2026/ShrFlow', external: true },
              { label: 'Chatnalyxer', href: 'https://github.com/Rahul-pamula/Chatnalyxer', external: true },
              { label: 'CPA Templates', href: 'https://github.com/Create-Python-App/cpa-templates', external: true },
              { isDivider: true, label: '' },
              { label: 'All Repositories', href: 'https://github.com/Rahul-pamula?tab=repositories', external: true, shortcut: '↗' }
            ]}
          />
        </div>

        {/* Edit Menu (Theme & Prefs) */}
        <MenuDropdown 
          label={<span className="px-2 whitespace-nowrap">Edit</span>}
          isOpen={activeMenu === 'edit'}
          onToggle={() => handleToggle('edit')}
          onClose={closeMenu}
          items={[
            { label: 'Theme: Dark', onClick: () => setTheme('dark'), shortcut: theme === 'dark' ? '✓' : '' },
            { label: 'Theme: Light', onClick: () => setTheme('light'), shortcut: theme === 'light' ? '✓' : '' }
          ]}
        />

        {/* View Menu */}
        <div className="hidden md:block">
          <MenuDropdown 
            label={<span className="px-2 whitespace-nowrap">View</span>}
            isOpen={activeMenu === 'view'}
            onToggle={() => handleToggle('view')}
            onClose={closeMenu}
            items={[
              { label: 'Overview', href: '#overview', shortcut: '⌘1' },
              { label: 'Contributions', href: '#contributions', shortcut: '⌘2' },
              { label: 'Featured Work', href: '#projects', shortcut: '⌘3' },
              { label: 'Open Source', href: '#opensource', shortcut: '⌘4' },
              { isDivider: true, label: '' },
              { label: 'LinkedIn', href: profileData.linkedin, external: true, shortcut: '↗' },
              { label: 'GitHub', href: profileData.github, external: true, shortcut: '↗' },
              { label: 'LeetCode', href: profileData.leetcode, external: true, shortcut: '↗' },
            ]}
          />
        </div>

        {/* History Menu (Activity) */}
        <div className="hidden lg:block">
          <MenuDropdown 
            label={<span className="px-2 whitespace-nowrap">History</span>}
            isOpen={activeMenu === 'history'}
            onToggle={() => handleToggle('history')}
            onClose={closeMenu}
            items={[
              ...recentHistory,
              { isDivider: true, label: '' },
              { label: 'View Full Activity', href: '#activity', shortcut: '↗' }
            ]}
          />
        </div>

        {/* Help Menu */}
        <div className="hidden lg:block">
          <MenuDropdown 
            label={<span className="px-2 whitespace-nowrap">Help</span>}
            isOpen={activeMenu === 'help'}
            onToggle={() => handleToggle('help')}
            onClose={closeMenu}
            items={[
              { label: 'Financial Literacy Issues', href: 'https://github.com/LifeSimLabs/financial-literacy-simulator/issues', external: true },
              { label: 'ShrFlow Issues', href: 'https://github.com/Runway-Digital-2026/ShrFlow/issues', external: true },
              { isDivider: true, label: '' },
              { label: 'GitHub Profile', href: profileData.github, external: true }
            ]}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap">
        <Search className="w-3.5 h-3.5 cursor-pointer hover:text-accent transition-colors hidden sm:block" />
        <Wifi className="w-3.5 h-3.5 cursor-pointer hover:text-accent transition-colors hidden sm:block" />
        <Battery className="w-3.5 h-3.5 cursor-pointer hover:text-accent transition-colors hidden sm:block" />
        <span className="cursor-default">
          <span className="hidden sm:inline">{formatDate(time)} </span>
          <span>{formatTime(time)}</span>
        </span>
      </div>
    </div>
  );
};


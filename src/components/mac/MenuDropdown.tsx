import { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeProvider';

interface MenuItem {
  label: string;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  shortcut?: string;
  isDivider?: boolean;
}

interface MenuDropdownProps {
  label: React.ReactNode;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({ label, items, isOpen, onToggle, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={menuRef}>
      <div 
        className={`px-2 py-1 rounded cursor-pointer transition-colors ${isOpen ? 'bg-text-primary/10' : 'hover:bg-text-primary/5'}`}
        onClick={onToggle}
      >
        {label}
      </div>

      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-1 min-w-[220px] backdrop-blur-xl rounded-lg shadow-2xl py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150 transition-colors ${
            isLight
              ? 'bg-white text-gray-900 border border-gray-200'
              : 'bg-[#161b22] text-[#c9d1d9] border border-[#30363d]'
          }`}
        >
          {items.map((item, idx) => {
            if (item.isDivider) {
              return <div key={idx} className={`h-px my-1 mx-2 ${isLight ? 'bg-gray-200' : 'bg-[#30363d]'}`} />;
            }

            const content = (
              <div
                className={`flex items-center justify-between px-3 py-1.5 mx-1 rounded text-sm cursor-pointer group transition-colors hover:bg-accent hover:text-white ${
                  isLight ? 'text-gray-800' : 'text-[#c9d1d9]'
                }`}
              >
                <span>{item.label}</span>
                {item.shortcut && (
                  <span className={`group-hover:text-white/70 text-xs ml-4 font-sans ${isLight ? 'text-gray-500' : 'text-[#8b949e]'}`}>
                    {item.shortcut}
                  </span>
                )}
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  onClick={onClose}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  item.onClick?.();
                  onClose();
                }}
              >
                {content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

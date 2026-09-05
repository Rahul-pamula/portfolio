import { MenuBar } from '../components/mac/MenuBar';

import { useTheme } from '../context/ThemeProvider';

export const MacLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div 
      className="h-[100dvh] w-screen overflow-hidden bg-background text-text-primary selection:bg-accent/30 flex flex-col relative transition-colors duration-300"
      style={{
        backgroundImage: 'url(/rahul_background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Subtle consistent overlay to ensure the image is primarily visible without washing out in light mode */}
      <div className={`absolute inset-0 pointer-events-none z-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0d1117]/30' : 'bg-[#0d1117]/30'}`}></div>

      {/* Mac Menu Bar */}
      <MenuBar />

      {/* Main Desktop Area */}
      <main className="flex-1 min-h-0 relative z-10 flex flex-col items-stretch justify-stretch">
        {children}
      </main>

    </div>
  );
};

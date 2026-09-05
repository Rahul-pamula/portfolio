import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import githubData from '../../data/generated/github-data.json';

const getIntensityColor = (level: number) => {
  switch (level) {
    case 1: return 'bg-[#0e4429]';                                         // dim dark green
    case 2: return 'bg-[#006d32]';                                         // medium green
    case 3: return 'bg-[#26a641]';                                         // bright green
    case 4: return 'bg-[#39d353] shadow-[0_0_6px_#39d353]/60';            // vivid glow
    case 5: return 'bg-[#57f576] shadow-[0_0_10px_#57f576]/80 ring-1 ring-[#57f576]/40'; // max glow
    default: return 'bg-[#161b22] border border-[#2d333b]/50'; // always dark — matches bg image
  }
};

export const ContributionHeatmap = () => {
  const days = githubData.contributions?.days || [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ x: number, y: number, text: string } | null>(null);

  // Scroll to the end on mount (to show the most recent days)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  // Calculate weeks
  const weeks: { date: string; count: number; level: number }[][] = [];
  let currentWeek: { date: string; count: number; level: number }[] = [];
  
  days.forEach((day: { date: string; count: number; level: number }) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const handleMouseEnter = (e: React.MouseEvent, day: { date: string; count: number }) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setTooltip({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
      text: `${day.count} contributions on ${new Date(day.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="mt-8 mb-4 relative">
      <h3 className="text-xl font-semibold text-text-primary mb-4">Contribution Activity</h3>
      
      <div className="card-premium p-6 overflow-hidden relative group">
        <div 
          ref={scrollRef}
          className="overflow-x-auto pb-4 scrollbar-thin flex gap-1 justify-start md:justify-end"
        >
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1 flex-shrink-0">
              {week.map((day, dIdx) => (
                <div 
                  key={dIdx}
                  className={`w-3 h-3 rounded-sm ${getIntensityColor(day.level)} hover:ring-1 hover:ring-border transition-all cursor-pointer`}
                  onMouseEnter={(e) => handleMouseEnter(e, day)}
                  onMouseLeave={handleMouseLeave}
                ></div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between text-xs text-text-muted">
          <span>Last 12 months</span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-sm bg-[#161b22] border border-[#2d333b]/50"></span>
              <span className="w-3 h-3 rounded-sm bg-[#0e4429]"></span>
              <span className="w-3 h-3 rounded-sm bg-[#006d32]"></span>
              <span className="w-3 h-3 rounded-sm bg-[#26a641]"></span>
              <span className="w-3 h-3 rounded-sm bg-[#39d353]"></span>
              <span className="w-3 h-3 rounded-sm bg-[#57f576]"></span>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>

      {tooltip && createPortal(
        <div 
          className="fixed z-[9999] pointer-events-none px-3 py-1.5 bg-surface-elevated border border-border text-xs text-text-primary rounded shadow-premium transform -translate-x-1/2 -translate-y-full whitespace-nowrap font-mono"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>,
        document.body
      )}
    </div>
  );
};

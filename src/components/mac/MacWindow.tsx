import React from 'react';

export const MacWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex-1 flex flex-col bg-transparent overflow-hidden relative z-10">
      


      {/* Scrollable Window Content */}
      <div className="flex-1 overflow-y-auto scrollbar-thin relative pb-32">
        <div className="flex flex-col xl:flex-row relative mx-auto w-full max-w-[1600px]">
          {children}
        </div>
      </div>
    </div>
  );
};

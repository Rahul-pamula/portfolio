import React from 'react';
import { Sidebar } from '../components/profile/Sidebar';
import { LiveActivityFeed } from '../components/activity/LiveActivityFeed';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30 flex justify-center">
      <div className="w-full max-w-[1600px] flex flex-col xl:flex-row relative mx-auto">
        <Sidebar />
        
        <main className="flex-1 min-w-0 px-6 py-12 lg:px-12 lg:py-16 flex flex-col gap-12 xl:border-r border-border/50">
          <div className="max-w-4xl mx-auto w-full">
            {children}
          </div>
        </main>

        <div className="hidden xl:block px-6 py-12 lg:py-16">
          <LiveActivityFeed />
        </div>
      </div>
    </div>
  );
};

import { Sidebar } from '../components/profile/Sidebar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row relative">
        <Sidebar />
        <main className="flex-1 min-w-0 px-6 py-12 lg:px-12 lg:py-16 flex flex-col gap-12">
          {children}
        </main>
      </div>
    </div>
  );
};

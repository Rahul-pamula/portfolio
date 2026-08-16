
import { MacLayout } from './layout/MacLayout';
import { Sidebar } from './components/profile/Sidebar';
import { EngineeringIdentity } from './components/about/EngineeringIdentity';
import { FeaturedProjects } from './components/projects/FeaturedProjects';
import { OpenSourceSection } from './components/opensource/OpenSourceSection';
import { GitHubActivity } from './components/activity/GitHubActivity';
import { MoreProjects } from './components/projects/MoreProjects';
import { SupportCard } from './components/support/SupportCard';
import { ContributionHeatmap } from './components/activity/ContributionHeatmap';
import { ContributionStats } from './components/activity/ContributionStats';
import { LiveActivityFeed } from './components/activity/LiveActivityFeed';

function App() {
  return (
    <MacLayout>
      <div className="flex-1 overflow-y-auto scrollbar-thin relative pb-32 w-full">
        <div className="mx-auto w-full max-w-[1600px] p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,_1fr)_280px] 2xl:grid-cols-[300px_minmax(0,_1fr)_300px] gap-6 xl:gap-8 items-start">
            
            {/* Left Floating Panel */}
            <div className="xl:sticky xl:top-8">
              <Sidebar />
            </div>
            
            {/* Main Floating Panel - transparent shell over background image */}
            <main className="flex flex-col gap-10 sm:gap-12 bg-black/15 rounded-3xl border border-white/10 shadow-2xl p-4 sm:p-6 lg:p-10">
              <div className="w-full flex flex-col gap-12">
                <section id="overview">
                  <EngineeringIdentity />
                </section>
                
                <section id="contributions" className="py-6 border-b border-border/50">
                  <ContributionHeatmap />
                  <ContributionStats />
                </section>

                <section id="projects">
                  <FeaturedProjects />
                </section>
                
                <section id="opensource">
                  <OpenSourceSection />
                </section>
                <GitHubActivity />
                
                <div id="activity" className="xl:hidden">
                  <LiveActivityFeed />
                </div>

                <MoreProjects />
                <SupportCard />
              </div>
            </main>

            {/* Right Floating Panel */}
            <div className="hidden xl:block xl:sticky xl:top-8">
              <div id="activity-desktop" className="bg-black/15 rounded-3xl border border-white/10 shadow-2xl p-6">
                <LiveActivityFeed />
              </div>
            </div>

          </div>
        </div>
      </div>
    </MacLayout>
  );
}

export default App;

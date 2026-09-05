import { useEffect } from 'react';
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
import { PersonalIdentity } from './components/profile/PersonalIdentity';
import { ReviewSection } from './components/reviews/ReviewSection';

function App() {
  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      // Find the center of the viewport (where the character is)
      const viewportCenterY = window.innerHeight / 2;
      
      // Select ONLY the outer section cards that we explicitly marked with 'scroll-reveal'
      const mainCards = document.querySelectorAll('#center-column .scroll-reveal');
      
      mainCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        
        // Calculate vertical distance from card center to viewport center
        const distanceToCenter = Math.abs(viewportCenterY - cardCenterY);
        
        // Only make the card transparent if its center is strictly within 
        // the central 150px of the screen (a 300px total band)
        if (distanceToCenter < 150) {
          card.classList.add('center-transparent');
        } else {
          card.classList.remove('center-transparent');
        }
      });
    };

    // Use passive listener for better scroll performance
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also attach to window resize to recalculate viewport center
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Global keyboard scroll handler so up/down arrows work even without focus
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere if user is typing in an input/textarea
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      
      const scrollAmount = 60; // Pixels to scroll per key press
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollContainer.scrollBy({ top: scrollAmount, behavior: 'auto' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollContainer.scrollBy({ top: -scrollAmount, behavior: 'auto' });
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    // Initial check
    handleScroll();
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <MacLayout>
      <div id="main-scroll-container" className="flex-1 overflow-y-auto scrollbar-thin relative pb-32 w-full focus:outline-none" tabIndex={-1}>
        <div className="mx-auto w-full max-w-[1600px] p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,_1fr)_280px] 2xl:grid-cols-[300px_minmax(0,_1fr)_300px] gap-6 xl:gap-8 items-start">
            
            {/* Left Floating Panel */}
            <div className="xl:sticky xl:top-8">
              <Sidebar />
            </div>
            
            {/* Main Content Column */}
            <main id="center-column" className="flex flex-col gap-6 sm:gap-8 w-full">
              <div className="w-full flex flex-col gap-6 sm:gap-8">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="scroll-reveal">
                    <EngineeringIdentity />
                  </div>
                  <section id="contributions" className="card-premium scroll-reveal p-6 sm:p-8 flex flex-col gap-6">
                    <ContributionHeatmap />
                    <ContributionStats />
                  </section>
                </div>

                <section id="reviews" className="card-premium scroll-reveal p-6 sm:p-8">
                  <ReviewSection />
                </section>

                <section id="projects" className="card-premium scroll-reveal p-6 sm:p-8">
                  <FeaturedProjects />
                </section>
                
                <section id="opensource" className="card-premium scroll-reveal p-6 sm:p-8">
                  <OpenSourceSection />
                </section>
                
                <div className="card-premium scroll-reveal p-6 sm:p-8">
                  <GitHubActivity />
                </div>
                
                <div id="activity" className="xl:hidden card-premium scroll-reveal p-6 sm:p-8">
                  <PersonalIdentity />
                </div>

                <div className="card-premium scroll-reveal p-6 sm:p-8">
                  <MoreProjects />
                </div>
                
                <div className="card-premium scroll-reveal p-6 sm:p-8">
                  <SupportCard />
                </div>
              </div>
            </main>

            {/* Right Floating Panel */}
            <div className="hidden xl:block xl:sticky xl:top-8">
              <div id="activity-desktop" className="card-premium p-6 h-[calc(100vh-6rem)] min-h-[650px] overflow-hidden flex flex-col">
                <PersonalIdentity />
              </div>
            </div>

          </div>
        </div>
      </div>
    </MacLayout>
  );
}

export default App;

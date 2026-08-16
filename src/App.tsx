import { MainLayout } from './layout/MainLayout';
import { EngineeringIdentity } from './components/about/EngineeringIdentity';
import { FeaturedProjects } from './components/projects/FeaturedProjects';
import { OpenSourceSection } from './components/opensource/OpenSourceSection';
import { GitHubActivity } from './components/activity/GitHubActivity';
import { MoreProjects } from './components/projects/MoreProjects';
import { SupportCard } from './components/support/SupportCard';

function App() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-16">
        <EngineeringIdentity />
        <FeaturedProjects />
        <OpenSourceSection />
        <GitHubActivity />
        <MoreProjects />
        <SupportCard />
      </div>
    </MainLayout>
  );
}

export default App;

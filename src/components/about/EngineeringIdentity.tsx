import { profileData } from '../../data/profile';
import { ContributorSignal } from '../reviews/ContributorSignal';

export const EngineeringIdentity = () => {
  return (
    <section id="overview" className="card-premium p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-semibold text-text-primary">Engineering Focus</h2>
        <ContributorSignal />
      </div>
      <div className="flex flex-wrap gap-2">
        {profileData.identities.map((identity, i) => (
          <span key={i} className="px-3 py-1 bg-surface border border-border rounded-full text-sm text-text-secondary">
            {identity}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm text-white leading-relaxed max-w-3xl">
        Building scalable, high-performance systems with a strong emphasis on clean architecture and modern developer tools. Passionate about bridging the gap between AI research and production-ready applications, while actively contributing to the open-source ecosystem.
      </p>
    </section>
  );
};

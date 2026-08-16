import { profileData } from '../../data/profile';

export const EngineeringIdentity = () => {
  return (
    <section id="overview" className="py-6">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Engineering Focus</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {profileData.identities.map((identity, i) => (
          <span key={i} className="px-3 py-1 bg-surface border border-border rounded-full text-sm text-text-secondary">
            {identity}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(profileData.skills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-surface/50 border border-border rounded text-xs text-text-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

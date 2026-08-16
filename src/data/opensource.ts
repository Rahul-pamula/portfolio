export interface OpenSourceProject {
  title: string;
  description: string;
  repositoryUrl: string;
  issuesUrl: string;
  discussionsUrl: string;
  technologies: string[];
  isMainFocus: boolean;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: 'Financial Literacy Simulator',
    description: 'An open-source gamified financial life simulator that teaches money management through realistic life decisions.',
    repositoryUrl: 'https://github.com/LifeSimLabs/financial-literacy-simulator',
    issuesUrl: 'https://github.com/LifeSimLabs/financial-literacy-simulator/issues',
    discussionsUrl: 'https://github.com/LifeSimLabs/financial-literacy-simulator/discussions',
    technologies: ['Python', 'Education', 'Simulation'],
    isMainFocus: true,
  },
  {
    title: 'Open Documentation Academy',
    description: 'Learn open-source software documentation skills with practical, hands-on tutorials.',
    repositoryUrl: 'https://github.com/Rahul-pamula/open-documentation-academy',
    issuesUrl: 'https://github.com/Rahul-pamula/open-documentation-academy/issues',
    discussionsUrl: 'https://github.com/Rahul-pamula/open-documentation-academy/discussions',
    technologies: ['Documentation', 'Open Source'],
    isMainFocus: false,
  }
];

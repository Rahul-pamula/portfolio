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
    title: 'CPA Templates',
    description: 'A collection of standardized templates for building Python applications, offering ready-to-use boilerplate and tooling configurations.',
    repositoryUrl: 'https://github.com/Create-Python-App/cpa-templates',
    issuesUrl: 'https://github.com/Create-Python-App/cpa-templates/issues',
    discussionsUrl: 'https://github.com/Create-Python-App/cpa-templates/discussions',
    technologies: ['Python', 'Templates', 'Boilerplate'],
    isMainFocus: false,
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

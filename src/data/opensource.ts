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
    title: 'Open Source Scout',
    description: 'An intelligent AI-powered scout that automatically discovers, analyzes, and categorizes high-quality open-source projects and issues for developers.',
    repositoryUrl: 'https://github.com/Rahul-pamula/open-source-scout',
    issuesUrl: 'https://github.com/Rahul-pamula/open-source-scout/issues',
    discussionsUrl: 'https://github.com/Rahul-pamula/open-source-scout/discussions',
    technologies: ['TypeScript', 'AI', 'Open Source'],
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

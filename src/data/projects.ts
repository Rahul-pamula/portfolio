export interface Project {
  title: string;
  description: string;
  repositoryUrl: string;
  demoUrl?: string;
  technologies: string[];
  language?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'ShrFlow',
    description: 'An engineering backend system featuring campaign management, analytics, multi-tenant architecture, and robust RBAC capabilities.',
    repositoryUrl: 'https://github.com/Runway-Digital-2026/ShrFlow',
    technologies: ['TypeScript', 'Backend', 'Multi-tenant', 'Analytics'],
    language: 'TypeScript',
    featured: true,
  },
  {
    title: 'Chatnalyxer',
    description: 'AI-powered mobile and web app that helps students analyze WhatsApp academic group chats. It securely connects with WhatsApp, monitors real-time messages, filters non-academic content, highlights key discussions, and provides smart summaries.',
    repositoryUrl: 'https://github.com/Rahul-pamula/chatnalyxer',
    technologies: ['TypeScript', 'React', 'AI', 'Node.js'],
    language: 'TypeScript',
    featured: true,
  },
  {
    title: 'Agent Toolkit',
    description: 'Composable AI agent toolkit — skills, agents, loops, and MCP templates for Claude Code, Cursor, OpenCode, Copilot, Windsurf, and Pi.',
    repositoryUrl: 'https://github.com/Rahul-pamula/agent-toolkit',
    demoUrl: 'https://ulises-jeremias.github.io/agent-toolkit-archive/',
    technologies: ['V', 'AI', 'Agents'],
    language: 'V',
    featured: true,
  },
  {
    title: 'MCP Server SDLC',
    description: 'SDLC workflow MCP server for Claude Code agents. Enhances agents with software development life cycle capabilities.',
    repositoryUrl: 'https://github.com/Rahul-pamula/mcp-server-sdlc',
    technologies: ['MCP', 'AI', 'SDLC'],
    featured: true,
  },
  {
    title: 'Fundsroom Infotech',
    description: 'A full-stack Mini ERP + CRM Operations Portal for internal business operations.',
    repositoryUrl: 'https://github.com/Rahul-pamula/fundsroom_infotech',
    technologies: ['TypeScript', 'ERP', 'CRM', 'Full Stack'],
    language: 'TypeScript',
    featured: true,
  },
  {
    title: 'FlavorGraph',
    description: 'A full-stack web application that helps users discover flavor combinations and recipes based on ingredients.',
    repositoryUrl: 'https://github.com/Rahul-pamula/FlavorGraph',
    technologies: ['Python', 'Full Stack'],
    language: 'Python',
    featured: false,
  },
  {
    title: 'StudyPilot',
    description: 'A comprehensive study management application designed to help students track and optimize their learning workflows.',
    repositoryUrl: 'https://github.com/Rahul-pamula/StudyPilot',
    technologies: ['Python'],
    language: 'Python',
    featured: false,
  },
  {
    title: 'Goaframe',
    description: 'A fast, mobile-friendly tool to turn your photo into a branded HH Goa 2026 frame or builder ID card.',
    repositoryUrl: 'https://github.com/Rahul-pamula/goaframe',
    demoUrl: 'https://rahul-pamula.github.io/goaframe/',
    technologies: ['TypeScript'],
    language: 'TypeScript',
    featured: false,
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const moreProjects = projects.filter(p => !p.featured);

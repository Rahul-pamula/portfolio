export interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  date: string;
  description?: string;
  metric?: string;
  skills?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    type: 'work',
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: 'Sep 2025 - Present',
    description: 'Contribute to open-source projects across multiple technology stacks, collaborating with maintainers and contributors worldwide.',
    metric: '1,066 GitHub Contributions in the Last Year 🚀 | 2000+ commits',
  },
  {
    id: 'exp-2',
    type: 'work',
    title: 'Full Stack Engineer',
    organization: 'Freelance',
    date: 'May 2026 - Present',
    description: 'A small tailoring business client approached me to bring their services online, as many of their customers prefer simple and easy-to-use digital solutions.',
    skills: ['catalog'],
  },
  {
    id: 'exp-3',
    type: 'work',
    title: 'Software Engineer - Internship',
    organization: 'Runway Digital Media',
    date: 'Jan 2026 - May 2026',
    description: 'During my time at Runway Digitals, I worked on building and optimizing scalable backend systems and full-stack applications in a fast-paced startup environment.',
    skills: ['Documentation'],
  },
  {
    id: 'exp-4',
    type: 'work',
    title: 'AI & Backend Developer - Apprenticeship',
    organization: 'byteXL',
    date: 'Aug 2025 - Oct 2025',
    description: 'As part of the AI/ML Sprint at ByteXL, I worked on developing an AI-driven system focused on extracting meaningful insights from real-world communication data.',
    skills: ['Chatnalyxer'],
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Bachelor of Technology, Artificial Intelligence and Machine learning',
    organization: 'Parul University',
    date: 'Jul 2023 - Jun 2027',
    metric: 'Grade: 8.12 CGPA',
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'Intermediate MPC',
    organization: 'AAKASH INSTITUTE',
    date: 'May 2021 - May 2023',
    metric: 'Grade: 82.6%',
  },
  {
    id: 'edu-3',
    type: 'education',
    title: 'High School',
    organization: 'Telangana State Model High School',
    date: 'May 2016 - May 2021',
    metric: 'Grade: 9.7 GPA',
  }
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Introduction to SQL',
    issuer: 'DataFlair',
    date: 'Dec 2024',
    credentialId: '7EE7E6B468-7C9983C7F3-736CFA0C6C',
    skills: ['SQL', 'MySQL', 'Database Management', 'Data Querying', 'Relational Databases'],
  },
  {
    id: 'cert-2',
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: 'Mar 2026',
    credentialId: 'yEQe-Dw8X',
  }
];

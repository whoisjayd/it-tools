import { Folder } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ActiveDirectory LDAP properties searcher',
  path: '/ad-ldap-searcher',
  description: 'Search in mapping of LDAP properties and ActiveDirectory UI',
  keywords: ['active', 'directory', 'ad', 'ldap', 'prop', 'searcher'],
  component: () => import('./ad-ldap-searcher.vue'),
  icon: Folder,
  createdAt: new Date('2024-08-15'),
  category: 'Forensic',
});

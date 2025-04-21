import { ListSearch } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Duplicate Lines Finder',
  path: '/duplicate-line-finder',
  description: 'Find and list duplicated lines',
  keywords: ['duplicate', 'line', 'finder'],
  component: () => import('./duplicate-line-finder.vue'),
  icon: ListSearch,
  createdAt: new Date('2025-03-09'),
  category: 'Text',
});

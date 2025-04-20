import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Docker Cheatsheet',
  path: '/docker-memo',
  description: 'Docker command memo',
  keywords: ['docker', 'memo'],
  component: () => import('./docker-memo.vue'),
  icon: BrandDocker,
  createdAt: new Date('2025-03-09'),
  category: 'Cheatsheets',
});

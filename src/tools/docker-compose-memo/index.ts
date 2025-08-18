import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Docker Compose cheatsheet',
  path: '/docker-compose-memo',
  description: 'Docker Compose format cheatsheet',
  keywords: ['docker', 'compose', 'memo', 'cheatsheet'],
  component: () => import('./docker-compose-memo.vue'),
  icon: BrandDocker,
  createdAt: new Date('2025-08-17'),
  category: 'Cheatsheets',
});

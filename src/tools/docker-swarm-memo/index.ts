import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Docker SWARM cheatsheet',
  path: '/docker-swarm-memo',
  description: 'Docker Swarm mode cheatsheet',
  keywords: ['docker', 'swarm', 'memo', 'cheatsheet'],
  component: () => import('./docker-swarm-memo.vue'),
  icon: BrandDocker,
  createdAt: new Date('2025-08-17'),
  category: 'Cheatsheets',
});

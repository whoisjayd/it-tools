import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Docker inspect to Docker run',
  path: '/docker-inspect-to-docker-run',
  description: 'Convert docker inspect command json result back to Docker run command',
  keywords: ['docker', 'inspect', 'run'],
  component: () => import('./docker-inspect-to-docker-run.vue'),
  icon: BrandDocker,
  createdAt: new Date('2025-08-15'),
  category: 'Docker',
});

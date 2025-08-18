import { BrandDocker } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Dockerfile cheatsheet',
  path: '/dockerfile-memo',
  description: 'Dockerfile syntax and build cheatsheet',
  keywords: ['dockerfile', 'memo', 'cheatsheet'],
  component: () => import('./dockerfile-memo.vue'),
  icon: BrandDocker,
  createdAt: new Date('2025-08-17'),
  category: 'Cheatsheets',
});

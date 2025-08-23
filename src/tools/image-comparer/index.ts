import { GitCompare } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Image Comparer',
  path: '/image-comparer',
  description: 'A tool to visualy compare images',
  keywords: ['image', 'comparer'],
  component: () => import('./image-comparer.vue'),
  icon: GitCompare,
  createdAt: new Date('2025-08-15'),
  category: 'Images',
});

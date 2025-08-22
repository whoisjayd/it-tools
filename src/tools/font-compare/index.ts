import { GitCompare } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Font Compare',
  path: '/font-compare',
  description: 'Compare to fonts on a given text',
  keywords: ['font', 'ttf', 'otf', 'compare'],
  component: () => import('./font-compare.vue'),
  icon: GitCompare,
  createdAt: new Date('2025-08-15'),
  category: 'Text',
});

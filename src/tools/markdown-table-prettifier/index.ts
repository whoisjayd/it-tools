import { Markdown } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Markdown Table Prettifier',
  path: '/markdown-table-prettifier',
  description: 'Prettify markdown tables',
  keywords: ['markdown', 'table', 'prettifier'],
  component: () => import('./markdown-table-prettifier.vue'),
  icon: Markdown,
  createdAt: new Date('2025-08-15'),
  category: 'Markdown',
});

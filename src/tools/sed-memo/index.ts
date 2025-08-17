import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Sed cheatsheet',
  path: '/sed-memo',
  description: 'sed unix command cheatsheet',
  keywords: ['sed', 'memo', 'cheatsheet'],
  component: () => import('./sed-memo.vue'),
  icon: FileText,
  createdAt: new Date('2025-08-17'),
  category: 'Cheatsheets',
});

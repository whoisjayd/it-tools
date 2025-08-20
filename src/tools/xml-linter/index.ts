import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'XML Linter',
  path: '/xml-linter',
  description: 'Lint XML content for syntax error',
  keywords: ['xml', 'linter'],
  component: () => import('./xml-linter.vue'),
  icon: Code,
  createdAt: new Date('2025-08-15'),
  category: 'XML',
});

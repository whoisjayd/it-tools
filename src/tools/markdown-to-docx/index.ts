import { Markdown } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Markdown to DOCX',
  path: '/markdown-to-docx',
  description: 'Convert Markdown documents to Word/DOCX document format with live preview and custom styling support.',
  keywords: ['markdown', 'word', 'docx'],
  component: () => import('./markdown-to-docx.vue'),
  icon: Markdown,
  createdAt: new Date('2025-08-15'),
  category: 'Markdown',
});

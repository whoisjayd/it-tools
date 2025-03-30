import { ChartPie } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Mermaid previewer',
  path: '/mermaid-previewer',
  description: 'Mermaid Diagrams Previewer',
  keywords: ['mermaid', 'diagrams', 'previewer'],
  component: () => import('./mermaid-previewer.vue'),
  icon: ChartPie,
  createdAt: new Date('2025-03-09'),
});

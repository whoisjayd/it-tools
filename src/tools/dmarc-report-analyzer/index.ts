import { World } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'DMARC Report Analyzer',
  path: '/dmarc-report-analyzer',
  description: 'Read and display DMARC Xml Reports',
  keywords: ['dmarc', 'report', 'analyzer'],
  component: () => import('./dmarc-report-analyzer.vue'),
  icon: World,
  createdAt: new Date('2025-03-09'),
  category: 'Forensic',
});

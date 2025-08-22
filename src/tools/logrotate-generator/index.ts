import { FileExport } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Apache LogRotate Generator',
  path: '/logrotate-generator',
  description: 'Generate Apache .log rotation configuration',
  keywords: ['logrotate', 'apache', 'generator'],
  component: () => import('./logrotate-generator.vue'),
  icon: FileExport,
  createdAt: new Date('2025-05-08'),
  category: 'Network',
});

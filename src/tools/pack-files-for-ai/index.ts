import { BatteryCharging } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Pack files for AI',
  path: '/pack-files-for-ai',
  description: 'Pack a directory of code source files to a single AI parsable form (like repomix)',
  keywords: ['pack', 'files', 'source', 'code', 'gpt', 'claude', 'repomix', 'ai'],
  component: () => import('./pack-files-for-ai.vue'),
  icon: BatteryCharging,
  createdAt: new Date('2025-08-23'),
  category: 'Text',
});

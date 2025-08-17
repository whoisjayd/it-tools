import { CursorText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Sed Command generator',
  path: '/sed-command-generator',
  description: 'Generate unix sed commands',
  keywords: ['sed', 'command', 'generator'],
  component: () => import('./sed-command-generator.vue'),
  icon: CursorText,
  createdAt: new Date('2025-08-17'),
  category: 'Text',
});

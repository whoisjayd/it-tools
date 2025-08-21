import { Terminal } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Env Variables Format Converter',
  path: '/env-variables-converter',
  description: 'Convert between common env vars format and yaml',
  keywords: ['env', 'environment', 'variables', 'yaml', 'converter'],
  component: () => import('./env-variables-converter.vue'),
  icon: Terminal,
  createdAt: new Date('2024-08-15'),
  category: 'Converters',
});

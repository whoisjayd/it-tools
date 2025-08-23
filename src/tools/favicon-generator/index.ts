import { IconFavicon } from '@tabler/icons-vue';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Favicon Generator',
  path: '/favicon-generator',
  description: 'Generate Favicon and corresponding header',
  keywords: ['favicon', 'generator'],
  component: () => import('./favicon-generator.vue'),
  icon: IconFavicon,
  createdAt: new Date('2025-08-15'),
  category: 'Development',
});

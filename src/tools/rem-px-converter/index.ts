import { Dimensions } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'REM Pixel converter',
  path: '/rem-px-converter',
  description: 'Convert px to rem and vice versa',
  keywords: ['rem', 'px', 'converter'],
  component: () => import('./rem-px-converter.vue'),
  icon: Dimensions,
  createdAt: new Date('2025-03-09'),
  category: 'Web',
});

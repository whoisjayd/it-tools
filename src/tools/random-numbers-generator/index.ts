import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Random numbers generator',
  path: '/random-numbers-generator',
  description: 'Generate random numbers (decimal, hexadecimal). With denied characters, you can generate other bases.',
  keywords: ['random', 'numbers', 'decimal', 'hexadecimal', 'generator'],
  component: () => import('./random-numbers-generator.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2025-08-23'),
  category: 'Generators',
});

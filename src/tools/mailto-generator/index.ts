import { Mail } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Mailto Generator',
  path: '/mailto-generator',
  description: 'Generate a mailto: link href',
  keywords: ['mailto', 'generator', 'link'],
  component: () => import('./mailto-generator.vue'),
  icon: Mail,
  createdAt: new Date('2025-08-17'),
  category: 'Development',
});

import { BrandPython } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Django Secret Generator',
  path: '/django-secret-generator',
  description: 'Generate a Django secret key',
  keywords: ['django', 'secret', 'generator'],
  component: () => import('./django-secret-generator.vue'),
  icon: BrandPython,
  createdAt: new Date('2025-08-17'),
  category: 'Development',
});

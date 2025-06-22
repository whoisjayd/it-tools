import { Copyright } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Watermarker',
  path: '/watermarker',
  description: 'Add watermark or logo to one or more images',
  keywords: ['watermarker'],
  component: () => import('./watermarker.vue'),
  icon: Copyright,
  createdAt: new Date('2025-06-22'),
  category: 'Images',
});

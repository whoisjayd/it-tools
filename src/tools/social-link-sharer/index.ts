import { Share } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Social Link Sharer',
  path: '/social-link-sharer',
  description: 'Generate share link href for common Social Networks',
  keywords: ['social', 'link', 'sharer'],
  component: () => import('./social-link-sharer.vue'),
  icon: Share,
  createdAt: new Date('2025-08-15'),
  category: 'Text',
});

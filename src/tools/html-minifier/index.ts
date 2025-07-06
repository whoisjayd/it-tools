import { BrandHtml5 } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.html-minifier.title'),
  path: '/html-minifier',
  description: translate('tools.html-minifier.description'),
  keywords: ['html', 'minifier'],
  component: () => import('./html-minifier.vue'),
  icon: BrandHtml5,
  createdAt: new Date('2025-07-06'),
  category: 'Web',
});

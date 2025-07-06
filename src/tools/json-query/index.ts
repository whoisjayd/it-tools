import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.json-query.title'),
  path: '/json-query',
  description: translate('tools.json-query.description'),
  keywords: ['json', 'query', 'jsonquery', 'lang'],
  component: () => import('./json-query.vue'),
  icon: Braces,
  createdAt: new Date('2025-07-06'),
  category: 'JSON',
});

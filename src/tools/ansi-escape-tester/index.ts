import { Terminal2 } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.ansi-escape-tester.title'),
  path: '/ansi-escape-tester',
  description: translate('tools.ansi-escape-tester.description'),
  keywords: ['ansi', 'escape', 'tester'],
  component: () => import('./ansi-escape-tester.vue'),
  icon: Terminal2,
  createdAt: new Date('2025-07-06'),
  category: 'Development',
});

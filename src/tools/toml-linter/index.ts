import { defineTool } from '../tool';
import BracketIcon from '~icons/mdi/code-brackets';

export const tool = defineTool({
  name: 'TOML Linter',
  path: '/toml-linter',
  description: 'Lint and check TOML content',
  keywords: ['toml', 'linter'],
  component: () => import('./toml-linter.vue'),
  icon: BracketIcon,
  createdAt: new Date('2025-08-15'),
  category: 'TOML',
});

import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Text Translator',
  path: '/translator',
  description: 'Translate text from one language to another (using opus-mt)',
  keywords: ['translate', 'language'],
  component: () => import('./translator.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2025-08-15'),
  category: 'Text',
});

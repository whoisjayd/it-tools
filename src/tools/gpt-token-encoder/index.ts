import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'GPT Token Encoder/Decoder',
  path: '/gpt-token-encoder',
  description: 'Encode text to GPT tokens and decode GPT tokens back to text',
  keywords: ['gpt', 'llm', 'openai', 'token', 'encode', 'decode'],
  component: () => import('./gpt-token-encoder.vue'),
  icon: FileText,
  createdAt: new Date('2025-08-15'),
  category: 'Text',
});

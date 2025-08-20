import { Binary } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Middle-Endian Converter',
  path: '/middle-endian-converter',
  description: 'Convert bytes from Middle-Endian to Little/Big Endian for given bits precision and type of Middle Endian',
  keywords: ['middle', 'endian', 'converter'],
  component: () => import('./middle-endian-converter.vue'),
  icon: Binary,
  createdAt: new Date('2025-08-15'),
  category: 'Forensic',
});

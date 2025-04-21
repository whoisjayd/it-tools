import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Rune converter',
  path: '/rune-converter',
  description: 'Convert Text to Runes and vice-versa',
  keywords: ['rune', 'converter', 'ElderFuthark', 'Futhorc', 'MedievalFuthork', 'YoungerFuthark'],
  component: () => import('./rune-converter.vue'),
  icon: FileText,
  createdAt: new Date('2024-11-13'),
  category: 'Text',
});

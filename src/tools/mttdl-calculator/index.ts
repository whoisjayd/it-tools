import { SpeedFilled } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'RAID Reliability Calculator',
  path: '/mttdl-calculator',
  description: 'Computes storage system reliability using well-known MTTDL methodology',
  keywords: ['mttdl', 'raid', 'reliability', 'calculator'],
  component: () => import('./mttdl-calculator.vue'),
  icon: SpeedFilled,
  createdAt: new Date('2025-08-15'),
  category: 'Network',
});

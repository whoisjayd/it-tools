import { Hammer } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Resistor Calculator',
  path: '/resistor-calculator',
  description: 'Compute Resistor values from/to band colors',
  keywords: ['resistor', 'ohm', 'calculator'],
  component: () => import('./resistor-calculator.vue'),
  icon: Hammer,
  createdAt: new Date('2025-08-15'),
  category: 'Forensic',
});

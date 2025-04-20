import { Alarm } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Countdown',
  path: '/countdown',
  description: 'Countdown and alarm at ellapsed duration',
  keywords: ['countdown'],
  component: () => import('./countdown.vue'),
  icon: Alarm,
  createdAt: new Date('2025-03-09'),
  category: 'Datetime',
});

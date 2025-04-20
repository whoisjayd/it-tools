import { Alarm } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Time Alarm',
  path: '/time-alarm',
  description: 'Alarm at a specific date and time',
  keywords: ['time', 'alarm'],
  component: () => import('./time-alarm.vue'),
  icon: Alarm,
  createdAt: new Date('2025-03-09'),
  category: 'Datetime',
});

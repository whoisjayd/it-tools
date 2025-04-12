import { CalendarTime } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Pomodoro Timer',
  path: '/pomodoro-timer',
  description: 'Basic Pomodoro Timer',
  keywords: ['pomodoro', 'timer'],
  component: () => import('./pomodoro-timer.vue'),
  icon: CalendarTime,
  createdAt: new Date('2025-03-09'),
  category: 'Development',
});

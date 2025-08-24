import { CalendarStats } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Which Day?',
  path: '/which-day',
  description: 'Given a day and month, and years range, list all day of week a given date is',
  keywords: ['which', 'weekday', 'date', 'year', 'day'],
  component: () => import('./which-day.vue'),
  icon: CalendarStats,
  createdAt: new Date('2025-08-23'),
  category: 'Datetime',
});

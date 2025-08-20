import { Database } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'SQL Parameters Generator',
  path: '/sql-parameters',
  description: 'Prepare SQL statement from a given parametrized SQL query and parameters',
  keywords: ['sql', 'select', 'insert', 'parameters'],
  component: () => import('./sql-parameters.vue'),
  icon: Database,
  createdAt: new Date('2025-08-15'),
  category: 'Development',
});

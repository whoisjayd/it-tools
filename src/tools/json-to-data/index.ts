import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON to Data',
  path: '/json-to-data',
  description: 'Convert JSON to CSV, SQL Insert, YAML, Markdown, XML and XLSX',
  keywords: ['json', 'excel', 'csv', 'xlsx', 'sql', 'yaml', 'insert', 'markdown', 'md', 'tsv', 'xml'],
  component: () => import('./json-to-data.vue'),
  icon: Braces,
  createdAt: new Date('2025-08-15'),
  category: 'JSON',
});

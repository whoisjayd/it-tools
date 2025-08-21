import { Link } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Wireguard Config Generator',
  path: '/wireguard-config-generator',
  description: 'Generate Wireguard Server and Clients configuration files',
  keywords: ['wireguard', 'config', 'generator'],
  component: () => import('./wireguard-config-generator.vue'),
  icon: Link,
  createdAt: new Date('2025-08-15'),
  category: 'Network',
});

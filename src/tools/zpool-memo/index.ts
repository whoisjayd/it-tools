import { DeviceDesktop } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ZPool Cheatsheet',
  path: '/zpool-memo',
  description: 'OpenZFS/ZPool usage commands and info',
  keywords: ['zpool', 'raid', 'cheatsheet', 'zfs', 'openzfs'],
  component: () => import('./zpool-memo.vue'),
  icon: DeviceDesktop,
  createdAt: new Date('2025-08-15'),
  category: 'Network',
});

import { DeviceDesktop } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'ZPOOL RAID calculator',
  path: '/zpool-calculator',
  description: 'Determine the usable capacity and other metrics of a ZFS storage pool and compare layouts including stripe, mirror, RAIDZ1, RAIDZ2, RAIDZ3, and dRAID.',
  keywords: ['zpool', 'raid', 'calculator', 'zfs', 'openzfs'],
  component: () => import('./zpool-calculator.vue'),
  icon: DeviceDesktop,
  createdAt: new Date('2025-08-15'),
  category: 'Network',
});

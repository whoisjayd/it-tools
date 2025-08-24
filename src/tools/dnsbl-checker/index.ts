import { MailForward } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'DNSBL Checker',
  path: '/dnsbl-checker',
  description: 'Check if a given IP is in any of known DNS Blacklist servers (spam block)',
  keywords: ['dnsbl', 'block', 'dns', 'checker'],
  component: () => import('./dnsbl-checker.vue'),
  icon: MailForward,
  createdAt: new Date('2025-08-15'),
  category: 'Network',
});

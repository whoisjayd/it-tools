import { DeviceMobileMessage } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Unicode to GSM-7',
  path: '/unicode-to-gsm7',
  description: 'Encode unicode text to SMS GSM-7 encoding and display related SMS send info',
  keywords: ['unicode', 'segment', 'sms', 'gsm7'],
  component: () => import('./unicode-to-gsm7.vue'),
  icon: DeviceMobileMessage,
  createdAt: new Date('2025-08-15'),
  category: 'Text',
});

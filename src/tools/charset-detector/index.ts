import { FileText } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Text Charset Detector/Decoder',
  path: '/charset-detector',
  description: 'Detect text possible charsets and allow to decode using each detected encoding',
  keywords: ['charset', 'ascii', 'iso', 'utf8', 'unicode', 'encoding', 'decode', 'text', 'detector'],
  component: () => import('./charset-detector.vue'),
  icon: FileText,
  createdAt: new Date('2025-03-09'),
  category: 'Forensic',
});

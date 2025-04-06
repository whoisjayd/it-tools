import { ColorSwatch } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Color Contrast Checker',
  path: '/color-contrast-checker',
  description: 'Check the WCAG constrast level between two colors',
  keywords: ['color', 'contrast', 'checker', 'wcag'],
  component: () => import('./color-contrast-checker.vue'),
  icon: ColorSwatch,
  createdAt: new Date('2025-03-09'),
  category: 'Web',
});

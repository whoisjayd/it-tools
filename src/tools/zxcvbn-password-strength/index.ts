import { defineTool } from '../tool';
import PasswordIcon from '~icons/mdi/form-textbox-password';

export const tool = defineTool({
  name: 'Zxcvbn Password Strength',
  path: '/zxcvbn-password-strength',
  description: 'Compute a given password strength using zxcvbn',
  keywords: ['zxcvbn', 'password', 'strength'],
  component: () => import('./zxcvbn-password-strength.vue'),
  icon: PasswordIcon,
  createdAt: new Date('2025-08-15'),
  category: 'Network',
});

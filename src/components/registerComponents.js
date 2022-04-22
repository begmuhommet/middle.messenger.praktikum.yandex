import { registerPartial } from '../utils/registerPartial';

import button from './button';
import input from './input';
import link from './link';

export function registerComponents() {
  registerPartial('button', button);
  registerPartial('input', input);
  registerPartial('link', link);
}

import Handlebars from 'handlebars';

export function compileScreen(template) {
  return Handlebars.compile(template);
}

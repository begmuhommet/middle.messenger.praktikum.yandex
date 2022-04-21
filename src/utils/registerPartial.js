import Handlebars from 'handlebars';

export function registerPartial(name, template) {
  Handlebars.registerPartial(name, template);
}

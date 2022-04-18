import Handlebars from 'handlebars';
import buttonTmpl from '../templates/partials/button.tmpl';
import inputTmpl from '../templates/partials/input.tmpl';
import linkTmpl from '../templates/partials/link.tmpl';

export function registerPartials() {
  Handlebars.registerPartial('button', buttonTmpl);
  Handlebars.registerPartial('link', linkTmpl);
  Handlebars.registerPartial('input', inputTmpl);
}

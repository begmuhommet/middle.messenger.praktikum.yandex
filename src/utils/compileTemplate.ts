import * as Handlebars from "handlebars";

export function compileTemplate(template) {
  return Handlebars.compile(template);
}

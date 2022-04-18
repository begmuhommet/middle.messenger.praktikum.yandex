import Handlebars from 'handlebars';
import authTmpl from '../templates/screens/auth.tmpl';
import errorTmpl from '../templates/screens/error.tmpl';

export const authScreen = Handlebars.compile(authTmpl);
export const errorScreen = Handlebars.compile(errorTmpl);

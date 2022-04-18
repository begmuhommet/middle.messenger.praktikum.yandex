import { registerPartials } from './partials';
import { authScreen } from './screens';
import loginData from '../data/loginData';

registerPartials();

function renderApp(screen, data) {
  const app = document.getElementById('app');
  app.innerHTML = screen(data);
}

renderApp(authScreen, loginData);

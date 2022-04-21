import { registerComponents } from './components/registerComponents';
import { authScreen } from './modules/auth/authScreen';
import loginData from './modules/auth/loginData';
import registrationData from './modules/auth/registrationData';
import { chatScreen } from './modules/chat/chatScreen';
import error404Data from './modules/error/error404Data';
import { errorScreen } from './modules/error/errorScreen';
import mainData from './modules/main/mainData';
import { mainScreen } from './modules/main/mainScreen';
import { routes } from './routes';
import { render } from './utils/render';

export function renderScreen() {
  switch (window.location.pathname) {
    case routes.main:
      render(mainScreen(mainData));
      break;
    case routes.login:
      render(authScreen(loginData));
      break;
    case routes.registration:
      render(authScreen(registrationData));
      break;
    case routes.error:
      render(errorScreen(error404Data));
      break;
    case routes.chat:
      render(chatScreen({}));
      break;
  }
}

registerComponents();
renderScreen();

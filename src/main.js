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
  if (window.location.pathname.includes(routes.login)) {
    return render(authScreen(loginData));
  }

  if (window.location.pathname.includes(routes.registration)) {
    return render(authScreen(registrationData));
  }

  if (window.location.pathname.includes(routes.error)) {
    return render(errorScreen(error404Data));
  }

  if (window.location.pathname.includes(routes.chat)) {
    return render(chatScreen({}));
  }

  return render(mainScreen(mainData));
}

registerComponents();
renderScreen();

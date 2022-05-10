import LoginScreen from "./modules/auth/LoginScreen";
import RegisterScreen from "./modules/auth/RegisterScreen";
import ChatScreen from "./modules/chat/ChatScreen";
import ErrorScreen from "./modules/error/ErrorScreen";
import MainScreen from "./modules/main/MainScreen";
import ProfileScreen from "./modules/profile/ProfileScreen";
import { Routes } from "./routes";
import { render } from "./utils/render";

export function renderScreen() {
  const pathname = window.location.pathname;

  if (pathname.includes(Routes.Login)) {
    return render(new LoginScreen());
  }

  if (pathname.includes(Routes.Register)) {
    return render(new RegisterScreen());
  }

  if (pathname.includes(Routes.Error)) {
    return render(new ErrorScreen());
  }

  if (pathname.includes(Routes.Chat)) {
    return render(new ChatScreen());
  }

  if (pathname.includes(Routes.Profile)) {
    return render(new ProfileScreen());
  }

  return render(new MainScreen({}));
}

document.addEventListener("DOMContentLoaded", () => {
  renderScreen();
});

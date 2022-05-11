import { Routes } from "../../../routes";
import { IRegisterProps } from "../types/AuthTypes";

const registerData: IRegisterProps = {
  title: "Registration",
  link: "Sign in",
  href: Routes.Login,
  button: "Register",
  emailInput: {
    name: "email",
    type: "text",
    placeholder: "Email",
    isRequired: true,
    label: "Email",
    errorText: "Email Error",
  },
  loginInput: {
    name: "login",
    type: "text",
    placeholder: "Login",
    isRequired: true,
    label: "Login",
    errorText: "Login Error",
  },
  firstNameInput: {
    name: "first_name",
    type: "text",
    placeholder: "First Name",
    isRequired: true,
    label: "First Name",
    errorText: "First Name Error",
  },
  secondNameInput: {
    name: "second_name",
    type: "text",
    placeholder: "Second name",
    isRequired: true,
    label: "Second name",
    errorText: "Second name Error",
  },
  phoneInput: {
    name: "phone",
    type: "text",
    placeholder: "Phone",
    isRequired: true,
    label: "Phone",
    errorText: "Phone Error",
  },
  passwordInput: {
    name: "password",
    type: "text",
    placeholder: "Password",
    isRequired: true,
    label: "Password",
    errorText: "Password Error",
  },
  passwordRepeatInput: {
    name: "password_repeat",
    type: "text",
    placeholder: "Password repeat",
    isRequired: true,
    label: "Password repeat",
    errorText: "Password repeat Error",
  },
};

export default registerData;

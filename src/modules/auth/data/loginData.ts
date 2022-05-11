import { Routes } from "../../../routes";
import { ILoginProps } from "../types/AuthTypes";

const loginData: ILoginProps = {
  title: "Sign in",
  link: "Registration",
  href: Routes.Register,
  button: "Sign in",
  loginInput: {
    name: "login",
    type: "text",
    placeholder: "Login",
    isRequired: true,
    label: "Login",
    errorText: "Login Error",
  },
  passwordInput: {
    name: "password",
    type: "password",
    placeholder: "Password",
    isRequired: true,
    label: "Password",
    errorText: "Password error",
  },
};

export default loginData;

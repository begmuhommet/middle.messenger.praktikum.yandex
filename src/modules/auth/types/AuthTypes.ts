import { IInput } from "../../../types/MainTypes";

export interface ILoginProps {
  title: string;
  link: string;
  href: string;
  button: string;
  loginInput: IInput;
  passwordInput: IInput;
}

export interface IRegisterProps {
  title: string;
  link: string;
  href: string;
  button: string;
  emailInput: IInput;
  loginInput: IInput;
  firstNameInput: IInput;
  secondNameInput: IInput;
  phoneInput: IInput;
  passwordInput: IInput;
  passwordRepeatInput: IInput;
}

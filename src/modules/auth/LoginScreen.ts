import Block from "../../base/Block";
import { Button } from "../../components/Button";
import { ButtonTypes } from "../../components/Button/types";
import Input from "../../components/Input";
import Link from "../../components/Link";
import loginData from "./data/loginData";
import templateLogin from "./templates/templateLogin";

export default class LoginScreen extends Block {
  constructor() {
    super({});
  }

  protected initChildren() {
    this.children.button = new Button({
      label: loginData.button,
      type: ButtonTypes.Submit,
    });
    this.children.loginInput = new Input({ ...loginData.loginInput });
    this.children.passwordInput = new Input({ ...loginData.passwordInput });
    this.children.link = new Link({
      label: loginData.link,
      href: loginData.href,
    });
  }

  protected componentDidUpdate(oldProps: any, newProps: any): boolean {
    return super.componentDidUpdate(oldProps, newProps);
  }

  protected componentDidMount() {
    const form = this._element.querySelector("#form") as HTMLFormElement;
    form.addEventListener("submit", this.getFormData);
  }

  protected getFormData(event: SubmitEvent) {
    event.preventDefault();

    const inputs = (event.target as HTMLFormElement).querySelectorAll("input");
    const formData: Record<string, string> = {};

    inputs.forEach((input: HTMLInputElement) => {
      formData[input.name] = input.value;
    });

    console.log(formData);
  }

  protected render() {
    return this.compile(templateLogin, { title: "Login" });
  }
}

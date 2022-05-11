import Block from "../../base/Block";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import registerData from "./data/registerData";
import templateRegister from "./templates/templateRegister";

export default class RegisterScreen extends Block {
  constructor() {
    super({});
  }

  protected initChildren() {
    this.children.button = new Button({ label: registerData.button });
    this.children.emailInput = new Input({ ...registerData.emailInput });
    this.children.loginInput = new Input({
      ...registerData.loginInput,
    });
    this.children.firstNameInput = new Input({
      ...registerData.firstNameInput,
    });
    this.children.secondNameInput = new Input({
      ...registerData.secondNameInput,
    });
    this.children.passwordInput = new Input({ ...registerData.passwordInput });
    this.children.passwordRepeatInput = new Input({
      ...registerData.passwordRepeatInput,
    });
    this.children.link = new Link({
      label: registerData.link,
      href: registerData.href,
    });
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
    return this.compile(templateRegister, { title: "Registration" });
  }
}

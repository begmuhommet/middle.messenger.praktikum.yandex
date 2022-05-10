import Block from "../../base/Block";
import { Button } from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import loginData from "./data/loginData";
import templateLogin from "./templateLogin";

export default class LoginScreen extends Block {
  constructor() {
    super({});
  }

  protected initChildren() {
    this.children.button = new Button({ label: loginData.button });
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

  protected render() {
    return this.compile(templateLogin, { title: "Login" });
  }
}

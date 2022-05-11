import Block from "../../base/Block";
import Link from "../../components/Link";
import { Routes } from "../../routes";
import template from "./templates/template";

export default class MainScreen extends Block {
  protected initChildren() {
    this.children.loginScreenLink = new Link({
      label: "Login",
      href: Routes.Login,
    });
    this.children.registrationScreenLink = new Link({
      label: "Registration",
      href: Routes.Register,
    });
    this.children.chatScreenLink = new Link({
      label: "Chat",
      href: Routes.Chat,
    });
    this.children.errorScreenLink = new Link({
      label: "Error",
      href: Routes.Error,
    });
  }

  protected render() {
    return this.compile(template, { title: "Messenger" });
  }
}

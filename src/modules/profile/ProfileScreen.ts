import Block from "../../base/Block";
import { Button } from "../../components/Button";
import template from "./templates/template";

export default class ProfileScreen extends Block {
  constructor() {
    super({});
  }

  protected initChildren() {
    this.children.button = new Button({ label: "Save" });
  }

  protected render() {
    return this.compile(template, {});
  }
}

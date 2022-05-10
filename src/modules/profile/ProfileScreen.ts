import Block from "../../base/Block";
import template from "./template";

export default class ProfileScreen extends Block {
  constructor() {
    super({});
  }

  protected render() {
    return this.compile(template, {});
  }
}

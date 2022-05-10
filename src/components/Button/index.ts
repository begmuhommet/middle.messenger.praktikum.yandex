import Block from "../../base/Block";
import template from "./template";
import { IButtonProps } from "./types";

export class Button extends Block {
  constructor(props: IButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

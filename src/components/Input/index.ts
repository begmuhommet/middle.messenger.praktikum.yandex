import Block from "../../base/Block";
import template from "./template";
import { IInputProps } from "./types";

export default class Input extends Block {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

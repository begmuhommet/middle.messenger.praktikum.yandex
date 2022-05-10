import Block from "../../base/Block";
import template from "./template";
import { ILinkProps } from "./types";

export default class Link extends Block {
  constructor(props: ILinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

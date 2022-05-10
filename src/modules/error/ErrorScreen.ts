import Block from "../../base/Block";
import Link from "../../components/Link";
import Error404Data from "./data/error404Data";
import template from "./template";

export default class ErrorScreen extends Block {
  constructor() {
    super({});
  }

  protected initChildren() {
    this.children.link = new Link({
      label: Error404Data.link,
      href: Error404Data.href,
    });
  }

  protected render() {
    return this.compile(template, {
      errorCode: Error404Data.errorCode,
      errorDescription: Error404Data.errorDescription,
    });
  }
}

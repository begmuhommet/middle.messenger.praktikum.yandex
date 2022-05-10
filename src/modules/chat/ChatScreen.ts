import Block from "../../base/Block";
import ChatFriend from "./ChatFriend";
import templateScreen from "./templateScreen";

export default class ChatScreen extends Block {
  constructor() {
    super({});
  }

  protected initChildren() {
    this.children.friend = new ChatFriend({});
  }

  protected render() {
    return this.compile(templateScreen, {});
  }
}

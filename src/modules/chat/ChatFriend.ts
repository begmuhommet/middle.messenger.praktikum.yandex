import Block from "../../base/Block";
import templateFriend from "./templateFriend";

export default class ChatFriend extends Block {
  constructor(props) {
    super(props);
  }

  protected render() {
    return this.compile(templateFriend, { ...this.props });
  }
}

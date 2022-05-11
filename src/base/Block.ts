import * as Handlebars from "handlebars";
import { v4 } from "uuid";
import EventBus from "./EventBus";

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  protected eventBus: EventBus;
  protected _element: HTMLElement | null = null;
  private _id = v4();

  private _meta: { props: any };
  protected props: any;
  protected children: Record<string, Block>;

  constructor(propsAndChildren: any) {
    this.eventBus = new EventBus();

    const { props, children } =
      this._separatePropsAndChildren(propsAndChildren);

    this.children = children;
    this._meta = { props };

    this.props = this._makePropsProxy(props);

    this.initChildren();
    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected init() {
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  private _render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  private _addEvents() {
    const events: Record<string, () => void> = this.props.events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.addEventListener(event, listener);
    });
  }

  private _removeEvents() {
    const events: Record<string, () => void> = this.props.events;

    if (!events || this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.removeEventListener(event, listener);
    });
  }

  public setProps(nextProps) {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  public getContent(): HTMLElement {
    return this._element;
  }

  private _makePropsProxy(props: any) {
    return new Proxy(props, {
      set: (target: any, prop: string | symbol, value: any): boolean => {
        const oldTarget = { ...target };
        target[prop] = value;

        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      get: (target: any, prop: string | symbol): any => {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      deleteProperty: () => {
        throw new Error(`Property can't deleted`);
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected initChildren() {}

  private _separatePropsAndChildren(propsAndChildren: any) {
    if (!propsAndChildren) {
      return { props: {}, children: {} };
    }

    const props: any = {};
    const children: Record<string, Block> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  protected compile(template: string, context: any) {
    const fragment = document.createElement("template") as HTMLTemplateElement;

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        context[key] = child.map((val) => `<div data-id="id-${val.id}"></div>`);
        return;
      }

      context[key] = `<div data-id="id-${child._id}"></div>`;
    });

    fragment.innerHTML = Handlebars.compile(template)(context);

    Object.entries(this.children).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(
        `[data-id="id-${child._id}"]`
      );

      if (!stub) {
        return;
      }

      stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }
}

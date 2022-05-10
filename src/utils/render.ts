import Block from "../base/Block";

export function render(component: Block) {
  const rootElement = document.getElementById("app");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  component.dispatchComponentDidMount();
  rootElement.innerHTML = "";

  rootElement.append(component.getContent());
}

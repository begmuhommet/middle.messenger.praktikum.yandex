type listener = (...args: unknown[]) => void;

export default class EventBus {
  private listeners: Record<string, listener[]> = {};

  public on(event: string, callback: listener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: listener): void {
    if (!this.listeners[event]) {
      throw new Error("Event not found");
    }

    this.listeners[event] = this.listeners[event].filter(
      (event) => event !== callback
    );
  }

  public emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      throw new Error(`Event ${event} not found`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

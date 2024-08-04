type Listener = (data: any) => void;

class EventSystem {
  private listeners: { [key: string]: Listener[] };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event: string, data: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }
}

export const eventSystem = new EventSystem();
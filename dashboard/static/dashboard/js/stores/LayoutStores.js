import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class LayoutStores extends EventEmitter {
  constructor() {
    super();
  }

  handleActions(action) {
    switch(action.type) {
      case "NAV_TOGGLE": {
        this.emit("toggleSidebar")
        break;
      }
    }
  }
}

const layoutStores = new LayoutStores;

dispatcher.register(layoutStores.handleActions.bind(layoutStores));

export default layoutStores;

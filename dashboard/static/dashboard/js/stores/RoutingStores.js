import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class RoutingStores extends EventEmitter {
  constructor() {
    super();
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_SESSION_SUCCESS": {
        console.log("getsessionsuccess")
        this.emit("getsessionsuccess", true)
        break;
      }
      case "GET_SESSION_FAIL": {
        console.log("getsessionfail")
        this.emit("getsessionfail", false)
        break;
      }
      case "LOGGED_IN": {
        console.log("Logged in")
        this.emit("loggedin", true)
        break;
      }
      case "LOGGED_OUT": {
        this.emit("loggedout")
        break;
      }
    }
  }
}

const routingStores = new RoutingStores;

dispatcher.register(routingStores.handleActions.bind(routingStores));

export default routingStores;

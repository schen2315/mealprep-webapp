import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class LoginStores extends EventEmitter {
  constructor() {
    super();
  }

  handleActions(action) {
    switch(action.type) {
      case "PENDING_VALID_NEW_USER": {
        break;
      }
      case "IS_VALID_NEW_USER": {
        this.emit("isvalidnewuser", action.data)
      }
      case "CREATE_NEW_USER_FAIL": {
        this.emit("createnewuserfail")
      }
      case "CREATE_NEW_USER_SUCCESS": {
        this.emit("createnewusersuccess")
      }
    }
  }
}

const loginStores = new LoginStores;

dispatcher.register(loginStores.handleActions.bind(loginStores));

export default loginStores;

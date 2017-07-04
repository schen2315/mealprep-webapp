import React from "react";
import { IndexLink, Link } from "react-router";

import * as LoginActions from "../../actions/LoginActions"
import LoginStores from "../../stores/LoginStores"

export default class Thankyou extends React.Component {
  constructor() {
    super();
    this.notifyUser = this.notifyUser.bind(this)
    this.message = "Please wait for a response"
  }
  componentWillMount() {
    LoginStores.on("createnewusersuccess", () => {this.notifyUser(true)})
    LoginStores.on("createnewuserfail", () => {this.notifyUser(false)})
  }
  componentWillUnmount() {
    LoginStores.removeListener("createnewusersuccess", () => {this.notifyUser(true)})
    LoginStores.removeListener("createnewuserfail", () => {this.notifyUser(false)})
  }
  notifyUser(message) {
    if(message) this.message = "Your account was successfully created!"
    else this.message = "Your account failed to be created. Please try again."
    this.setState({render: true})
  }
  render() {

    return (
      <div>
        <p>Thank you for signing up for an account. You should be able to login now.</p>
        <p>{this.message}</p>
      </div>
    );
  }
}

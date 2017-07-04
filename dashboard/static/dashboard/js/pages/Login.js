import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import * as LoginActions from "../actions/LoginActions"
import LoginStores from "../stores/LoginStores"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.updateFields = this.updateFields.bind(this);
    this.state = {
      disableSubmit: false
    }
    this.fields = {
      email: '',
      password: ''
    }
  }
  componentWillMount() {
  }
  componentWillUnmount() {
  }
  loginUser() {
    //put a loader in
    //disable submit button
    this.setState({disableSubmit: true})
    //activate a loginAction
    LoginActions.loginUser(this.fields)
  }
  updateFields(field, e) {
    let value = e.target.value;
    this.fields[field] = value;
    this.setState({render: true})
  }
  render() {
    return (
      <div class="login">
        <h2 class="login-title">Login</h2>
        <div>
          <form>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" placeholder="Enter email"
              onChange={(e) => this.updateFields("email", e)} value={this.fields.email}/>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="email" class="form-control" placeholder="Password" type="password"
                onChange={(e) => this.updateFields("password", e)} value={this.fields.password}/>
            </div>
            <button class="btn btn-primary"
              onClick={this.loginUser} disabled={this.state.disableSubmit}>Submit</button>
            <span class={this.state.disableSubmit ? "": "display-component-none"}><i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i></span>
            <span class="login-signup">Don't have an account? <Link to="/signup">Signup</Link></span>
          </form>
        </div>
      </div>
    );
  }
}

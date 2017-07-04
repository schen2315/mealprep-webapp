import React from "react";
import { Link } from "react-router-dom";

import * as LoginActions from "../actions/LoginActions"
import LoginStores from "../stores/LoginStores"

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.isValid = this.isValid.bind(this)
    this.notifyUser = this.notifyUser.bind(this)
    this.submit = this.submit.bind(this)
    this.form = {
      first: '',
      last: '',
      username: '',
      password: '',
      'password_again': '',
      email: ''
    }
    this.notifs = {}
    this.disableSubmit = true;
  }
  componentWillMount() {
    LoginStores.on("isvalidnewuser", this.notifyUser)
  }
  componentWillUnmount() {
    LoginStores.removeListener("isvalidnewuser", this.notifyUser)
  }
  isValid(e, entry) {
    this.form[entry] = e.target.value
    this.setState({render: true});
    LoginActions.isValidNewUser(this.form);
  }
  notifyUser(data) {
    this.notifs = data;
    this.disableSubmit = false;
    for (let key of Object.keys(this.notifs)) {
      if(this.notifs[key] != 'OK') this.disableSubmit = true;
    }
    this.setState({render:true})
  }
  submit(e) {
    LoginActions.createUser(this.form)
    this.props.history.push('/login/thankyou')
  }
  render() {
    return (
      <div class="signup">
        <h2>Signup</h2>
        <p>Please fill in all entries:</p>
        <div>
          <form>
            <div class="form-group">
              <label>First Name</label>
              <input class="form-control" placeholder="First Name"
                onChange={(e) => this.isValid(e, "first")} value={this.form.first}/>
              <pre class="signup-notif">{this.notifs.first}</pre>
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input class="form-control" placeholder="Last Name"
                onChange={(e) => this.isValid(e, "last")} value={this.form.last}/>
                <pre class="signup-notif">{this.notifs.last}</pre>
            </div>
            <div class="form-group">
              <label>Username</label>
              <input class="form-control" placeholder="Username"
                onChange={(e) => this.isValid(e, "username")} value={this.form.username}/>
              <pre class="signup-notif">{this.notifs.username}</pre>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <input class="form-control" placeholder="Enter email"
                onChange={(e) => this.isValid(e, "email")} value={this.form.email}/>
              <pre class="signup-notif">{this.notifs.email}</pre>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input class="form-control" placeholder="Password" type="password"
                onChange={(e) => this.isValid(e, "password")} value={this.form.password}/>
              <pre>{this.notifs.password}</pre>
            </div>
            <div>
              <label>Retype Password</label>
              <input class="form-control" placeholder="Enter Password Again" type="password" 
                onChange={(e) => this.isValid(e, "password_again")} value={this.form.password_again}/>
              <pre>{this.notifs.password_again}</pre>
            </div>
            <button class="btn btn-primary"
              disabled={this.disableSubmit} onClick={this.submit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

import React from "react";
import { IndexLink, Link } from "react-router";

export default class Login extends React.Component {

  render() {

    return (
      <div class="login">
        <h2 class="login-title">Login</h2>
        <div>
          <form>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="email" class="form-control" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <span class="login-signup"><Link to="/signup">Signup</Link></span>
          </form>
        </div>
      </div>
    );
  }
}

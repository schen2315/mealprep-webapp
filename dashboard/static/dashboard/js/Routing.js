import React from "react";
//import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { BrowserRouter, Route, IndexRoute, hashHistory, MemoryRouter } from "react-router-dom";

import Calendar from "./pages/Calendar";
import Home from "./pages/Home"
import Layout from "./pages/Layout";
import Login from "./pages/Login"
import Nutrition from "./pages/Nutrition";
import * as RoutingActions from "./actions/RoutingActions"
import RoutingStores from "./stores/RoutingStores"
import Settings from "./pages/Settings"
import Signup from "./pages/Signup"
import Shopping from "./pages/Shopping";
import Spendings from "./pages/Spendings";
import Thankyou from "./components/Login/Thankyou.js"

  //do this using actions & stores whenever a user logs in & out
  //expose only certain routes
  //use these routes as props
  //that get passed into layout and eventually into sidebar

export default class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.loadRoutes = this.loadRoutes.bind(this)
    this.redirect = this.redirect.bind(this)
    this.state = {
      session: false
    }
  }
  componentWillMount() {
    RoutingStores.on("getsessionsuccess", this.loadRoutes)
    RoutingStores.on("getsessionfail", this.loadRoutes)
    RoutingStores.on("loggedin", this.redirect)
    RoutingStores.on("loggedout", this.loadRoutes)
    //call async last
    RoutingActions.getSession()
  }
  componentWillUnmount() {
    RoutingStores.removeListener("getsessionsuccess", this.loadRoutes)
    RoutingStores.removeListener("getsessionfail", this.loadRoutes)
    RoutingStores.removeListener("loggedin", this.loadRoutes)
    RoutingStores.removeListener("loggedout", this.loadRoutes)
  }
  loadRoutes(load) {
    //redirect user if not authenticated
    if(load) this.setState({session: load})
    //else this.props.history.push('/login')
  }
  redirect() {
    this.setState({session:true})
    this.props.history.push('/');
  }
  render() { 
    //check if a user is logged in and only expose certain paths through here
    let loggedin = [<Route key="1" exact path="/" component={Calendar}></Route>,
                    <Route key="2" path="/nutrition" component={Nutrition}></Route>,
                    <Route key="3" path="/shopping" component={Shopping}></Route>,
                    <Route key="4" path="/spendings" component={Spendings}></Route>,
                    <Route key="5" path="/settings" component={Settings}></Route>]
    let loggedout = [
        <Route key="1" exact path="/" component={Home}></Route>,
        <Route key="2" exact path="/login" component={Login} history={this.props.history}></Route>,
        <Route key="3" exact path="/signup" component={Signup} history={this.props.history}></Route>,
        <Route key="4" exact path="/login/thankyou" component={Thankyou}></Route>
    ]
    return (
      <Layout session={this.state.session}> 
        {this.state.session && loggedin}
        {!this.state.session && loggedout}
      </Layout>
    );
  }
}

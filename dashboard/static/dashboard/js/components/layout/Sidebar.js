import React from "react";
import {IndexLink, Link, NavLink} from "react-router-dom";

import LayoutStores from "../../stores/LayoutStores"
import * as LayoutActions from "../../actions/LayoutActions"
import CustomLink from "./CustomLink"

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this)
    this.state = {
      collapsed: true,
    }
  }
  componentWillMount() {
    LayoutStores.on("toggleSidebar", this.toggle);
  }

  componentWillUnmount() {
    LayoutStores.removeListener("toggleSidebar", this.toggle);
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  toggleCollapse() {
    this.setState({
      collapsed: true
    })
  }
  render() {
    //console.log(this.props.session)
    const collapsed = this.state.collapsed ? "sidebar-collapsed" : "";
    let loggedinmenu = [
                 <CustomLink key="1" to="/" label="Calendar" onClick={this.toggleCollapse} />,
                 <CustomLink key="2" to="/nutrition" label="Nutrition" onClick={this.toggleCollapse} />,
                 <CustomLink key="3" to="/shopping" label="Shopping" onClick={this.toggleCollapse} />,
                 <CustomLink key="4" to="/spendings" label="Spendings" onClick={this.toggleCollapse} />,
                 <CustomLink key="5" to="/settings" label="Settings" onClick={this.toggleCollapse} />,
                        <li key="6" ><a href="/logoutuser">Logout</a></li>
                       ]
    let loggedoutmenu = [
      <CustomLink key="1" to="/" label="Home" onClick={this.toggleCollapse}/>,
      <CustomLink key="2" to="/login" label="Login" onClick={this.toggleCollapse} />  
    ]
    return (
        <div class={"col-sm-3 sidenav sidebar " + collapsed}>
          <br></br>
        <ul class="nav nav-pills nav-stacked">
            {this.props.session && loggedinmenu}
            {!this.props.session && loggedoutmenu}
          </ul>
        </div>
    );
  }
}

import React from "react";
import { IndexLink, Link } from "react-router";

import LayoutStores from "../../stores/LayoutStores"
import * as LayoutActions from "../../actions/LayoutActions"

export default class Sidebar extends React.Component {
  constructor() {
    super();
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
      collapsed: false
    })
  }
  render() {
    const { location } = this.props;
    const calendarClass = location.pathname === "/" ? "active" : "";
    const nutritionClass = location.pathname.match(/^\/nutrition/) ? "active" : "";
    const shoppingClass = location.pathname.match(/^\/shopping/) ? "active" : "";
    const spendingsClass = location.pathname.match(/^\/spendings/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const loginClass = location.pathname.match(/^\/login/) ? "active" : "";
    const collapsed = this.state.collapsed ? "sidebar-collapsed" : "";


    console.log(location.pathname)
    return (
        <div class={"col-sm-3 sidenav sidebar " + collapsed}>
          <br></br>
          <ul class="nav nav-pills nav-stacked">
            <li class={calendarClass}>
                <IndexLink to="/" onClick={this.toggleCollapse}>Calendar</IndexLink>
            </li>
            <li class={nutritionClass}>
                <Link to="/nutrition" onClick={this.toggleCollapse}>Nutrition</Link>
            </li>
            <li class={shoppingClass}>
                <Link to="/shopping" onClick={this.toggleCollapse}>Shopping</Link>
            </li>
            <li class={spendingsClass}>
                <Link to="/spendings" onClick={this.toggleCollapse}>Spendings</Link>
            </li>
            <li class={settingsClass}>
                <Link to="/settings" onClick={this.toggleCollapse}>Settings</Link>
            </li>
            <li class={loginClass}>
                <Link to="/login" onClick={this.toggleCollapse}>Login</Link>
            </li>
          </ul>
        </div>
    );
  }
}

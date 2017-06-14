import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav"
import Sidebar from "../components/layout/Sidebar"

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div class="layout">
        <div class="container-fluid">
          <Nav />
          <div class="row content">
            <Sidebar location={location} />
            <div class="col-md-9 col-sm-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

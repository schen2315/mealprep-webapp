import React from "react";
import Link from "react-router-dom";

import Nav from "../components/layout/Nav"
import Sidebar from "../components/layout/Sidebar"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="layout">
        <div class="container-fluid">
          <Nav />
          <div class="row content">
            <Sidebar location={this.props.location} session={this.props.session}/>
            <div class="col-md-9 col-sm-9">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

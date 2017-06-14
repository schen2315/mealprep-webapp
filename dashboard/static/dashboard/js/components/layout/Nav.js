import React from "react";

import LayoutStore from "../../stores/LayoutStores"
import * as LayoutActions from "../../actions/LayoutActions"

export default class Nav extends React.Component {
  constructor() {
    super();
    this.nav_toggle = this.nav_toggle.bind(this);
    this.state = {
      collapsed: true,
    }
  }
  nav_toggle() {
    LayoutActions.nav_toggle()
  }
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
         <div class="container">
             {/* <!-- Brand and toggle get grouped for better mobile display --> */}
             <div class="navbar-header">
                 <button type="button" class="navbar-toggle collapsed nav-menu" onClick={this.nav_toggle}>
                     <span class="sr-only">Toggle navigation</span>
                     <i class="fa fa-bars"></i>
                     <span>Menu</span>
                 </button>
             </div>
             {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
             <div class="collapse navbar-collapse">
                 <ul class="nav navbar-nav navbar-left">
                     <li>
                         <a class="nav-item" href="/">Home</a>
                     </li>
                 </ul>
                 <div class="navbar-header navbar-nav navbar-right">
                     <a class="navbar-brand page-scroll" href="#">
                         <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                     </a>
                 </div>
             </div>
             {/* <!-- /.navbar-collapse --> */}
         </div>
         {/* <!-- /.container-fluid --> */}
      </nav>
    );
  }
}

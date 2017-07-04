import React from "react";
import { Link, Route } from "react-router-dom";

const CustomLink = ({ label, to, onClick }) => (
  <Route exact path={to} children={({ match }) => (
      <li class={match ? 'active': ''} onClick={onClick}><Link to={to}>{label}</Link></li>
  )}/>
)

export default CustomLink;
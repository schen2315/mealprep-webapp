import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Calendar from "./pages/Calendar";
import Layout from "./pages/Layout";
import Login from "./pages/Login"
import Nutrition from "./pages/Nutrition";
import Settings from "./pages/Settings"
import Signup from "./pages/Signup"
import Shopping from "./pages/Shopping";
import Spendings from "./pages/Spendings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Calendar}></IndexRoute>
      <Route path="nutrition" component={Nutrition}></Route>
      <Route path="shopping" component={Shopping}></Route>
      <Route path="spendings" component={Spendings}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="signup" component={Signup}></Route>
    </Route>
  </Router>,
app);

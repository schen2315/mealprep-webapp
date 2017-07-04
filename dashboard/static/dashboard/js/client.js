import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import { BrowserRouter, Route } from "react-router-dom";

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Route render={ ({history}) => (
      <Routing history={history}/> 
    )}/>
  </BrowserRouter>,
app);

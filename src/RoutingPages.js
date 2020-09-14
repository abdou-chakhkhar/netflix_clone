import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import LandingPage from "./LandingPage";

function RoutingPages() {
  return (
    <Router>
      <Switch>
        <Route exact path="/app">
          <App />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default RoutingPages;

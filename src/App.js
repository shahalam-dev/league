import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/league/:id">
            <LeagueDetail></LeagueDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

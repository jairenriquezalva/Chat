import React from "react";
import "./styles.css";
import Chat from "./Chat";
import Page2 from "./Page2";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="Header">
          <h1>
            <Link to="/Page1">I'll route to page1</Link>
          </h1>
          <h1>
            <Link to="/Page2">I'll route to page2</Link>
          </h1>
          <h1>I'll route to page3</h1>
        </div>
        <Switch>
          <Route path="/Page1">
            <Chat />
          </Route>
          <Route path="/Page2">
            <Page2 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

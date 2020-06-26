import React from "react";
import "./styles.css";
import Chat from "Chat.js";
import Page2 from "Page2";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header className="Header">
          <Link to="/Page1">I'll route to page1</Link>
          <Link to="/Page2">I'll route to page2</Link>
        </header>
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

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "components/header/Header";
import MainPage from "pages/MainPage";
import ChatPage from "pages/ChatPage";
import Page2 from "pages/Page2";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/Page1">
          <ChatPage />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </Router>
  );
}

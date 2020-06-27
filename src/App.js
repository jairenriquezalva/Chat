import React from "react";
import styled from "styled-components";
import Chat from "Chat.js";
import Page2 from "Page2";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover{
    color: gray;
  }
  &:active{
    color: black;
  }
`

const StyledRouter = styled(Router)`
  text-align: center;
`

const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 10px 4px;
  background-color: #cc9999;
  color: white;
  font-family: courier;
  @media(min-width: 600px){
    display: flex;
    justify-content: space-evenly;  
  }
`

export default function App() {
  return (
    <StyledRouter>
      <Header className="Header">
        <StyledLink to="/Page1">I'll route to page1</StyledLink>
        <StyledLink to="/Page2">I'll route to page2</StyledLink>
      </Header>
      <Switch>
        <Route path="/Page1">
          <Chat />
        </Route>
        <Route path="/Page2">
          <Page2 />
        </Route>
      </Switch>
    </StyledRouter>
  );
}

import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledHeader = styled.header`
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

const Header = () => (
    <StyledHeader>
        <StyledLink to="/Page1">I'll route to page1</StyledLink>
        <StyledLink to="/Page2">I'll route to page2</StyledLink>
    </StyledHeader>
)

export default Header;
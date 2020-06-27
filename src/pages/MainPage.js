import React from "react";
import styled from "styled-components";
import Container from "components/Container"

const StyledTitle = styled.h2`
    font-weight: lighter;
    color: #aa5555;
`

const MainPage = ()=>(
    <Container>
        <StyledTitle>REAL TIME CHAT</StyledTitle>
    </Container>
)

export default MainPage;
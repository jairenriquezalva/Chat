import React from 'react';
import styled from 'styled-components'

const StyledTitle = styled.h1`
    padding: 0;
    margin: 0;
    text-align: center;
    font-weight: bold;
    color: #35646a;
`

const ChatHeader = ()=>(
    <StyledTitle>
        Live Chat
    </StyledTitle>    
)

export default ChatHeader;
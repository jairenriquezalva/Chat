import React from 'react';
import styled from 'styled-components';
import {FaAngleDown} from 'react-icons/fa';

const StyledTitle = styled.h1`
    display: flex;
    box-sizing: border-box;
    justify-content: space-evenly;
    padding: 10px;
    margin: 0;
    text-align: center;
    font-weight: bold;
    color: #35646a;
    background-color: white;
`

const Expand = styled(FaAngleDown)`
    transition: color 0.25s;
    &:hover{
        color: black;
    }
`

const ChatHeader = ()=>(
    <StyledTitle>
        Live Chat 
            <Expand/>
    </StyledTitle>    
)

export default ChatHeader;
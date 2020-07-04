import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const Box = styled.div`
  padding-top: 5px;
  background-color: #eeeeee;
  overflow-y: scroll;
  border-radius: 5px;
  height: 300px;
  margin-top: 5px;
`

const ChatContent = ({messages}) => {
    return (
    <Box>
        {messages.map((m,index)=><Message key={index} sender={m.sender}>{m.text}</Message>)}
    </Box>
    )
}

export default ChatContent;
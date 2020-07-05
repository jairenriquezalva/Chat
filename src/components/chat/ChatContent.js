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

const Container = styled.div`
  padding: 10px;
`

const ChatContent = ({messages}) => {
    return (
    <Container>
      <Box>
        {messages.map((m,index)=><Message key={index} sender={m.sender}>{m.text}</Message>)}
      </Box>
    </Container>
    )
}

export default ChatContent;
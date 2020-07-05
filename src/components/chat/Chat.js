import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatSettings from './ChatSettings';
import ChatForm from './ChatForm.js';
import ChatContent from './ChatContent';
import socket from './Socket';

const ChatContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #bccbbc;
  border: 2px solid #35646a;
  box-shadow: inset 0px 0px 4px #00000051;
`

const Chat = () => {
  const [messages, setMessages] = useState([]);

  socket.onmessage = manageMessageRecived;

  function chatSendMessage(message) {
    socket.send(JSON.stringify({context: 'chat', type:'sendMessage', value: message}));
  }

  function modifyNickname(nickname){
    socket.send(JSON.stringify({context: 'lobby', type:'changeNickname', value: nickname}))
  }

  function manageMessageRecived(msg) {
    var msg = JSON.parse(msg.data);
    console.log(msg);
    if(msg.type == "message")
      setMessages(messages.concat(msg.value));
  }

  return (
    <ChatContainer>
      <ChatHeader/>
      <ChatSettings action={modifyNickname}/>
      <ChatContent messages={messages}/>
      <ChatForm action={chatSendMessage}/>
    </ChatContainer>
  );
}

export default Chat;
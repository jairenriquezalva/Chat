import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatSettings from './ChatSettings';
import ChatForm from './ChatForm.js';
import ChatContent from './ChatContent';
import socket from './Socket';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
  width: 250px;
  padding: 0px 30px;
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
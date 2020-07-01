import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Message from 'components/chat/Message';
import ChatHeader from 'components/chat/ChatHeader';
import ChatSettings from 'components/chat/ChatSettings';
import ChatForm from 'components/chat/ChatForm.js';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 500px;
  width: 250px;
  padding: 0px 30px;
`
const ChatContent = styled.div`
  padding-top: 5px;
  background-color: #eeeeee;
  overflow-y: scroll;
  border-radius: 5px;
  height: 300px;
  margin-top: 5px;
`
const wsUri = "ws://localhost:3000/";
const protocol = 'echo-protocol';

const Chat = () => {
  const [ChatSocket, setChatSocket] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!ChatSocket) {
      var sock = new WebSocket(wsUri,protocol);
      sock.onopen = manageOnOpen;
      sock.onmessage = manageMessageRecived;
      setChatSocket(sock);
    }
  }, [ChatSocket]);

  function manageOnOpen(e){}

  function chatSendMessage(message) {
    ChatSocket.send(JSON.stringify({context: 'chat', type:'sendMessage', value: message}));
  }

  function modifyNickname(nickname){
    ChatSocket.send(JSON.stringify({context: 'lobby', type:'changeNickname', value: nickname}))
  }

  function manageMessageRecived(msg) {
    var msg = JSON.parse(msg.data);
    console.log('context :'+msg.context);
    console.log('type:' + msg.type);
    console.log('value:' + msg.value);
    messages.push(msg);
    setMessages(messages.map(v=>v));
    console.log(messages)
  }

  return (
    <ChatContainer>
      <ChatHeader/>
      <ChatSettings action={modifyNickname}/>
      <ChatContent>
        {messages.map((val)=><Message key={1}>{val.value}</Message>)}
      </ChatContent>
      <ChatForm action={chatSendMessage}/>
    </ChatContainer>
  );
}

export default Chat;
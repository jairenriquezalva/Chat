import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import Message from 'components/chat/Message';
import ChatSettings from 'components/chat/ChatSettings'

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

export default function Chat() {
  const [ChatSocket, setChatSocket] = useState();
  const [messages, setMessages] = useState([]);
  const ChatMessageInput = useRef("");

  useEffect(() => {
    if (!ChatSocket) {
      var sock = new WebSocket(wsUri,protocol);
      sock.onopen = manageOnOpen;
      sock.onmessage = manageMessageRecived;
      setChatSocket(sock);
    }
  }, [ChatSocket]);

  function manageOnOpen(e) {}

  function manageSubmit(e) {
    e.preventDefault();
    ChatSocket.send(JSON.stringify({context: 'chat', type:'message', value: ChatMessageInput.current.value}));
    ChatMessageInput.current.value = "";
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
      <h2>Chat</h2>
      <ChatSettings socket={ChatSocket}/>
      <ChatContent>
        {messages.map((val)=><Message key={1}>{val.value}</Message>)}
      </ChatContent>
      <div>
        <form onSubmit={e => manageSubmit(e)} autoComplete="off">
          <input ref={ChatMessageInput} type="text" placeholder="message" />
          <input type="submit" />
        </form>
      </div>
    </ChatContainer>
  );
}



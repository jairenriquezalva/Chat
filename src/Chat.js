import React, { useState, useEffect, useRef } from "react";

import "./Chat.css";

var wsUri = "wss://localhost:44342/ws";

export default function Chat() {
  const [ChatSocket, setChatSocket] = useState();
  const ChatMessageInput = useRef("");

  useEffect(() => {
    if (!ChatSocket) {
      var sock = new WebSocket(wsUri);
      sock.onopen = manageOnOpen;
      sock.onmessage = manageMessageRecived;
      setChatSocket(sock);
    }
  }, [ChatSocket]);

  function manageOnOpen(e) {}

  function manageSubmit(e) {
    e.preventDefault();
    ChatSocket.send(ChatMessageInput.current.value);
    ChatMessageInput.current.value = "";
  }

  function manageMessageRecived(msg) {
    console.log(msg.data);
  }

  return (
    <div className="ChatContainer">
      <h1>Chat</h1>
      <div className="ChatContent">ChatContent</div>
      <div>
        <form onSubmit={e => manageSubmit(e)} autoComplete="off">
          <input ref={ChatMessageInput} type="text" placeholder="message" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

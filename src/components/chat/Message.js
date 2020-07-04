import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
    position: relative;
    margin-top: 5px;
`
const ChatMessage = styled.div`
    padding: 5px;
    position: relative;
    right: -82px;
    background: ${(props)=>props.color};
    width: 150px;
    border-radius: 8px;
    border-top-right-radius: 0;
    box-sizing: border-box;
`
const MessageTail = styled.div`
    top: 0;
    position: absolute;
    right: 0;
    display: block;
    background-color: ${(props)=>props.color};
    height: 5px;
    width: 5px;
    z-index: 2;
    border-bottom-right-radius: 20px;
`
const MessageHeader = styled.div`
    font-size: 8px;
`

function Message(props){
    let color = 'white';
    if(props.src=="sended"){
        color = '#aaf2aa';
    }
    return (
        <MessageContainer>
            <ChatMessage className="ChatMessage" color={color}>
                <MessageHeader>{props.sender}</MessageHeader>
                {props.children}
            </ChatMessage>
            <MessageTail className="ChatMessageTail" color={color}/>
        </MessageContainer>
    )
}

export default Message;
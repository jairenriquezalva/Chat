import React,{useRef} from 'react'
import styled from 'styled-components'

function ChatSettings(props){
    const nicknameInput = useRef(null);
    return (
        <div>
            <h2>Nickname:</h2>
            <input ref={nicknameInput} type="text"></input>
            <button onClick={handleNickChange}>Change</button>
        </div>
    )    
    function handleNickChange(){
        const newNick = nicknameInput.current.value;
        props.socket.send(JSON.stringify({context: 'lobby', type: 'nickname', value: newNick}));
    }
}

export default ChatSettings;
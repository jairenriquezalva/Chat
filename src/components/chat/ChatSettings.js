import React,{useRef} from 'react'
import {StyledButton,StyledTextbox,FlexContainer} from 'components/StyledComponents'

const ChatSettings = (props)=>{

    const nicknameInput = useRef(null);

    function handleNickChange(e){
        e.preventDefault();
        let newNick = nicknameInput.current.value;
        props.action(newNick);              
        nicknameInput.current.value = "";
    }

    return (
        <FlexContainer>
            <StyledTextbox ref={nicknameInput} placeholder="nickname"></StyledTextbox>
            <StyledButton onClick={handleNickChange}></StyledButton>
        </FlexContainer>
    )    
}

export default ChatSettings;
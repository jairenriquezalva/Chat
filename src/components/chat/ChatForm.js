import React,{useRef} from 'react';
import {StyledButton,StyledTextbox,FlexContainer} from 'components/StyledComponents';

const ChatForm = (props)=>{
    
    const input = useRef(null);

    const manageSubmit = (e)=>{
        e.preventDefault();
        let msg = input.current.value;
        props.action(msg);
        input.current.value = "";
    }

    return (
        <FlexContainer>
            <StyledTextbox ref={input} placeholder="message" />
            <StyledButton onClick={manageSubmit} />
        </FlexContainer>
    )
}

export default ChatForm;
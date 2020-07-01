import styled from 'styled-components';

const StyledButton = styled.button`
    box-sizing: border-box;
    height: 1.5em;
    width: 40px;
    border: 1px solid;
    outline: none;
    background: #35646a;
    &:active{
        background: white;
    }
    &:focus{
        opacity: 0.6;
    }
    &:hover{
        opacity: 0.6;
    }
`
const StyledTextbox = styled.input.attrs({type: "text"})`
    box-sizing: border-box;
    margin: 5px;
    height: 1.5em;
    min-width: 50px;
    border: 1px solid #35646a;
    outline: none;
    background: white;
    &:focus{
        background: #e5f4ea;
    }
    padding-top: 3px;
    caret-color: #35646a;
    font-family: 'Courier New', Courier, monospace;
`

const FlexContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export {StyledButton,StyledTextbox,FlexContainer};

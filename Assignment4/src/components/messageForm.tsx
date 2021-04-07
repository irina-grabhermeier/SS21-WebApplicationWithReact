import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Button = styled.button`
color: blue;
width: fit-content;
height: fit-content;
text-align: center;
font-size: medium;
background-color: white;
margin: 10pt`

const TextArea = styled.textarea`
color: blue;
min-width: 100%;
height: fit-content;
font-size: medium;
background-color: white;
margin: 10pt
`

const Input = styled.input`
color: blue;
min-width: 100%;
height: fit-content;
font-size: medium;
background-color: white;
margin: 10pt
`

export default function MessageForm(props : {onAddMessage: (headerText:string, bodyText:string) => void}) {

    const [headerInput, setHeaderInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");
    const formRef = useRef<HTMLFormElement>();

    return (
        <form ref={() => formRef} id="messageForm" onSubmit={(event) => {
            event.preventDefault();
            props.onAddMessage(headerInput, bodyInput)
            event.currentTarget.reset();
            }}>
            <div className="form-group">
                <label htmlFor="headerInput">Header</label>
                <Input name="headerInput" className="form-control" id="headerInput" required onChange={(event) => setHeaderInput(event.target.value)}></Input>
            </div>
            <div className="form-group">
                <label htmlFor="bodyInput">Body</label>
                <TextArea name="bodyInput" className="form-control" id="bodyInput" required onChange={(event) => setBodyInput(event.target.value)}></TextArea>
            </div>
            <Button id="submitButton" type="submit">submit</Button>
        </form>

    );
}
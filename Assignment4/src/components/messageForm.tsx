import React, {useState, useRef} from 'react';

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
                <input name="headerInput" className="form-control" id="headerInput" required onChange={(event) => setHeaderInput(event.target.value)}></input>
            </div>
            <div className="form-group">
                <label htmlFor="bodyInput">Body</label>
                <input name="bodyInput" className="form-control" id="bodyInput" required onChange={(event) => setBodyInput(event.target.value)}></input>
            </div>
            <button id="submitButton" className="btn btn-secondary" type="submit">submit</button>
        </form>

    );
}
import React, {useState} from "react";
import ReactDOM from "react-dom";
import MessageForm from './components/messageForm';
import Messages from './components/messages';
import Message from './components/message';
import { ThemeProvider } from "styled-components";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

const themes = {
  light:{
    backgroundColor: "white"
  },
  dark:{
    backgroundColor: "black"
  }
}

const App = () => {

  const [allMessages] = useState(new Array<Message>());
  const [display, setDisplay] = useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(allMessages.filter(msg => msg.isUnread).length);


  const onShowAddMessages = () => {
    setDisplay(true);
  };

  const onShowMessages = () => {
    setDisplay(false);
  }

  const onAddMessage = (headerText:string, bodyText:string) => {

    const newMsg = new Message(headerText, bodyText, true);

    allMessages.push(newMsg);

    setUnreadMessagesCount(allMessages.filter(msg => msg.isUnread).length);
  }

  const onMessageRead = () => {
    setUnreadMessagesCount(allMessages.filter(msg => msg.isUnread).length);
  }

  const handleSwitch = (event) => {
    
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
          <span className="navbar-brand" id="addMessagesSpan" onClick={onShowAddMessages}>
              Add new message
          </span>
          <span className="navbar-brand" id="messagesSpan" onClick={onShowMessages}>
              Messages ({(unreadMessagesCount > 5) ? '5+' : unreadMessagesCount} new)
          </span>
      </nav>
      <FormControlLabel
        control={
          <Switch
            onChange={handleSwitch}
            color="primary"
          />
        }
        label="Dark Theme"
      />
      {display && <MessageForm onAddMessage={onAddMessage}/>}
      {!display && <Messages allMessages={allMessages} onUpdate={onMessageRead} />}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

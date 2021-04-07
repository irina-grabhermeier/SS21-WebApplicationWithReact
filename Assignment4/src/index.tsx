import React, { useState } from "react";
import ReactDOM from "react-dom";
import MessageForm from './components/messageForm';
import Messages from './components/messages';
import Message from './components/message';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/themes";
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear;
}
div {
background:  ${({ theme }) => theme.background};
}
  `

const App = () => {

  const [allMessages] = useState(new Array<Message>());
  const [display, setDisplay] = useState(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(allMessages.filter(msg => msg.isUnread).length);
  const [theme, setTheme] = useState(LightTheme);

  const onShowAddMessages = () => {
    setDisplay(true);
  };

  const onShowMessages = () => {
    setDisplay(false);
  }

  const onAddMessage = (headerText: string, bodyText: string) => {

    const newMsg = new Message(headerText, bodyText, true);

    allMessages.push(newMsg);

    setUnreadMessagesCount(allMessages.filter(msg => msg.isUnread).length);
  }

  const onMessageRead = () => {
    setUnreadMessagesCount(allMessages.filter(msg => msg.isUnread).length);
  }

  const handleSwitch = (event) => {
    (theme === LightTheme) ? setTheme(DarkTheme) : setTheme(LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ padding: 10 }}>
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
        {display && <MessageForm onAddMessage={onAddMessage} />}
        {!display && <Messages allMessages={allMessages} onUpdate={onMessageRead} />}
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useState } from 'react';
import Message from './message';
import styled from 'styled-components';

const ListItem = styled.li`
background-color: ${(props: { isUnread: boolean }) => props.isUnread ? "lightblue" : "wheat"};
color: black;
padding:5pt;
border: solid 1px;
`

const Banner = styled.p`
color: red;
visibility: ${(props: { isVisible: boolean }) => props.isVisible ? "visible" : "hidden"};`

export default function Messages(props: { allMessages: Array<Message>, onUpdate: () => void }) {

    const [unreadMessages, setUnreadMessages] = useState(props.allMessages.filter(msg => msg.isUnread).length);

    const onMessageClicked = (message: Message) => {
        message.isUnread = false;
        setUnreadMessages(props.allMessages.filter(msg => msg.isUnread).length);
        props.onUpdate();
    }

    return (
        <div id="messagesContainer">
            <h2>Messages</h2>
            <Banner isVisible={(unreadMessages > 0) ? true : false}>{unreadMessages + ' new messages.'}</Banner>

            <ul className="list-group" id="listOfMessages">

                {props.allMessages.map(msg => <ListItem key={msg.uuid} isUnread={msg.isUnread}
                    onDoubleClick={(event) => { event.preventDefault; onMessageClicked(msg) }}>
                    <p style={{ fontWeight: "bold" }}>{msg.headerText}</p>
                    <p>{msg.bodyText}</p>
                </ListItem>)}

            </ul>
        </div>
    );
}
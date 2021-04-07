import React, {useState} from 'react';
import Message from './message';
import styled from 'styled-components';

export default function Messages(props : {allMessages: Array<Message>, onUpdate : () => void}) {

    const [unreadMessages, setUnreadMessages] = useState(props.allMessages.filter(msg => msg.isUnread).length);

    const onMessageClicked = (message:Message) => {
        message.isUnread = false;
        setUnreadMessages(props.allMessages.filter(msg => msg.isUnread).length);
        props.onUpdate();
    }

    const ListItem = styled.li`
    background-color: ${(props: {isUnread: boolean}) => props.isUnread ? "lightblue" : "wheat"};
    margin: 5pt;`
    
    return(
        <div id="messagesContainer">
            <h2>Messages</h2>
            <p style={{ color: 'red' }}>{(unreadMessages > 0) ? unreadMessages + ' new messages.' : ''}</p>

            <ul className="list-group" id="listOfMessages">

                {props.allMessages.map(msg => <ListItem key={msg.uuid} isUnread={msg.isUnread}
                    onDoubleClick={(event)=>{ event.preventDefault; onMessageClicked(msg)}}> 
                    <p style={{fontWeight: "bold"}}>{msg.headerText}</p>
                    <p>{msg.bodyText}</p>
                </ListItem>)}

            </ul>
        </div>
    );
}
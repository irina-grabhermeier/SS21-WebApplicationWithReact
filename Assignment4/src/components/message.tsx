import React, {useState} from 'react';
import uuid from 'react-uuid';

class Message {
    
    headerText: string;
    bodyText: string;
    isUnread: boolean;
    uuid: string;

    constructor(headerText:string, bodyText: string, isUnread: boolean){
        this.headerText = headerText;
        this.bodyText = bodyText;
        this.isUnread = isUnread;
        this.uuid = uuid();
    }

}

export default Message;
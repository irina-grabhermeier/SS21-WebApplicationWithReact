
const addMessageContainer = document.getElementById('addMessageContainer');
const messagesContainer = document.getElementById('messagesContainer');
const listOfMessages = document.getElementById('listOfMessages'); //ul
const addMessageForm = document.getElementById('messageForm');
const amountMessagesNavigation = document.getElementById('amountMessagesNavigation');
const amountUnreadMessagesParagraph = document.getElementById('amountUnreadMessagesParagraph');

messagesContainer.style.display = 'none';

function onAddMessageContainerClick() {
    addMessageForm.reset();
    messagesContainer.style.display = 'none';
    addMessageContainer.style.display = 'block';
}

function onMessagesContainerClick() {
    addMessageContainer.style.display = 'none';
    messagesContainer.style.display = 'block';
    showMessages();

}

const allMessages = [];

addMessageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(addMessageForm);

    const headerInput = formData.get('headerInput');
    const bodyInput = formData.get('bodyInput');

    const message = new Message(headerInput, bodyInput, true);

    allMessages.push(message);
    updateDisplayingUnreadMessages();

    addMessageForm.reset();

});

function showMessages() {

    listOfMessages.innerHTML = '';

    allMessages.forEach(m => {
        const ht = document.createElement('p');
        const bt = document.createElement('p');
        const listItem = document.createElement('li');

        ht.style.fontWeight = 'bold';

        listItem.className = 'list-group-item';

        ht.innerHTML = m.headerText;
        bt.innerHTML = m.bodyText;

        listItem.appendChild(ht);
        listItem.appendChild(bt);

        if (m.isUnread) {
            listItem.style.backgroundColor = 'lightblue';
        } else {
            listItem.style.backgroundColor = 'wheat';
        }

        listItem.addEventListener('dblclick', function () {
            m.isUnread = false;
            listItem.style.backgroundColor = 'wheat';
            updateDisplayingUnreadMessages();
        });

        listOfMessages.appendChild(listItem);
    });

}

function updateDisplayingUnreadMessages() {

    let unreadMessages = 0;
    allMessages.forEach(m => {
        if (m.isUnread) {
            unreadMessages++;
        }
    });

    if (unreadMessages <= 5) {
        amountMessagesNavigation.innerHTML = `(${unreadMessages} new)`;
    } else {
        amountMessagesNavigation.innerHTML = '(5+ new)';
    }

    if (unreadMessages > 0) {
        amountUnreadMessagesParagraph.innerHTML = `(You have ${unreadMessages} new messages!)`;
    } else {
        amountUnreadMessagesParagraph.innerHTML = '';
    }
}

class Message {

    constructor(headerText, bodyText, isUnread) {
        this.headerText = headerText;
        this.bodyText = bodyText;
        this.isUnread = isUnread;
    }

}


const addMessageContainer = document.getElementById('addMessageContainer');
const messagesContainer = document.getElementById('messagesContainer');

messagesContainer.style.display = 'none';

function onAddMessageContainerClick() {
    messagesContainer.style.display = 'none';
    addMessageContainer.style.display = 'block';
}

function onMessagesContainerClick() {
    addMessageContainer.style.display = 'none';
    messagesContainer.style.display = 'block';

}

const allMessages = [];


const addMessageForm = document.getElementById('messageForm');


addMessageForm.addEventListener('submit', function (event) {
    const formData = new FormData(addMessageForm);

    const headerInput = formData.get('headerInput');
    const bodyInput = formData.get('bodyInput');

    if ((headerInput !== '' && headerInput !== undefined) || (bodyInput !== '' && bodyInput !== undefined)) {

        const message = new Message(headerInput, bodyInput, true);

        allMessages.push(message);
        console.log(message);

        addMessageForm.reset();

    }
});

function messagesLoaded() {
    const listOfMessages = document.getElementById('listOfMessages');


    unreadMessages.forEach(m => {

    });

    const headerText = document.createElement('p');
    const bodyText = document.createElement('p');

    headerText.innerText = message.headerInput;
    bodyText.innerText = message.bodyInput;

    headerText.style.fontWeight = 'bold';

    const listItem = document.createElement('li');
    listItem.appendChild(headerText);
    listItem.appendChild(bodyText);

    listItem.style.backgroundColor = 'light-blue';
    listItem.classList.add('list-group-item');

    console.log(message);

    listOfMessages.appendChild(listItem);
}

class Message {

    constructor(headerText, bodyText, isUnread) {
        this.headerText = headerText;
        this.bodyText = bodyText;
        this.isUnread = isUnread;
    }

}


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






/*
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    const formData = new FormData(form);

    const firstname = formData.get('firstName');
    const lastname = formData.get('lastName');

    console.log($"Firstname ")

    form.reset();
});
*/
function addUser() {
    let username = document.getElementById('insert-username');
    let password = document.getElementById('insert-password');
    let image = document.getElementById('insert-image');
    let mail = document.getElementById('insert-mail');

    let newUser = createUser(username, password, image, mail);
    saveUser(newUser);
    resetForm(username, password, image, mail);
}

function createUser(username, password, image, mail) {
    let id;
    if (users.length > 0) {
        id = users[users.length - 1].id + 1;
    } else {
        id = 0;
    }
    let user = {
        id: id,
        username: username.value,
        password: password.value,
        image: image.value,
        mail: mail.value,
    };
    return user;
}

function saveUser(newUser) {
    users.push(newUser);
    backend.setItem('users', JSON.stringify(users));
}

function resetForm(username, password, image, mail) {
    username.value = '';
    password.value = '';
    image.value = '';
    mail.value = '';
}
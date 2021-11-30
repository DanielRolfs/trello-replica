let currentUser;

async function validateLoginData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username || username == 'Gast') {
            currentUser = username;

            for (let i = 0; i < users.length; i++) {
                if (username == users[i].username && password == users[i].password || username == 'Gast') {
                    console.log(username + " is logged in!!!")
                    currentUser = username;
                    window.location.href = './board.html';

                    renderprofile();
                    return false;
                } else {
                    document.getElementById('incorrect').innerHTML = 'Fehler beim Login';
                }
            }
            console.log("incorrect username or password")

        }
    }

}

function logout() {
    var l = confirm("Wirklich ausloggen?");
    if (l == true) {
        window.location.href = './board.html'
    };

}

function renderprofile() {
    if (currentUser == 'Marcus') {
        document.getElementById('userpic').src = "img/marcus.jpg";
    }
    if (currentUser == 'Anna') {
        document.getElementById('userpic').src = "img/profil1.png";
    }
    if (currentUser == 'Daniel') {
        document.getElementById('userpic').src = "img/profil2.png";
    }
}

function loadLoginUsers() {
    document.getElementById('username').innerHTML = `<option value="Gast">Gast</option>`;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        document.getElementById('username').innerHTML += `
        <option value="${user.username}">${user.username}</option>`;
    }
}
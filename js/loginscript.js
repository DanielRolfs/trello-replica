let users = [{
        username: "Anna",
        password: "anna12345"
    },
    {
        username: "Marcus",
        password: "marcus12345"
    },
    {
        username: "Daniel",
        password: "daniel12345"
    },
    {
        username: "test",
        password: "test"
    }

]

let currentUser;

function getInfo() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    for (let i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            console.log(username + " is logged in!!!")
            currentUser = username;
            document.getElementById('bodycontent').classList.remove('d-none');
            document.getElementById('loginSite').classList.add('d-none');
            renderprofile();

            return
        } else {
            document.getElementById('incorrect').innerHTML = 'Fehler beim Login';
        }
    }
    console.log("incorrect username or password")
}

function logout() {
    var l = confirm("Wirklich ausloggen?");
    if (l == true) {
        window.location.href = 'index.html'
    };

}

function renderprofile() {
    if (currentUser == 'Marcus') {
        document.getElementById('userpic').src = "img/marcus.jpg";
    }
}
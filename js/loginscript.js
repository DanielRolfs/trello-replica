function validateLoginData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let matchingUser = getMatchingUser(username, password);
        if ( matchingUser || username == 'Gast') {
            console.log(username + " is logged in!!!")
            window.location.href = './board.html'
            /* renderprofile(matchingUser); */
            return true;
        } else {
            document.getElementById('incorrect').innerHTML = 'Fehler beim Login';
        }
    console.log("incorrect username or password")


}

function getMatchingUser(username, password){
return users.find(u => username == u.username && password == u.password)
}

function logout() {
    var l = confirm("Wirklich ausloggen?");
    if (l == true) {
        window.location.href = './board.html'
    };

}

function renderprofile(matchingUser) {
    document.getElementById('userpic').src = matchingUser.image;
}

function loadLoginUsers() {
    document.getElementById('username').innerHTML = `<option value="Gast">Gast</option>`;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        document.getElementById('username').innerHTML += `
        <option value="${user.username}">${user.username}</option>`;
    }
}
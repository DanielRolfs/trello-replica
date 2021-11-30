// Backend
setURL('http://gruppe-130.developerakademie.net/smallest_backend_ever');

let tasks = [];

let users = [{
        username: 'Anna',
        password: 'anna12345',
        image: './img/profil1.png',
        mail: 'anna@da.de',
        id: 1,
    },
    {
        username: 'Marcus',
        password: 'marcus12345',
        image: './img/marcus.jpg',
        mail: 'marcus@da.de',
        id: 2,
    },
    {
        username: 'Daniel',
        password: 'daniel12345',
        image: './img/profil2.png',
        mail: 'daniel@da.de',
        id: 3,
    },
];

//status: bl= Backlog ; b1=board - todo ; b2=board - in Progress ; b3=board - testing; b4= board Done


async function loadTasks() {
    await downloadFromServer();
    if (backend.getItem('tasks')) {
        tasks = JSON.parse(backend.getItem('tasks'));
    }
}
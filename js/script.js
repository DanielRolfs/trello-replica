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
    {
        username: 'Sebastian',
        password: 'marcus12345',
        image: './img/marcus.jpg',
        mail: 'marcus@da.de',
        id: 4,
    },
    {
        username: 'Yvonne Müller-Müller',
        password: 'daniel12345',
        image: './img/profil2.png',
        mail: 'Vonny-müller-müller@ddsadsada.de',
        id: 5,
    },
    {
        username: 'Gast',
        password: '',
        image: './img/profil3.png',
        mail: '',
        id: 6,
    },

];

//status: bl= Backlog ; b1=board - todo ; b2=board - in Progress ; b3=board - testing; b4= board Done

async function init() {
    await loadTasks();
    loadBacklogs();
    loadTaskstoTODO();
}

async function loadTasks() {
    await downloadFromServer();
    if (backend.getItem('tasks')) {
        tasks = JSON.parse(backend.getItem('tasks'));
    }
}
// Backend
setURL('http://gruppe-130.developerakademie.net/smallest_backend_ever');

let tasks = [{
        id: 0,
        title: 'Add Task Ready machen',
        dueDate: '26.11.2021',
        category: 'Product',
        urgency: 'high',
        description: 'Logik hinter Add to Task ist implementiert und wird auf diesen JSON gespeichert',
        responsible: 'Anna',
        status: 'bl',
    },
    {
        id: 1,
        title: 'Backlog Ready machen',
        dueDate: '29.11.2021',
        category: 'Marketing',
        urgency: 'high',
        description: 'Logik hinter backlog ist implementiert und wird aus JSON gezogen/ von Add to Task übergeben',
        responsible: 'Marcus',
        status: 'b1',
    },
    {
        id: 2,
        title: 'Board Ready machen',
        dueDate: '29.11.2021',
        category: 'Sales',
        urgency: 'high',
        description: 'Logik hinter Board ist implementiert und wird aus JSON gezogen / von Backlog übergeben',
        responsible: 'Daniel',
        status: 'b2',
    },
    {
        id: 3,
        title: 'Responsive machen',
        dueDate: '29.11.2021',
        category: 'Management',
        urgency: 'high',
        description: 'Responsiveness implementieren',
        responsible: 'Daniel',
        status: 'b3',
    },
];

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
        mail: 'daniel@da.de',
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
}

async function loadTasks() {
    await downloadFromServer();
    if (backend.getItem('tasks')) {
        tasks = JSON.parse(backend.getItem('tasks'));
    }
}
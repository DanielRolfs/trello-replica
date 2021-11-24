// Backend
//setURL('https://gruppe-130.developerakademie.net/smallest_backend_ever');

let tasks = [{
    'id': 0,
    'title': 'Add Task Ready machen',
    'dueDate': '26.11.2021',
    'category': 'Product',
    'urgency': 'high',
    'description': 'Logik hinter Add to Task ist implementiert und wird auf diesen JSON gespeichert',
    'responsable': 'Anna',
    'status': 'bl',

}, {
    'id': 1,
    'title': 'Backlog Ready machen',
    'dueDate': '29.11.2021',
    'category': 'Marketing',
    'urgency': 'high',
    'description': 'Logik hinter backlog ist implementiert und wird aus JSON gezogen/ von Add to Task übergeben',
    'responsable': 'Marcus',
    'status': 'bl',

}, {
    'id': 2,
    'title': 'Board Ready machen',
    'dueDate': '29.11.2021',
    'category': 'Sales',
    'urgency': 'high',
    'description': 'Logik hinter Board ist implementiert und wird aus JSON gezogen / von Backlog übergeben',
    'responsable': 'Daniel',
    'status': 'bl',
}];


let users = [{
        username: "Anna",
        password: "anna12345",
        'image': 'img/profil1.png',
        'mail': 'anna@da.de',
    },
    {
        username: "Marcus",
        password: "marcus12345",
        'image': 'img/marcus.jpg',
        'mail': 'marcus@da.de',
    },
    {
        username: "Daniel",
        password: "daniel12345",
        'image': 'img/profil2.png',
        'mail': 'daniel@da.de',
    },
    {
        username: "test",
        password: "test"
    }

];
//status: bl= Backlog ; b1=board - todo ; b2=board - in Progress ; b3=board - testing; b4= board Done 

async function smallestBackend() {

    let url = 'https://gruppe-130.developerakademie.net/smallest_backend_ever';
    let response = await fetch(url);
    let responseAsjson = await response.json();

};

function init() {
    loadBacklogs();
    // smallestBackend();
}
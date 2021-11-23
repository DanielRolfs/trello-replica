// Backend
//setURL('https://gruppe-130.developerakademie.net/smallest_backend_ever');

let tasks = [{
    'id': 0,
    'name': 'Anna',
    'title': 'Add Task Ready machen',
    'dueDate': '26.11.2021',
    'category': 'project',
    'urgency': 'high',
    'description': 'Logik hinter Add to Task ist implementiert und wird auf diesen JSON gespeichert',
    'status': 'bl',
    'image': 'img/profil1.png',
    'mail': 'anna@da.de',
    'color': 'border-red'
}, {
    'id': 1,
    'name': 'Marcus',
    'title': 'Backlog Ready machen',
    'dueDate': '29.11.2021',
    'category': 'project',
    'urgency': 'high',
    'description': 'Logik hinter backlog ist implementiert und wird aus JSON gezogen/ von Add to Task übergeben',
    'status': 'bl',
    'image': 'img/marcus.jpg',
    'mail': 'marcus@da.de',
    'color': 'border-green'
}, {
    'id': 2,
    'name': 'Daniel',
    'title': 'Board Ready machen',
    'dueDate': '29.11.2021',
    'category': 'project',
    'urgency': 'high',
    'description': 'Logik hinter Board ist implementiert und wird aus JSON gezogen / von Backlog übergeben',
    'status': 'bl',
    'image': 'img/profil2.png',
    'mail': 'daniel@da.de',
    'color': 'border-blue'
}];

//status: bl= Backlog ; b1=board - todo ; b2=board - in Progress ; b3=board - testing; b4= board Done 

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('EXAMPLE')) || [];
};

function init() {
    loadBacklogs();
}
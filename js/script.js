// Backend
setURL('http://gruppe-130.developerakademie.net/smallest_backend_ever');

let tasks = [];

let users = [{
        username: 'Anna',
        password: 'anna12345',
        image: './img/profil1.png',
        mail: 'anna@da.de',
        tel: '001200321321',
        id: 1,
    },
    {
        username: 'Marcus',
        password: 'marcus12345',
        image: './img/marcus.jpg',
        mail: 'marcus@da.de',
        tel: '001200321321',
        id: 2,
    },
    {
        username: 'Daniel',
        password: 'daniel12345',
        image: './img/profil2.png',
        mail: 'daniel@da.de',
        tel: '001200321321',
        id: 3,
    },
    {
        username: 'This is a long user name',
        password: 'daniel12345',
        image: './img/profil2.png',
        mail: 'thisisalongusermailaddress@da.de',
        tel: '001200321321',
        id: 4,
    },
];

//status: bl= Backlog ; b1=board - todo ; b2=board - in Progress ; b3=board - testing; b4= board Done


async function loadTasks() {
    await downloadFromServer();
    if (backend.getItem('tasks')) {
        tasks = JSON.parse(backend.getItem('tasks'));
    }
}


//sidebar
function showActiveLink() {
    let links = Array.from(document.links);
    let activeLink = links.find((link) => document.URL.includes(link.href));
    removeLinkMarker(links);
    activeLink.parentElement.classList.add('sidebarlink--active');
}

function removeLinkMarker(links) {
    links.forEach((link) => link.parentElement.classList.remove('sidebarlink--active'));
}

function dropout() {
    document.getElementById('sidebar__links').style.visibility = 'visible';
    document.getElementById('sidebar__bottom').style.visibility = 'visible';
    document.getElementById('sidebar').style.left = '0px';
    document.getElementById('navi-menu').classList.add('d-none');
    document.getElementById('navi-close').classList.remove('d-none');
    document.getElementById('x700').style.visibility = 'hidden';
    document.getElementById('menu700').style.visibility = 'hidden';

}

function dropin() {
    document.getElementById('sidebar__links').style.visibility = 'hidden';
    document.getElementById('sidebar__bottom').style.visibility = 'hidden';
    document.getElementById('sidebar').style.left = '-100px';
    document.getElementById('navi-menu').classList.remove('d-none');
    document.getElementById('navi-close').classList.add('d-none');
    document.getElementById('x700').style.visibility = 'hidden';
    document.getElementById('menu700').style.visibility = 'hidden';
}

function dropout700() {
    document.getElementById('sidebar__links').style.visibility = 'visible';
    document.getElementById('sidebar__bottom').style.visibility = 'visible';
    document.getElementById('sidebar').style.left = '0px';
    document.getElementById('navi-menu').classList.add('d-none');
    document.getElementById('navi-close').classList.add('d-none');
    document.getElementById('x700').style.visibility = 'visible';
    document.getElementById('menu700').style.visibility = 'hidden';

}

function dropin700() {
    document.getElementById('sidebar__links').style.visibility = 'hidden';
    document.getElementById('sidebar__bottom').style.visibility = 'hidden';
    document.getElementById('sidebar').style.left = '-150px';
    document.getElementById('navi-menu').classList.add('d-none');
    document.getElementById('navi-close').classList.add('d-none');
    document.getElementById('x700').style.visibility = 'hidden';
    document.getElementById('menu700').style.visibility = 'visible';

}
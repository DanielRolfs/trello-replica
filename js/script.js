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
//sidebarend

// responsive nav-bar

function dropout() {
    document.getElementById('sidebar').classList.add('sidebar-open');
    document.getElementById('extrabar').classList.add('extrabar--sidebar-open');
    toggleBtnVisibility();
    toggleNavContentVisibility();
}

function dropin() {
    document.getElementById('sidebar').classList.remove('sidebar-open');
    document.getElementById('extrabar').classList.remove('extrabar--sidebar-open');
    toggleBtnVisibility();
    setTimeout(() => {
        toggleNavContentVisibility();
    }, 150);
}

function toggleBtnVisibility() {
    let navBtns = Array.from(document.getElementsByClassName('nav-btn'));
    navBtns.forEach((btn) => btn.classList.toggle('v-hidden'));
}

function toggleNavContentVisibility() {
    let navContent = Array.from(document.getElementsByClassName('sidebar__content'));
    navContent.forEach(e => e.classList.toggle('v-visible'));
}

window.onresize = function() {
    if (window.innerWidth > 1000 && navBarIsOpen()) {
        dropin()
    }
}

function navBarIsOpen() {
    return document.getElementById('sidebar').classList.contains('sidebar-open');
}
// responsive nav-bar end


// Searchbar

function showSearch() {
    document.getElementById('search-input').style.visibility = 'visible';
    document.getElementById('search-input').style.width = '200px';
    document.getElementById('search-btn').setAttribute("onClick", "hideSearch();");
}

function hideSearch() {
    document.getElementById('search-input').style.visibility = 'hidden';
    document.getElementById('search-input').style.width = '0px';
    document.getElementById('search-btn').setAttribute("onClick", "showSearch();");
}

function filterTasks() {
    let search = document.getElementById('search-input').value;
    search = search.toLowerCase();

}

// Searchbar END
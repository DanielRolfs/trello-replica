// Backend
setURL('http://gruppe-130.developerakademie.net/smallest_backend_ever');

let tasks = [];

let users = [
  {
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
    username: 'John Doe',
    password: '',
    image: './img/profil2.png',
    mail: 'johndoe@da.de',
    tel: '001200321321',
    id: 4,
  },
  {
    username: 'Jane Doe',
    password: '',
    image: './img/profil1.png',
    mail: 'janedoe@da.de',
    tel: '001200321321',
    id: 5,
  },
  {
    username: 'This is a long user naaaaaaaaaaaame',
    password: '',
    image: './img/profil1.png',
    mail: 'thisisalongusermaiaaaaaaaaaaaaaaddress@da.de',
    tel: '001200321321',
    id: 6,
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
  moveColorLegend();
  toggleBtnVisibility();
  toggleNavContentVisibility();
}

function dropin() {
  document.getElementById('sidebar').classList.remove('sidebar-open');
  moveColorLegend();
  toggleBtnVisibility();
  setTimeout(() => {
    toggleNavContentVisibility();
  }, 150);
}

function moveColorLegend() {
  let colorLegend = document.getElementById('extrabar');
  if (colorLegend) {
    colorLegend.classList.toggle('extrabar--sidebar-open');
  }
}

function toggleBtnVisibility() {
  let navBtns = Array.from(document.getElementsByClassName('nav-btn'));
  navBtns.forEach((btn) => btn.classList.toggle('v-hidden'));
}

function toggleNavContentVisibility() {
  let navContent = Array.from(document.getElementsByClassName('sidebar__content'));
  navContent.forEach((e) => e.classList.toggle('v-visible'));
}

window.onresize = function () {
  if (window.innerWidth > 1000 && navBarIsOpen()) {
    dropin();
  }
};

function navBarIsOpen() {
  return document.getElementById('sidebar').classList.contains('sidebar-open');
}
// responsive nav-bar end

// Searchbar

function showSearch() {
  document.getElementById('search-input').style.visibility = 'visible';
  document.getElementById('search-input').style.width = '200px';
  document.getElementById('search-btn').setAttribute('onClick', 'hideSearch();');
}

function hideSearch() {
  document.getElementById('search-input').style.visibility = 'hidden';
  document.getElementById('search-input').style.width = '0px';
  document.getElementById('search-btn').setAttribute('onClick', 'showSearch();');
}

function filterTasks() {
  let search = document.getElementById('search-input').value;
  search = search.toLowerCase();
}

// Searchbar END

// extrabar

function filterTasks(category) {
  if (filterIsActive()) {
    resetFilter(category);
  }
  applyFilter(category);
  toggleResetBtn();
}

function applyFilter(category){
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  checkIfMatchingTasks(tasks, category);
  let tasksToHide = tasks.filter((t) => !t.classList.contains(category));
  tasksToHide.forEach((t) => {
    fadeTaskOut(t);
    hideTask(t);
  });
}

function checkIfMatchingTasks(tasks, category){
  if(!matchingTasks(tasks, category).length > 0){
    showFilterWarning();
  }
}

function matchingTasks(tasks, category){
  return tasks.filter((t) => t.classList.contains(category))
}

function fadeTaskOut(t) {
  let overlay = document.createElement('DIV');
  overlay.classList.add('task-overlay', 'filter-animation--hide');
  t.appendChild(overlay);
  setTimeout(() => {
    overlay.classList.remove('filter-animation--hide');
    overlay.classList.add('filter-animation--show');
  }, 300);
}

function hideTask(t) {
  setTimeout(() => {
    t.classList.add('d-none');
  }, 300);
}

function fadeTaskIn(category) {
  let overlays = Array.from(document.getElementsByClassName('task-overlay'));
  if(category){
    overlays = overlays.filter(o => o.parentElement.classList.contains(category))
  }
  overlays.forEach((o) => {
    setTimeout(() => {
      o.remove();
    }, 300);
  });
}

function resetFilter(category) {
  fadeTaskIn(category);
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  if(category){
    tasks = tasks.filter(t => t.classList.contains(category))
  }
  tasks.forEach((t) => t.classList.remove('d-none'));
  toggleResetBtn();
}

function filterIsActive() {
  return !document.getElementById('reset-filter-btn').classList.contains('d-none');
}

function toggleResetBtn() {
  document.getElementById('reset-filter-btn').classList.toggle('d-none');
}

function showFilterWarning(){
  let extrabar = document.getElementById('extrabar');
  extrabar.classList.add('filter__warning')
  setTimeout(() => {
    extrabar.classList.remove('filter__warning')
  }, 2250);
}

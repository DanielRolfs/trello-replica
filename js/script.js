



// Backend
setURL('https://danielrolfs.com/projects/smallest_backend_ever');

let tasks = [];

let users = [
  {
    username: 'Max Mustermann',
    password: '',
    image: './img/profil2.png',
    mail: 'max.mustermann@mail.de',
    tel: '001200321321',
    id: 1,
  },
  {
    username: 'Erika Mustermann',
    password: '',
    image: './img/profil1.png',
    mail: 'erika.mustermann@mail.de',
    tel: '001200321321',
    id: 2,
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
  let regEx = /about|privacy/;
  if (regEx.test(activeLink.href)) {
    activeLink.classList.add('sidebarlink--active__bottom');
  } else {
    activeLink.parentElement.classList.add('sidebarlink--active');
  }
}

function removeLinkMarker(links) {
  links.forEach((link) => link.parentElement.classList.remove('sidebarlink--active'));
  links.forEach((link) => link.classList.remove('sidebarlink--active__bottom'));
}
//sidebarend

// responsive nav-bar

function dropout() {
  document.getElementById('sidebar').classList.add('sidebar-open');
  moveColorLegend();
  toggleBtnVisibility();
  toggleNavContentVisibility();
  setTimeout(() => {
    addCloseToBody();
  }, 20);
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

function addCloseToBody() {
  document.body.addEventListener('click', (event) => {
    if (!targetIsSidebar(event.target) && navBarIsOpen()) {
      dropin();
    }
  });
}

function targetIsSidebar(target) {
  let sidebarParent = document.getElementById('sidebar');
  let sidebar = Array.from(sidebarParent.querySelectorAll('*'));
  sidebar.push(sidebarParent);
  return sidebar.some((e) => e == target);
}
// responsive nav-bar end

function showActiveLink() {
    console.log('show active link')
    let links = Array.from(document.links);
    let activeLink = links.find((link) => document.URL.includes(link.href));
    console.log(activeLink)
    removeLinkMarker(links);
    activeLink.parentElement.classList.add('sidebarlink--active');
}

function removeLinkMarker(links) {
    links.forEach((link) => link.parentElement.classList.remove('sidebarlink--active'));
}

/* function showBoard() {
  document.getElementById('include-board').classList.remove('d-none');
  document.getElementById('board').classList.add('sidebarlink--active');
}

function showBacklog() {

    document.getElementById('include-backlog').classList.remove('d-none');
    document.getElementById('backlog').classList.add('sidebarlink--active');
}

function showAddTask() {
    document.getElementById('include-addtask').classList.remove('d-none');
    document.getElementById('addtask').classList.add('sidebarlink--active');


    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');

    document.getElementById('include-about').classList.add('d-none');

    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');


  document.getElementById('include-backlog').classList.remove('d-none');
  document.getElementById('backlog').classList.add('sidebarlink--active');
}

function showAddTask() {
  document.getElementById('include-addtask').classList.remove('d-none');
  document.getElementById('addtask').classList.add('sidebarlink--active');

function showHelp() {
  document.getElementById('include-help').classList.remove('d-none');
  document.getElementById('help').classList.add('sidebarlink--active');
}

function showAbout() {
  document.getElementById('include-about').classList.remove('d-none');
}

function showPrivacy() {
    document.getElementById('include-privacy').classList.remove('d-none');
}

function hideboard() {
    document.getElementById('include-board').classList.add('d-none');
    document.getElementById('board').classList.remove('sidebarlink--active');
    document.getElementById('include-backlog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('sidebarlink--active');
    document.getElementById('include-addtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('sidebarlink--active');
    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');
    document.getElementById('include-about').classList.add('d-none');
    document.getElementById('include-privacy').classList.add('d-none');
}

  document.getElementById('include-privacy').classList.remove('d-none');
}

function hideboard() {
  document.getElementById('include-board').classList.add('d-none');
  document.getElementById('board').classList.remove('sidebarlink--active');
  document.getElementById('include-backlog').classList.add('d-none');
  document.getElementById('backlog').classList.remove('sidebarlink--active');
  document.getElementById('include-addtask').classList.add('d-none');
  document.getElementById('addtask').classList.remove('sidebarlink--active');
  document.getElementById('include-help').classList.add('d-none');
  document.getElementById('help').classList.remove('sidebarlink--active');
  document.getElementById('include-about').classList.add('d-none');
  document.getElementById('include-privacy').classList.add('d-none');
} */
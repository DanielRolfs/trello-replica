function showBoard() {
    document.getElementById('include-board').classList.remove('d-none');
    document.getElementById('board').classList.add('sidebarlink--active');
    document.getElementById('include-backlog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('sidebarlink--active');
    document.getElementById('include-addtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('sidebarlink--active');
    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');
    document.getElementById('include-about').classList.add('d-none');
    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');

}

function showBacklog() {
    document.getElementById('include-board').classList.add('d-none');
    document.getElementById('board').classList.remove('sidebarlink--active');

    document.getElementById('include-backlog').classList.remove('d-none');
    document.getElementById('backlog').classList.add('sidebarlink--active');

    document.getElementById('include-addtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('sidebarlink--active');

    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');

    document.getElementById('include-about').classList.add('d-none');

    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');

}

function showAddTask() {
    document.getElementById('include-board').classList.add('d-none');
    document.getElementById('board').classList.remove('sidebarlink--active');

    document.getElementById('include-backlog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('sidebarlink--active');

    document.getElementById('include-addtask').classList.remove('d-none');
    document.getElementById('addtask').classList.add('sidebarlink--active');

    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');

    document.getElementById('include-about').classList.add('d-none');

    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');

}

function showHelp() {
    document.getElementById('include-board').classList.add('d-none');
    document.getElementById('board').classList.remove('sidebarlink--active');

    document.getElementById('include-backlog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('sidebarlink--active');

    document.getElementById('include-addtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('sidebarlink--active');

    document.getElementById('include-help').classList.remove('d-none');
    document.getElementById('help').classList.add('sidebarlink--active');

    document.getElementById('include-about').classList.add('d-none');

    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');

}

function showAbout() {
    document.getElementById('include-board').classList.add('d-none');
    document.getElementById('board').classList.remove('sidebarlink--active');

    document.getElementById('include-backlog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('sidebarlink--active');

    document.getElementById('include-addtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('sidebarlink--active');

    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');

    document.getElementById('include-about').classList.remove('d-none');

    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');


}

function showPrivacy() {
    document.getElementById('include-board').classList.add('d-none');
    document.getElementById('board').classList.remove('sidebarlink--active');

    document.getElementById('include-backlog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('sidebarlink--active');

    document.getElementById('include-addtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('sidebarlink--active');

    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');

    document.getElementById('include-about').classList.add('d-none');

    document.getElementById('include-privacy').classList.remove('d-none');
    document.getElementById('include-adduser').classList.add('d-none');


}

function showadduser() {
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

    document.getElementById('include-adduser').classList.remove('d-none');


}
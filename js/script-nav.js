function showBoard() {
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
<<<<<<< HEAD

    document.getElementById('include-help').classList.add('d-none');
    document.getElementById('help').classList.remove('sidebarlink--active');

    document.getElementById('include-about').classList.add('d-none');

    document.getElementById('include-privacy').classList.add('d-none');
    document.getElementById('include-adduser').classList.add('d-none');

=======
>>>>>>> c952f074c86fb5fd251d71443f826108b90b1da8
}

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
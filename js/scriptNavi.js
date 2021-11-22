function showBoard() {
    document.getElementById('includeBoard').classList.remove('d-none');
    document.getElementById('board').classList.add('aktivsidebarlink');

    document.getElementById('includeBacklog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('aktivsidebarlink');

    document.getElementById('includeAddtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('aktivsidebarlink');

    document.getElementById('includeHelp').classList.add('d-none');
    document.getElementById('help').classList.remove('aktivsidebarlink');

}

function showBacklog() {
    document.getElementById('includeBoard').classList.add('d-none');
    document.getElementById('board').classList.remove('aktivsidebarlink');

    document.getElementById('includeBacklog').classList.remove('d-none');
    document.getElementById('backlog').classList.add('aktivsidebarlink');

    document.getElementById('includeAddtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('aktivsidebarlink');

    document.getElementById('includeHelp').classList.add('d-none');
    document.getElementById('help').classList.remove('aktivsidebarlink');

}

function showAddTask() {
    document.getElementById('includeBoard').classList.add('d-none');
    document.getElementById('board').classList.remove('aktivsidebarlink');

    document.getElementById('includeBacklog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('aktivsidebarlink');

    document.getElementById('includeAddtask').classList.remove('d-none');
    document.getElementById('addtask').classList.add('aktivsidebarlink');

    document.getElementById('includeHelp').classList.add('d-none');
    document.getElementById('help').classList.remove('aktivsidebarlink');

}

function showHelp() {
    document.getElementById('includeBoard').classList.add('d-none');
    document.getElementById('board').classList.remove('aktivsidebarlink');

    document.getElementById('includeBacklog').classList.add('d-none');
    document.getElementById('backlog').classList.remove('aktivsidebarlink');

    document.getElementById('includeAddtask').classList.add('d-none');
    document.getElementById('addtask').classList.remove('aktivsidebarlink');

    document.getElementById('includeHelp').classList.remove('d-none');
    document.getElementById('help').classList.add('aktivsidebarlink');

}
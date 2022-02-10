let currentDraggedElement;
let currentBoard;


async function loadTaskstoTODO() {
    await loadTasks();
    renderTasksInBoard();
}

async function deleteTaskBoard(logID) {
    tasks.forEach(function(log, ID) {
        if (logID == log.id) {
            tasks.splice(ID, 1)
        }
    });
    await backend.setItem('tasks', JSON.stringify(tasks));
    console.log('gelöscht Task mit ID:' + logID);
    renderTasksInBoard();
    loadTaskstoTODO();
  }
  
  function renderTasksInBoard() {
    listTaskByStatus('taskTodo', 'b1');
    listTaskByStatus('taskInprogress', 'b2');
    listTaskByStatus('taskTesting', 'b3');
    listTaskByStatus('taskdone', 'b4');
  }

function listTaskByStatus(containerId, status) {
    let logs = tasks.filter(t => t['status'] == status);

    let nextbuttons = '';



    document.getElementById(containerId).innerHTML = ``;
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        /* Define mobile view specific arrows. Difficult to put in a seperate function, because falues are needet. */

        if ('b4' == status) {
            nextbuttons = `<img src="img/next-left.png" onclick="moveToPreviousBoard(${log.id},${status})" class="pointer"></div></div>`
        }

        if ('b1' == status) {
            nextbuttons = `<div></div><img src="img/next-right.png" onclick="moveToNextBoard(${log.id},${status})" class="pointer"></div>`
        }

        if (('b2' == status) || ('b3' == status)) {
            nextbuttons = `<img src="img/next-left.png" onclick="moveToPreviousBoard(${log.id},${status})" class="pointer"> <img src="img/next-right.png" onclick="moveToNextBoard(${log.id},${status})" class="pointer"></div>`
        }

        document.getElementById(containerId).innerHTML += `
        <div id="task-${log.id}" draggable="true" ondragstart="startDragging(${log.id})" class="task ${log.category} rendered-task filter-prio--${log.urgency}">
        <div onclick="editTask(${log.id})" class="responsible-user" id="bl-users${log.id}" ></div>
            <div onclick="editTask(${log.id})" class="task-title pointer">${log.title}</div>
            <div onclick="editTask(${log.id})" class="task-description pointer">${log.description}</div>
            <div class="flex between bottom">    
                <div onclick="editTask(${log.id})" class="pointer prio ${log.urgency} flex-center col">${log.urgency}</div>
                <div onclick="editTask(${log.id})" class="pointer grey-text flex-center col">${log.dueDate}</div>
                <img src="./img/delete1.png" alt="delete assginment" class="flex-center col del-btn-board" onclick="deleteTaskBoard(${log.id})">
            </div>
            
            <div class="move-task">
            ${nextbuttons}
            </div>
        `;
        setUsersDetails(log.id);
        setHoverUsersDetails(log.id);
    };


}

function allowDrop(ev) {
    ev.preventDefault();
}

function startDragging(id) {
    currentDraggedElement = tasks.find(t => t.id === id);
}


function drop(status) {
    currentDraggedElement.status = status;
    saveBoardStatus();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

async function saveBoardStatus() {
    renderTasksInBoard();
    await backend.setItem('tasks', JSON.stringify(tasks));
}

function moveToPreviousBoard(id, status) {
    currentDraggedElement = tasks.find(t => t.id === id);
    if (status == b4) {
        status = 'b3';
    } else if (status == b3) {
        status = 'b2';
    } else if (status == b2) {
        status = 'b1';
    };
    drop(status);
}

function moveToNextBoard(id, status) {
    currentDraggedElement = tasks.find(t => t.id === id);
    if (status == b1) {
        status = 'b2';
    } else if (status == b2) {
        status = 'b3';
    } else if (status == b3) {
        status = 'b4';
    };
    drop(status);
}
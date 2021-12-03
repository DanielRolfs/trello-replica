let currentDraggedElement;
let currentBoard;

async function loadTaskstoTODO() {
    await loadTasks();
    listTaskByStatus('taskTodo', 'b1');
    listTaskByStatus('taskInprogress', 'b2');
    listTaskByStatus('taskTesting', 'b3');
    listTaskByStatus('taskdone', 'b4');
}

function listTaskByStatus(containerId, status) {
    let logs = tasks.filter(t => t['status'] == status);
    document.getElementById(containerId).innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        document.getElementById(containerId).innerHTML += `
        <div  draggable="true" ondragstart="startDragging(${log.id})" class="task ${log.category}  ">
        <div class="move-task"><img src="img/next-left.png" onclick="moveToPreviousBoard(${log.id},${status})" class="pointer"><img src="img/next-right.png" onclick="moveToNextBoard(${log.id},${status})" class="pointer"></div>    
        <div onclick="editTask(${log.id})" class="responsible-user" id="bl-users${log.id}" ></div>
        <div onclick="editTask(${log.id})" class="task-title pointer">${log.title}</div>
        <div class="flex between bottom">    
            <div onclick="editTask(${log.id})" class="pointer prio ${log.urgency}">${log.urgency}</div>
            <div onclick="editTask(${log.id})" class="pointer grey-text">${log.dueDate}</div>
            <img src="./img/delete1.png" alt="delete assginment" class="delete-assignment-btn__icon" onclick="deleteTask(${log.id})">
        </div>
        </div>
        `;
        setUsersDetails(log.id);
    };

    
}

function allowDrop(ev) {
    ev.preventDefault();
}

function startDragging(id) {
    //changed by Marcus (has to be tested) ----> tested by Marcus 27.11. 22:31
    currentDraggedElement = tasks.find(t => t.id === id);
    // currentDraggedElement = id;
}


function drop(status) {
    //changed by Marcus (has to be tested)----> getested by Marcus 28.11. 01:20
    currentDraggedElement.status = status;
    // tasks[currentDraggedElement]["status"] = status;
    /* removeHighlight(id); */
    saveBoardStatus();
}

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}

//inserted by Marcus (has to be tested)----> getested by Marcus 28.11. 01:20
async function saveBoardStatus() {
    await backend.setItem('tasks', JSON.stringify(tasks));
    loadBacklogs();
    loadTaskstoTODO();
}

function moveToPreviousBoard(id, status){
    currentDraggedElement = tasks.find(t => t.id === id);
/*     console.log('currentDraggedElementii', currentDraggedElement);
    console.log('currendboard', status == b1); */
    if (status == b4) {
        status = 'b3';
    } else if (status == b3) {
        status = 'b2';
    } else if (status == b2) {
        status = 'b1';
    };
    drop(status);
}

function moveToNextBoard(id, status){
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
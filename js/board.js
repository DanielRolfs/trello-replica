let currentDraggedElement;

async function loadTaskstoTODO() {
    await loadTasks();
    listTaskByStatus ( 'taskTodo', 'b1');
    listTaskByStatus ( 'taskInprogress', 'b2');
    listTaskByStatus ( 'taskTesting', 'b3');
    listTaskByStatus ( 'taskdone', 'b4');
}

function listTaskByStatus( containerId, status) {
    let logs = tasks.filter(t => t['status'] == status);
    document.getElementById(containerId).innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        document.getElementById(containerId).innerHTML += `
        <div onclick="editTask(${log.id})" draggable="true" ondragstart="startDragging(${log.id})" class="task">
            <div class="flex between">
            <div class="grey-text ${log.category}">${log.category}</div> <div onclick="deleteTask(${log.id})">X</div>
            </div>
            <div class="task-title">${log.title}</div>
            <div class="grey-text task-description">${log.description}</div>
            <div class="responsible-user" id="bl-users${log.id}" ></div>
            <div class="flex between margin-top">
            
            <div class="prio ${log.urgency}">${log.urgency}</div>
            <div class="grey-text">${log.dueDate}</div>
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
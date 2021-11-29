let currentDraggedElement;


function loadTaskstoTODO() {
    let logs = tasks.filter(t => t['status'] == 'b1');
    document.getElementById('taskTodo').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        document.getElementById('taskTodo').innerHTML += `
        <div draggable="true" ondragstart="startDragging(${log.id})" class="task padding ${log.urgency}">
            <div class="flex between">
            <div class="task-title">${log.title}</div>     <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
            <div class="task-description">${log.description}</div>
            <div class="responsible-user" id="bl-users${log.id}" ></div>
            <div class="flex between margin-top">
            <div>${log.category}</div>
            <div>${log.dueDate}</div>
            </div>
        </div>
        `;
        setUsersDetails(log.id);
    };

    let logs2 = tasks.filter(t => t['status'] == 'b2');
    document.getElementById('taskInprogress').innerHTML = '';
    for (let i = 0; i < logs2.length; i++) {
        const log = logs2[i];

        document.getElementById('taskInprogress').innerHTML += `
        <div draggable="true" ondragstart="startDragging(${log.id})" class="task padding ${log.urgency}">
            <div class="flex between">
            <div class="task-title">${log.title}</div>     <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
            <div class="task-description">${log.description}</div>
            <div class="responsible-user" id="bl-users${log.id}" ></div>
            <div class="flex between margin-top">
            <div>${log.category}</div>
            <div>${log.dueDate}</div>
            </div>
        </div>
        `;
        setUsersDetails(log.id);
    };

    let logs3 = tasks.filter(t => t['status'] == 'b3');
    document.getElementById('taskTesting').innerHTML = '';
    for (let i = 0; i < logs3.length; i++) {
        const log = logs3[i];

        document.getElementById('taskTesting').innerHTML += `
        <div draggable="true" ondragstart="startDragging(${log.id})" class="task padding ${log.urgency}">
            <div class="flex between">
            <div class="task-title">${log.title}</div>     <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
            <div class="task-description">${log.description}</div>
            <div class="responsible-user" id="bl-users${log.id}" ></div>
            <div class="flex between margin-top">
            <div>${log.category}</div>
            <div>${log.dueDate}</div>
            </div>
        </div>
        `;
        setUsersDetails(log.id);
    };

    let logs4 = tasks.filter(t => t['status'] == 'b4');
    document.getElementById('taskdone').innerHTML = '';
    for (let i = 0; i < logs4.length; i++) {
        const log = logs4[i];

        document.getElementById('taskdone').innerHTML += `
        <div draggable="true" ondragstart="startDragging(${log.id})" class="task padding ${log.urgency}">
            <div class="flex between">
            <div class="task-title">${log.title}</div>     <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
            <div class="task-description">${log.description}</div>
            <div class="responsible-user" id="bl-users${log.id}" ></div>
            <div class="flex between margin-top">
            <div>${log.category}</div>
            <div>${log.dueDate}</div>
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
    saveBoardStatus()
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
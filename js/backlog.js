let currentLog;
async function loadBacklogs() {
    await loadTasks();
    renderTasksInBacklog();
}

async function renderTasksInBacklog() {
    await loadTasks();
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = '';
    if (logs.length > 0) {
        for (let i = 0; i < logs.length; i++) {
            const log = logs[i];
            document.getElementById('logs-table').innerHTML += generateLogs(log);
            setUsersDetails(log.id);
            // setHoverUsersDetails(log.id);
        };
    } else {
        document.getElementById('log_table__head').style.visibility = 'hidden';
        document.getElementById('logs-table').innerHTML = `<div class="no-tasks">No Tasks right now!</div>`;
    }
}

function generateLogs(log) {
    return `
    <tr  class="log rendered-task ${log.category}  filter-prio--${log.urgency}" id="task-${log.id}" >
    <td id="bl-users${log.id}" class="users td-width ${log.category}" onclick="editTask(${log.id})"></td>

    <td id="third-field" onclick="editTask(${log.id})">
        <div class="point row700 short-title" >${log.title}</div>
    </td>
    
    <td id="fourth-field" class="td-width row700" onclick="editTask(${log.id})">
        <div class="mrl-15 fw-italic point gap row700 center fw-normal resp-cat" >
          <div>${log.category}</div>
    </td>

    <td id="first-field" >
    <div class="urg-date">
        <div class="fw-normal bl-date pd700">${log.dueDate}</div>
        <div class="prio ${log.urgency}">${log.urgency}</div>
    </div>
        </td>

    <td id ="fifth-field" onclick="editTask(${log.id})">
        <div class="mrl-15 fw-normal point  resp-desc short-desc" >${log.description}</div>
    </td>

    <td id="last-field" >
        <div class="del">
        <div id="sign-to-board" onclick="pushTaskToBoard(${log.id})">
        <div class=" bl-board bounce next" > <img src="img/next.png" id="to-board"></div>
            <p class="p-to-board">to <br> Board</p>
            </div>
            <img src="./img/delete1.png" alt="delete assginment" class="delete-assignment-btn__icon" onclick="deleteTask(${log.id})" id="del-btn-bl">
        </div>
    </td>
     </tr>
  `
}

async function pushTaskToBoard(logID) {
    let log = tasks.find(t => t.id === logID);
    log.status = 'b1';
    await backend.setItem('tasks', JSON.stringify(tasks));
    console.log('Task mit ID:' + logID + 'im Board')
    renderTasksInBacklog();
}
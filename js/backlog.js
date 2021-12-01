let currentLog;

async function loadBacklogs() {
    await loadTasks();
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        document.getElementById('logs-table').innerHTML += generateLogs(log);
        setUsersDetails(log.id);
    };
}

function generateLogs(log) {
    return `
    <tr  class="log" id="log" onclick="editTask(${log.id})">
        <td ><div class=" bl-board center bounce next" ><img src="img/next.png" alt="" onclick="pushTaskToBoard(${log.id}) " </div></td>
        <td id="bl-users${log.id}"></td>
        <td ><div class="mrl-15">${log.title}</div></td>
        <td><div class="mrl-15 fw-italic">${log.category}</div></td>
        <td><div class="mrl-15 fw-normal">${log.description}</div></td>
        <td><div class="del"><img src="./img/delete1.png" alt="delete assginment" class="delete-assignment-btn__icon" onclick="deleteTask(${log.id})"><div class="prio">Prio1</div> </div></td>
    </tr>
  `
}

async function pushTaskToBoard(logID) {
    let log = tasks.find(t => t.id === logID);
    log.status = 'b1';
    await backend.setItem('tasks', JSON.stringify(tasks));
    console.log('Task mit ID:' + logID + 'im Board')
    console.log(tasks);
    loadBacklogs();
    loadTaskstoTODO();
}

async function deleteTask(logID) {
    tasks.forEach(function(log, ID) {
        if (logID == log.id) {
            tasks.splice(ID, 1)
        }
    });
    await backend.setItem('tasks', JSON.stringify(tasks));
    console.log('gelöscht Task mit ID:' + logID);
    console.log(tasks.length);
    console.log(tasks);
    loadBacklogs();
    loadTaskstoTODO();
}


function setUsersDetails(logID) {
    let currentLog;
    currentLog = tasks.find(t => t.id === logID);
    document.getElementById('bl-users' + logID).innerHTML = '';
    for (let i = 0; i < currentLog.responsible.length; i++) {
        let resp = currentLog.responsible[i];
        let user = users.find(u => u.id === resp);
        document.getElementById('bl-users' + currentLog.id).innerHTML += generateUserDetails(user);
    }
};

function generateUserDetails(user) {
    return `
    <div class="user">
        <div>    
         <img src="${user.image}" alt="" class="userpic">
        </div>
`
};
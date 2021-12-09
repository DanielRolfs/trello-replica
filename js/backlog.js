let currentLog;

async function loadBacklogs() {
    await loadTasks();
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = '';
    if (logs.length > 0) {
        for (let i = 0; i < logs.length; i++) {
            const log = logs[i];
            document.getElementById('logs-table').innerHTML += generateLogs(log);
            setUsersDetails(log.id);
        };
    } else {
        document.getElementById('logs-table').innerHTML = `<div class="no-tasks">No Tasks right now!</div>`;
    }
}

function generateLogs(log) {
    return `
    <tr  class="log rendered-task ${log.category} filter-prio--${log.urgency}" id="log" >
        <td id="first-field"  id="cat-date-urg" class="${log.category}"><div class=" bl-board bounce next" ><img src="img/next.png" alt="" onclick="pushTaskToBoard(${log.id}) " </div></td>
        <td id="bl-users${log.id}" class="users td-width" onclick="editTask(${log.id})"></td>
        <td id="third-field" onclick="editTask(${log.id})"><div class="mrl-15 point center row700" >${log.title}</div></td>
        <td id="fourth-field" class="td-width row700" onclick="editTask(${log.id})"><div class="mrl-15 fw-italic point gap row700" ><div class="center" ><div>${log.category}</div><div class="fw-normal bl-date pd700">${log.dueDate}</div><div class="prio ${log.urgency}">${log.urgency}</div></div></td>
        <td id ="fifth-field" onclick="editTask(${log.id})"><div class="mrl-15 fw-normal point center" >${log.description}</div></td>
        <td id="last-field"><div class="del"><img src="./img/delete1.png" alt="delete assginment" class="delete-assignment-btn__icon" onclick="deleteTask(${log.id})"> </div></td>
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
}


function setUsersDetails(logID) {
    let currentLog;
    currentLog = tasks.find(t => t.id === logID);
    document.getElementById('bl-users' + logID).innerHTML = '';
    let resp = currentLog.responsible[0];
    let user = users.find(u => u.id === resp);
    if (currentLog.responsible.length == 1) {
        document.getElementById('bl-users' + logID).innerHTML = `
        <div class="usernew">
            <div>    
            <img src="${user.image}" alt="" class="userpic">
            <div id="count-assignes" class="d-none">+${currentLog.responsible.length -1}</div>
            </div>
`;
    } else {
        if (currentLog.responsible.length > 1) {
            document.getElementById('bl-users' + logID).innerHTML = `
            <div class="usernew">
            <div>    
            <a class="hideDisplay">
            <img src="${user.image}" alt="" class="userpic">
            <div id="count-assignes" class="">+${currentLog.responsible.length -1}</div>
            <span class="showDisplayOnHover">
                <span class="showBodyOfDisplayOnHover">
                <img src="${user.image}" alt="" class="userpic">
                </span>
            </span>
            </a>
`;
        }

    }
};
// +${currentLog.responsible.length -1}


function generateUserDetails(user) {
    return `
    <div class="user">
    +${currentLog.responsible.length -1}
        <div>    
        <a class="hideDisplay">
         <img src="${user.image}" alt="" class="userpic">
         <span class="showDisplayOnHover">
            <h4>User Details</h4>
            <span class="showBodyOfDisplayOnHover">
                <img src="${user.image}" alt="" class="detail-pic">
                <br>
                <b>Name:</b>&nbsp<i>${user.username}</i>
                <br>
                <b>Mail:</b>&nbsp<i>${user.mail}</i>
                <br>
                <b>Tel:</b>&nbsp${user.tel}
            </span>
         </span>
        </a>
        </div>
`
};
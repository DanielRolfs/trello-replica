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
    let currentPage = 'backlog';
    if (document.URL.includes("board")) {
        currentPage = 'board';
    }
    currentLog = tasks.find(t => t.id === logID);
    document.getElementById('bl-users' + logID).innerHTML = '';
    let resp = currentLog.responsible[0];
    let user = users.find(u => u.id === resp);
    if (currentLog.responsible.length == 1) {
        document.getElementById('bl-users' + logID).innerHTML = `
        <div class="usernew">
            <div>   
            <a class="hideDisplay"> 
            <img src="${user.image}" alt="" class="userpic">
            <div id="count-assignes" class="d-none">+${currentLog.responsible.length -1}</div>
            <span class="showDisplayOnHover user-hover__${currentPage}">
                <span class="showBodyOfDisplayOnHover">
                    <div id="hover-users${logID}" class="userHoverBox" style="display: flex;">test</div>
                </span>
            </span>
            </a>
            </div>
            </div>
`;
        setHoverUsersDetails(logID);

    } else {
        if (currentLog.responsible.length > 1) {
            document.getElementById('bl-users' + logID).innerHTML = `
            <div class="usernew">
            <div>   
            <a class="hideDisplay">
            <img src="${user.image}" alt="" class="userpic">
            <div id="count-assignes" class="">+${currentLog.responsible.length -1}</div>
            <span class="showDisplayOnHover user-hover__${currentPage}">
                <span class="showBodyOfDisplayOnHover">
                    <div id="hover-users${logID}" class="userHoverBox" style="display: flex;">test</div>
                </span>
            </span>
            </a>
            </div>
            </div>
`;
        }
        setHoverUsersDetails(logID);

    }
};
// +${currentLog.responsible.length -1}
// <img src="${user.image}" alt="" class="userpic">

function setHoverUsersDetails(logID) {
    let currentLog;
    currentLog = tasks.find(t => t.id === logID);
    document.getElementById('hover-users' + logID).innerHTML = '';
    for (let i = 0; i < currentLog.responsible.length; i++) {
        let resp = currentLog.responsible[i];
        let user = users.find(u => u.id === resp);
        document.getElementById('hover-users' + currentLog.id).innerHTML += generateUserDetails(user);
    }
}

function generateUserDetails(user) {
    return `
    <div class="user">
    <div class="hover-all-user">    
    <img src="${user.image}" alt="" class="hover-userpic">
    ${user.username}
    </div>
    </div>
    
`
};
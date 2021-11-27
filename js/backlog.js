function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = generateLogHeadline();
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        document.getElementById('logs-table').innerHTML += generateLogs(log);
        setUsersDetails(log);
    };
}

function generateLogHeadline() {
    return `
<div class="log-headline">
<div class="log-body">
    <div class="bl-users mr-50 pd-10">ASSIGNED TO</div>
    <div class="bl-title mr-50 pd-10">TITLE</div>
    <div class="bl-category mr-50 pd-10">CATEGORY</div>
    <div class="bl-details pd-10">DETAILS</div>      
</div>          
    <div class="del pd-10"></div>
</div>`
};

function generateLogs(log) {
    return `
    <div class="log ${log.category} ${log.urgency}" id="log" );>
        <div onclick="pushTaskToBoard(${log.id})" class="log-body">
        <div class="bl-users mr-50 pd-10" id="bl-users${log.id}" ></div>
        <div class="bl-title mr-50 pd-10" onclick="pushTaskToBoard(${log.id}"> ${log.title}</div>
        <div class="bl-category mr-50 pd-10" onclick="pushTaskToBoard(${log.id}" > ${log.category}</div>
        <div class="bl-details pd-10" onclick="pushTaskToBoard(${log.id}">${log.description}</div>                
        </div>
        <div class="del pd-10"><img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn"></div>
    </div> `
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


function setUsersDetails(log) {
    document.getElementById('bl-users' + log.id).innerHTML = '';

    for (let i = 0; i < log.responsible.length; i++) {
        let resp = log.responsible[i];
        let user = users.find(u => u.id === resp);
        document.getElementById('bl-users' + log.id).innerHTML = generateUserDetails(user)
    }
};

function generateUserDetails(user) {
    return `
    <div class="user">
        <img src="${user.image}" alt="" class="userpic">
            ${user.username}
            <br>
            <a href="mailto:${user.mail}">${user.mail}</a>
        </name>
    </div>
`
};
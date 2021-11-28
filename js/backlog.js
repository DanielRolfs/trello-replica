let currentLog;

function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = generateLogHeadline();
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        document.getElementById('logs-table').innerHTML += generateLogs(log);
        setUsersDetails(log.id);
    };
}

function generateLogHeadline() {
    return `
<div class="log-headline">
<div class="log-body">
    <div class="bl-users mr-16 pd-10">ASSIGNED TO</div>
    <div class="bl-title mr-16 ">TITLE</div>
    <div class="bl-category ">CATEGORY</div>
    <div class="bl-details ">DETAILS</div>      
</div>          
    <div class="del pd-10"></div>
</div>`
};

function generateLogs(log) {
    return `
    <div class="log ${log.category} ${log.urgency}" id="log" );>
        <div onclick="pushTaskToBoard(${log.id})" class="log-body">
            <div class="bl-users mr-16 pd-10" id="bl-users${log.id}" ></div>
            <div class="bl-title"> ${log.title}</div>
            <div class="bl-category"  > ${log.category}</div>
            <div class="bl-details">${log.description}</div>                
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


function setUsersDetails(logID) {
    let currentLog;
    currentLog = tasks.find(t => t.id === logID);
    document.getElementById('bl-users' + logID).innerHTML = '';
    for (let i = 0; i < currentLog.responsible.length; i++) {
        let resp = currentLog.responsible[i];
        let user = users.find(u => u.id === resp);
        document.getElementById('bl-users' + currentLog.id).innerHTML = generateUserDetails(user);
    }
};

function generateUserDetails(user) {
    return `
    <div class="user">
        <div>    
         <img src="${user.image}" alt="" class="userpic">
        </div>
        <div> 
            ${user.username}
            <br>
            <a href="mailto:${user.mail}">${user.mail}</a>
            </div>
    </div>
`
};
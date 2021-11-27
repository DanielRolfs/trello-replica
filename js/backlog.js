function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = `
    <div class="log-headline">
        <div class="bl-users mr-50 pd-10">ASSIGNED TO</div>
        <div class="bl-title mr-50 pd-10">TITLE</div>
        <div class="bl-category mr-50 pd-10">CATEGORY</div>
        <div class="bl-details pd-10">DETAILS</div>                
        <div class="del pd-10"></div>
    </div>`;

    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        document.getElementById('logs-table').innerHTML += `
        <div class="log ${log.category} ${log.urgency}" id="log" onclick="pushTaskToBoard(${log.id});">
            <div class="bl-users mr-50 pd-10" id="bl-users${log.id}"></div>
            <div class="bl-title mr-50 pd-10"> ${log.title}</div>
            <div class="bl-category mr-50 pd-10"> ${log.category}</div>
            <div class="bl-details pd-10">${log.description}</div>                
            <div class="del pd-10"><img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn"></div>
         </div>`;
        setUsersDetails(log, i);
    };
}

async function pushTaskToBoard(logID) {
    let log = tasks.find(t => t.id === logID);
    log.status = 'b1';
    await backend.setItem('tasks', JSON.stringify(tasks));
    loadBacklogs();
    loadTaskstoTODO();
}

async function deleteTask(logID) {
    tasks.splice(logID, 1);
    await backend.setItem('tasks', JSON.stringify(tasks));
    loadBacklogs();
    loadTaskstoTODO();
}


function setUsersDetails(log) {
    document.getElementById('bl-users' + log.id).innerHTML = '';

    for (let i = 0; i < log.responsible.length; i++) {
        let resp = log.responsible[i];
        let user = users.find(u => u.id === resp);
        document.getElementById('bl-users' + log.id).innerHTML = `
        <div class="user">
            <img src="${user.image}" alt="" class="userpic">
                  <div>
                ${user.username}
                <br>
                <a href="mailto:${user.mail}">${user.mail}</a>
            </name>
        </div>
    `
    }
};
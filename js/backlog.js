function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('logs-table').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        var table = document.getElementById('logs-table');
        var row = table.insertRow(0);
        row.className = `log ${log.category} ${log.urgency}`;
        row.setAttribute("onclick", `pushTaskToBoard(${log.id})`);
        var cell1 = row.insertCell(0);
        cell1.className = 'mr-15';
        var cell2 = row.insertCell(1);
        cell2.className = 'mr-15';
        var cell3 = row.insertCell(2);
        cell3.className = 'mr-15';
        var cell4 = row.insertCell(3);
        cell4.className = 'mr-15';
        var cell5 = row.insertCell(4);
        cell1.innerHTML = `<div class="bl-users" id="bl-users${log.id}"></div>`;
        cell2.innerHTML = `${log.title}`;
        cell3.innerHTML = `${log.category}`;
        cell4.innerHTML = `${log.description}`;
        cell5.innerHTML = `<img src="img/del.png" onclick="deleteTask(${log.id})" id="del-btn">`;
        setUsersDetails(log, i);
    };
}

async function pushTaskToBoard(logID) {
    let log = tasks.find(t => t.id === logID);
    log.status = 'b1';
    await backend.setItem('tasks', JSON.stringify(tasks));
    loadBacklogs();
}

async function deleteTask(logID) {
    tasks.splice(logID, 1);
    await backend.setItem('tasks', JSON.stringify(tasks));
    loadBacklogs();
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
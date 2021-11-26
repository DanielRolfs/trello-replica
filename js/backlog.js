function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('backlogs').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        document.getElementById('backlogs').innerHTML += `
        <div class="log ${log.category} ${log.urgency}" id="log" onclick="pushTaskToBoard(${log.id})">
        <table>
            <tr>
                <td class=" bl-row1 " id="bl-row1 ">
                <div class="bl-assigned">
                        <div class="bl-users${i}">

                        </div>
                    </div>
                </td>
                <td class="bl-row2 ">
                    <div class="bl-category "> ${log.title}</div>
                </td>
                <td class="bl-row3 ">
                    <div class="bl-category "> ${log.category}</div>
                </td>

                <td class="bl-row4 ">
                        <div class="bl-details ">${log.description}</div>                
                </td>
                <td class="bl-row5 ">
                        <div class="del"><img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn"></div>
                   </td>
            </tr>
        </table>
    </div>`;
        // setUsersDetails(log, i);
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


function setUsersDetails(logs, i) {
    document.getElementById('bl-users' + i).innerHTML = '';

    for (let i = 0; i < logs[logI].responsible.length; i++) {
        let resp = logs[logI].responsible[i];
        let user = users.find(u => u.username === resp);
        document.getElementById('bl-user-list' + i).innerHTML = `
        <div class="user">
            <div class="userpic">${user.image}</div>
            <div>
                ${user.username};
                ${user.mail}
            </name>
        </div>
    `
    }
};
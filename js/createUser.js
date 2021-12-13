async function deleteTask(logID) {
    tasks.forEach(function(log, ID) {
        if (logID == log.id) {
            tasks.splice(ID, 1)
        }
    });
    await backend.setItem('tasks', JSON.stringify(tasks));
    console.log('gelöscht Task mit ID:' + logID);
    renderTasksInBacklog();
    loadTaskstoTODO()
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
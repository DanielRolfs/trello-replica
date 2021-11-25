function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('backlogs').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        let responsible = log.responsible
        document.getElementById('backlogs').innerHTML += `
        <div class="log ${log.category}" id="log" onclick="pushTaskToBoard(${log})">
        <table>
            <tr>
                <td class=" bl-row1 " id="bl-row1 ">
                    <div class="bl-assigned">
                        <Div><img src="${log.image}" alt="BILD" class="userpic"></Div>
                        <div class="bl-user">
                            <div>${log.responsible}</div>
                            <div id="bl-mail">${log.responsible} Mail</div>
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
            </tr>
        </table>
    </div>`;
        // setUserDetails(name, i);
    }
}

function pushTaskToBoard(log) {
    log.status = 'b1';
}


function setUserDetails(name, i) {
    if (name == 'Anna') {
        let userId = 0;
        dokument.getElementById('bl-mail' + i).innerHTML = `${users.userId.mail}`;

    }
    if (name == 'Marcus') {
        let userId = 1;
        dokument.getElementById('bl-mail').innerHTML = `${users.userId.mail}`;


    }
    if (name == 'Daniel') {
        let userId = 2;
        dokument.getElementById('bl-mail').innerHTML = `${users.userId.mail}`;


    }
}
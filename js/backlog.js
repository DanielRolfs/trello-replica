function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('backlogs').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        let name = log.name
        document.getElementById('backlogs').innerHTML += `
        <div class="log ${log.category}" id="log" onclick="setStatusToB1(${i})">
        <table>
            <tr>
                <td class=" bl-row1 " id="bl-row1 ">
                    <div class="bl-assigned">
                        <Div><img src="${log.image}" alt="BILD" class="userpic"></Div>
                        <div class="bl-user">
                            <div>${log.name}</div>
                            <div id="bl-mail${i}"></div>
                        </div>

                    </div>
                </td>

                <td class="bl-row2 ">
                    <div class="bl-category "> ${log.category}</div>
                </td>

                <td class="bl-row3 ">
                    <div class="bl-details ">${log.description}</div>
                </td>
            </tr>
        </table>
    </div>`;
        // setUserDetails(name, i);
    }
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

function setStatusToB1(i) {

}
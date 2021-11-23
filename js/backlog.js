function loadBacklogs() {
    let logs = tasks.filter(t => t['status'] == 'bl');
    document.getElementById('backlogs').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        document.getElementById('backlogs').innerHTML += `
        <div class="log ${log.color}" id="log" onclick="setStatusToB1(${i})">
        <table>
            <tr>
                <td class=" bl-row1 " id="bl-row1 ">
                    <div class="bl-assigned">
                        <Div><img src="${log.image}" alt="BILD" class="userpic"></Div>
                        <div class="bl-user">
                            <div>${log.name}</div>
                            <div id="bl-mail">${log.mail}</div>
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
    }
}

function setStatusToB1(i) {

}
function loadTaskstoTODO() {
    let logs = tasks.filter(t => t['status'] == 'b1');
    document.getElementById('task').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        document.getElementById('task').innerHTML += `
        <div class="task">
            <div>${log.title}</div>
            <div>${log.category}</div>
            <div>Due Date</div>
           <div>${log.urgency}</div>
        </div>
        `;
    };
}
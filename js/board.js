let currentDraggedElement;


function loadTaskstoTODO() {
    let logs = tasks.filter(t => t['status'] == 'b1');
    document.getElementById('taskTodo').innerHTML = '';
    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];

        document.getElementById('taskTodo').innerHTML += `
        <div draggable="true" ondragstart="startDragging(${log.id})" class="task">
            <div>${log.title}</div>
            <div>${log.category}</div>
            <div>Due Date</div>
           <div>${log.urgency}</div>
           <div class="del">
                <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
        `;
    };

    let logs2 = tasks.filter(t => t['status'] == 'b2');
    document.getElementById('taskInprogress').innerHTML = '';
    for (let i = 0; i < logs2.length; i++) {
        const log = logs2[i];

        document.getElementById('taskInprogress').innerHTML += `
        <div draggable="true" class="task">
            <div>${log.title}</div>
            <div>${log.category}</div>
            <div>Due Date</div>
           <div>${log.urgency}</div>
        </div>
        <div class="del">
                <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
        `;
    };

    let logs3 = tasks.filter(t => t['status'] == 'b3');
    document.getElementById('taskTesting').innerHTML = '';
    for (let i = 0; i < logs3.length; i++) {
        const log = logs3[i];

        document.getElementById('taskTesting').innerHTML += `
        <div draggable="true" class="task">
            <div>${log.title}</div>
            <div>${log.category}</div>
            <div>Due Date</div>
           <div>${log.urgency}</div>
        </div>
        <div class="del">
                <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
        `;
    };

    let logs4 = tasks.filter(t => t['status'] == 'b4');
    document.getElementById('taskdone').innerHTML = '';
    for (let i = 0; i < logs4.length; i++) {
        const log = logs4[i];

        document.getElementById('taskdone').innerHTML += `
        <div draggable="true" class="task">
            <div>${log.title}</div>
            <div>${log.category}</div>
            <div>Due Date</div>
           <div>${log.urgency}</div>
        </div>
        <div class="del">
                <img src="img/del.png" alt="" onclick="deleteTask(${log.id})" id="del-btn">
            </div>
        `;
    };
}

function startDragging(id){
    currentDraggedElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drop(status) {
    tasks[currentDraggedElement]["status"] = status;
    loadTaskstoTODO();
  }

  function highlight(id) {
      document.getElementById(id).classList.add('drag-area-highlight');
  }

  function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
  }
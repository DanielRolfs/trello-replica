function editTask(taskId) {
  openTaskEditor();
  let task = getTask(taskId);
  loadTaskToForm(task);
}

function openTaskEditor() {
  hideboard();
  document.getElementById('include-addtask').classList.remove('d-none');
  document.getElementById('add-task__heading').innerHTML = 'Edit Task';
}

function getTask(taskId){
 return tasks.find(task => task.id == taskId)
}

function loadTaskToForm(task) {
 let title = document.getElementById('task__title');
 let category = document.getElementById('task__category');
 let description = document.getElementById('task__description');
 let dueDate = document.getElementById('task__date');
 let urgency = document.getElementById('task__urgency');

 title.value = task.title;
 category.value = task.category;
 description.value = task.description;
 dueDate.value = task.dueDate;
 urgency.value = task.urgency;

 getResponsibles(task);
}

function getResponsibles(task){
 responsible = task.responsible;
 
}

/* document.getElementById('add-task__heading').innerHTML = 'Add Task';
 */
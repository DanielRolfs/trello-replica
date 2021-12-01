function editTask(taskId) {
  let task = getTask(taskId);
  openTaskEditor();
  loadTaskToForm(task);
}

function getTask(taskId){
 return tasks.find(task => task.id == taskId)
}

function openTaskEditor() {
  document.querySelector('.edit-task-modal').classList.remove('d-none');
}

function loadTaskToForm(task) {

 getFormField('title').value = task.title;
 getFormField('category').value = task.category;
 getFormField('description').value = task.description;
 getFormField('date').value = task.dueDate;
 getFormField('urgency').value = task.urgency;

 getResponsibles(task);
}

function getResponsibles(task){
 let responsibleIDs = task.responsible;
 responsibleIDs.forEach(id => {responsibles.push(users.find(u => u.id == id))});
 selectedUser = responsibles;
 showResponsibles();
}

function saveChanges(task){

  task.title = getFormField('title').value;
  task.category = getFormField('category').value;
  task.description = getFormField('description').value;
  task.dueDate = getFormField('date').value;
  task.urgency = getFormField('urgency').value;
  task.responsible = getResponsibleId();

  saveTask();
}

function cancelEditTask(){
  document.querySelector('.edit-task-modal').classList.add('d-none');
  resetVariables();
}

function getFormField(field){
  return document.getElementById('edit-task__'+field);
}
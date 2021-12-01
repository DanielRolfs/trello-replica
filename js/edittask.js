function editTask(taskId) {
  let task = getTask(taskId);
  openTaskEditor();
  /* changeSubmitEvent(task) */
  loadTaskToForm(task);
}

function getTask(taskId){
 return tasks.find(task => task.id == taskId)
}

function openTaskEditor() {
  document.querySelector('.edit-task-modal').classList.remove('d-none');
}

/* function changeSubmitEvent(task){
  let form = document.getElementById('add-task__form')
  form.removeAttribute('onsubmit');
  /* form.removeEventListener('submit', ()=> {addTask(); return false})
  form.addEventListener('submit', () => {saveChanges(task); return false})

  document.getElementById('save-task-btn').innerHTML = 'Save Changes';
} */

function loadTaskToForm(task) {
 let title = document.getElementById('edit-task__title');
 let category = document.getElementById('edit-task__category');
 let description = document.getElementById('edit-task__description');
 let dueDate = document.getElementById('edit-task__date');
 let urgency = document.getElementById('edit-task__urgency');

 title.value = task.title;
 category.value = task.category;
 description.value = task.description;
 dueDate.value = task.dueDate;
 urgency.value = task.urgency;

 getResponsibles(task);
}

function getResponsibles(task){
 let responsibleIDs = task.responsible;
 responsibleIDs.forEach(id => {responsibles.push(users.find(u => u.id == id))});
 selectedUser = responsibles;
 showResponsibles();
}

function saveChanges(task){
  let title = document.getElementById('edit-task__title');
  let category = document.getElementById('edit-task__category');
  let description = document.getElementById('edit-task__description');
  let dueDate = document.getElementById('edit-task__date');
  let urgency = document.getElementById('edit-task__urgency');

  task.title = title.value;
  task.category = category.value;
  task.description = description.value;
  task.dueDate = dueDate.value;
  task.urgency = urgency.value;
  task.responsible = getResponsibleId();

  saveTask();
}
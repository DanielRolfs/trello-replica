function editTask(taskId) {
  let task = getTask(taskId);
  openTaskEditor();
  addSaveOnSubmit(task);
  loadTaskToForm(task);
}

function getTask(taskId) {
  return tasks.find((task) => task.id == taskId);
}

function addSaveOnSubmit(task) {
  let form = document.querySelector('.task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveChanges(task);
  });
}

function openTaskEditor() {
  document.querySelector('.edit-task__container').classList.remove('d-none');
  document.querySelector('.section').style.overflowY = 'hidden';
}

function loadTaskToForm(task) {
  getInputField('title').value = task.title;
  getInputField('category').value = task.category;
  getInputField('description').value = task.description;
  getInputField('date').value = task.dueDate;
  getInputField('urgency').value = task.urgency;

  getResponsibles(task);
}

function getResponsibles(task) {
  let responsibleIDs = task.responsible;
  responsibleIDs.forEach((id) => {
    responsibles.push(users.find((u) => u.id == id));
  });
  selectedUser = responsibles;
  showResponsibles();
}

function saveChanges(task) {
  task.title = getInputField('title').value;
  task.category = getInputField('category').value;
  task.description = getInputField('description').value;
  task.dueDate = getInputField('date').value;
  task.urgency = getInputField('urgency').value;
  task.responsible = getResponsibleId();

  console.log(task)
  
  saveTask();
  closeEditTask();
}

function cancelEditTask() {
  closeEditTask();
  resetForm();
  resetVariables();
}

function closeEditTask(){
  document.querySelector('.edit-task__container').classList.add('d-none');
  document.querySelector('.section').style.overflowY = 'auto';
}

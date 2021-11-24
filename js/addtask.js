function addTask() {
  addNewTask();
  /* showTaskAddedModal(); */
  showBacklog();
  loadBacklogs();
}

function addNewTask() {
  let title = document.getElementById('task__title');
  let category = document.getElementById('task__category');
  let description = document.getElementById('task__description');
  let date = document.getElementById('task__date');
  let urgency = document.getElementById('task__urgency');
  let responsable = document.getElementById('task__responsable');

  let newTask = createTask(title, category, description, date, urgency, responsable);
  saveTask(newTask);
  resetForm(title, category, description, date, urgency, responsable);
}

function createTask(title, category, description, date, urgency, responsable) {
  let id = tasks[tasks.length - 1].id + 1;
  let task = {
    id: id,
    title: title.value,
    dueDate: date.value,
    category: category.value,
    urgency: urgency.value,
    description: description.value,
    responsable: responsable.value,
    status: 'bl',
  };
  return task;
}

function saveTask(newTask) {
  tasks.push(newTask);
  backend.setItem('tasks', JSON.stringify(tasks));
}

function resetForm(title, category, description, date, urgency, responsable) {
  title.value = '';
  category.value = '';
  description.value = '';
  date.value = '';
  urgency.value = '';
  responsable.value = '';
}

function showTaskAddedModal() {
  let newTaskModal = document.getElementById('new-task-modal');
  newTaskModal.classList.remove('d-none');
}

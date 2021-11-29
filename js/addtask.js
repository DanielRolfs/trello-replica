let selectedUser = [];
let responsible = [];

function addTask() {
  let title = document.getElementById('task__title');
  let category = document.getElementById('task__category');
  let description = document.getElementById('task__description');
  let dueDate = document.getElementById('task__date');
  let urgency = document.getElementById('task__urgency');

  let newTask = new Task(
    getId(),
    title.value,
    description.value,
    category.value,
    dueDate.value,
    urgency.value,
    responsible
  );
  saveTask(newTask);
  resetForm(title, category, description, dueDate, urgency);
}

function getId() {
  let id;
  if (tasks.length > 0) {
    id = tasks[tasks.length - 1].id + 1;
  } else {
    id = 0;
  }
  return id;
}

function saveTask(newTask) {
  tasks.push(newTask);
  backend.setItem('tasks', JSON.stringify(tasks));
  showTaskAddedModal();
}

function resetForm(title, category, description, date, urgency) {
  title.value = '';
  category.value = '';
  description.value = '';
  date.value = '';
  urgency.value = '';
  document.getElementById('responsible').innerHTML = '';
}

function resetVariables() {
  selectedUser = [];
  responsible = [];
}

function showTaskAddedModal() {
  document.getElementById('add-task-modal').classList.remove('d-none');
  document.getElementById('task-added__confirmation').classList.remove('d-none');
  setTimeout(() => {
    document.getElementById('add-task-modal').classList.add('d-none');
    document.getElementById('task-added__confirmation').classList.add('d-none');
    hideboard();
    showBacklog();
    loadBacklogs();
    resetVariables();
  }, 1000);
}

function cancelAddTask() {
  hideboard();
  showBoard();
  resetVariables();
}

/* --------------- ASSIGN TASK TO USERS ---------------- */

function assignTask() {
  document.getElementById('add-task-modal').classList.remove('d-none');
  document.getElementById('assign-task__content').classList.remove('d-none');
  showUsers();
}

function showUsers() {
  users.forEach((user) => {
    document.getElementById('show-users').insertAdjacentHTML('beforeend', createUserHTML(user));
    if (isSelected(user.id)) {
      highlightUser(user.id);
    }
  });
}

function createUserHTML(user) {
  let userHTML = `
  <div id="user${user.id}" class="user__container flex-center" onclick="selectUser(${user.id})">
    <img src="${user.image}" class="user__image">
    <span class="user__username">${user.username}</span>
  </div>`;
  return userHTML;
}

function selectUser(id) {
  if (!isSelected(id)) {
    selectedUser.push(id);
  } else {
    selectedUser.splice(selectedUser.indexOf(id), 1);
  }
  highlightUser(id);
}

function isSelected(id) {
  return selectedUser.find((selected) => selected == id);
}

function highlightUser(id) {
  document.getElementById('user' + id).classList.toggle('user--selected');
}

function saveAssignment() {
  responsible = selectedUser;
  hideAddTaskModal();
  showResponsibles();
}

function cancelAssignment() {
  selectedUser = responsible;
  hideAddTaskModal();
}

function hideAddTaskModal() {
  document.getElementById('add-task-modal').classList.add('d-none');
  document.getElementById('assign-task__content').classList.add('d-none');
  document.getElementById('show-users').innerHTML = '';
}

function showResponsibles() {
  document.getElementById('responsibles').innerHTML = '';
  responsible.forEach((id, index) => {
    document.getElementById('responsibles').insertAdjacentHTML('beforeend', createResponsibleHTML(id, index));
  });
}

function createResponsibleHTML(id, index) {
  let currentUser = users.find((user) => user.id === id);
  let responsibleHTML = `
     <div id="responsible${index}" class="user__container responsibles flex-center">
       <img src="${currentUser.image}" class="user__image">
       <span class="user__username">${currentUser.username}</span>
     </div>`;
  return responsibleHTML;
}

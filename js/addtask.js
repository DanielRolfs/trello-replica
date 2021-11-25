let selectedUser = [];
let responsible = [];

function addTask() {
  addNewTask();
  /* showTaskAddedModal(); */
  showBacklog();
  loadBacklogs();
  resetVariables();
}

function addNewTask() {
  let title = document.getElementById('task__title');
  let category = document.getElementById('task__category');
  let description = document.getElementById('task__description');
  let date = document.getElementById('task__date');
  let urgency = document.getElementById('task__urgency');
  /* let responsible = document.getElementById('task__responsible'); */

  let newTask = createTask(title, category, description, date, urgency);
  saveTask(newTask);
  resetForm(title, category, description, date, urgency, responsible);
}

function createTask(title, category, description, date, urgency) {
  let id;
  if (tasks.length > 0) {
    id = tasks[tasks.length - 1].id + 1;
  } else {
    id = 0;
  }
  let task = {
    id: id,
    title: title.value,
    dueDate: date.value,
    category: category.value,
    urgency: urgency.value,
    description: description.value,
    responsible: responsible,
    status: 'bl',
  };
  return task;
}

function saveTask(newTask) {
  tasks.push(newTask);
  backend.setItem('tasks', JSON.stringify(tasks));
}

function resetForm(title, category, description, date, urgency, responsible) {
  title.value = '';
  category.value = '';
  description.value = '';
  date.value = '';
  urgency.value = '';
  responsible.value = '';
}

function resetVariables() {
  selectedUser = [];
  responsible = [];
}

/* function showTaskAddedModal() {
  let newTaskModal = document.getElementById('new-task-modal');
  newTaskModal.classList.remove('d-none');
} */

/* --------------- ASSIGN TASK TO USERS ---------------- */

function assignTask() {
  document.getElementById('assign-task-modal').classList.remove('d-none');
  showUsers();
}

function showUsers() {
  let userOverview = createUserOverview();
  userOverview.forEach((user) => {
    document.getElementById('show-users').insertAdjacentHTML('beforeend', user);
  });
}

function createUserOverview() {
  let userOverview = [];

  users.forEach((user) => {
    let curentUser = `
  <div id="user${user.id}" class="show-user__container flex-center" onclick="assignToUser(${user.id})">
    <img src="${user.image}" class="show-user__image">
    <span class="show-user__username">${user.username}</span>
  </div>`;
    userOverview.push(curentUser);
  });

  return userOverview;
}

function assignToUser(id) {
  if (!selectedUser.find((selected) => selected == id)) {
    selectedUser.push(id);
  } else {
    selectedUser.splice(selectedUser.indexOf(id), 1);
  }
  highlightUser(id);
}

function highlightUser(id) {
  document.getElementById('user' + id).classList.toggle('user--selected');
}

function saveAssignment() {
  responsible = selectedUser;
  document.getElementById('assign-task-modal').classList.add('d-none');
}
function cancelAssignment() {
  selectedUser = responsible;
  document.getElementById('assign-task-modal').classList.add('d-none');
}

function showResponsibles() {
  responsible;
}

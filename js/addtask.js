let selectedUser = [];
let responsibles = [];

function addTask() {
  let title = document.getElementById('add-task__title');
  let category = document.getElementById('add-task__category');
  let description = document.getElementById('add-task__description');
  let dueDate = document.getElementById('add-task__date');
  let urgency = document.getElementById('add-task__urgency');

  let newTask = new Task(
    getId(),
    title.value,
    description.value,
    category.value,
    dueDate.value,
    urgency.value,
    getResponsibleId()
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

function getResponsibleId() {
  return responsibles.map((r) => r.id);
}

function saveTask(newTask) {
  if (newTask) {
    tasks.push(newTask);
  }
  backend.setItem('tasks', JSON.stringify(tasks));
  showTaskSavedModal();
  redirectToBacklog();
}

function resetForm(title, category, description, date, urgency) {
  title.value = '';
  category.value = '';
  description.value = '';
  date.value = '';
  urgency.value = '';
  document.querySelector('.task-responsibles').innerHTML = '';
  /* document.getElementById('task__responsibles').innerHTML = ''; */
}

function showTaskSavedModal() {
  document.querySelector('.task-form-modal').classList.remove('d-none');
  document.querySelector('.task-saved__confirmation').classList.remove('d-none');
  /* document.getElementById('add-task-modal').classList.remove('d-none'); */
  /* document.getElementById('task-saved__confirmation').classList.remove('d-none'); */
}

function redirectToBacklog() {
  setTimeout(() => {
    document.querySelector('.task-form-modal').classList.add('d-none');
    document.querySelector('.task-saved__confirmation').classList.add('d-none');
    /* document.getElementById('add-task-modal').classList.add('d-none'); */
    /* document.getElementById('add-task__saved-confirmation').classList.add('d-none'); */
    resetVariables();
    window.location.href = './backlog.html';
  }, 1000);
}

function cancelAddTask() {
  window.location.href = './board.html';
  resetVariables();
}

function resetVariables() {
  selectedUser = [];
  responsibles = [];
}

/* --------------- ASSIGN TASK TO USERS ---------------- */

function assignTask() {
  document.querySelector('.task-form-modal').classList.remove('d-none');
  document.querySelector('.assign-task').classList.remove('d-none');
  /* document.getElementById('add-task-modal').classList.remove('d-none');
  document.getElementById('add-task__assign').classList.remove('d-none'); */
  showUsers();
}

function showUsers() {
  users.forEach((user) => {
    document.querySelector('.assign-task__user-list').insertAdjacentHTML('beforeend', createUserHTML(user));
    /* document.getElementById('add-task__assign__user-list').insertAdjacentHTML('beforeend', createUserHTML(user)); */
    addSelectFunction(user);
    if (isSelected(user)) {
      highlightUser(user.id);
    }
  });
}

function createUserHTML(user) {
  let userHTML = `
  <div id="user${user.id}" class="user__container flex-center">
    <img src="${user.image}" class="user__image">
    <span class="user__username">${user.username}</span>
  </div>`;
  return userHTML;
}

function addSelectFunction(user) {
  document.getElementById('user' + user.id).addEventListener('click', () => selectUser(user));
}

function selectUser(user) {
  if (!isSelected(user)) {
    selectedUser.push(user);
  } else {
    selectedUser.splice(selectedUser.indexOf(user), 1);
  }
  highlightUser(user.id);
}

function isSelected(user) {
  return selectedUser.find((selection) => selection == user);
}

function highlightUser(id) {
  document.getElementById('user' + id).classList.toggle('user--selected');
}

function saveAssignment() {
  responsibles = selectedUser;
  hideAddTaskModal();
  showResponsibles();
}

function cancelAssignment() {
  selectedUser = responsibles;
  hideAddTaskModal();
}

function hideAddTaskModal() {
  document.querySelector('.task-form-modal').classList.add('d-none');
  document.querySelector('.assign-task').classList.add('d-none');
  document.querySelector('.assign-task__user-list').innerHTML = '';
  /* document.getElementById('add-task-modal').classList.add('d-none');
  document.getElementById('add-task__assign').classList.add('d-none');
  document.getElementById('add-task__assign__user-list').innerHTML = ''; */
}

function showResponsibles() {
  document.querySelector('.task-responsibles').innerHTML = '';
  /* document.getElementById('add-task__responsibles').innerHTML = ''; */
  responsibles.forEach((user, index) => {
    document.querySelector('.task-responsibles').insertAdjacentHTML('beforeend', createResponsibleHTML(user, index));
    /* document.getElementById('add-task__responsibles').insertAdjacentHTML('beforeend', createResponsibleHTML(user, index)); */
  });
}

function createResponsibleHTML(user, index) {
  /* let currentUser = users.find((user) => user.id === id); */
  let responsibleHTML = `
     <div id="responsible${index}" class="user__container responsibles flex-center">
       <img src="${user.image}" class="user__image">
       <span class="user__username">${user.username}</span>
       <div class="delete-assignment-btn d-none" onclick="deleteAssignment(${index})">
         <img src="./img/delete1.png" alt="delete assginment" class="delete-assignment-btn__icon">
       </div>
     </div>`;
  return responsibleHTML;
}

function deleteAssignment(index) {
  responsibles.splice(index, 1);
  document.getElementById('responsible' + index).remove();
}

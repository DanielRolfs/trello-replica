let selectedUser = [];
let responsibles = [];

function addTask() {
  let newTask = new Task(
    getId(),
    getInputField('title').value,
    getInputField('description').value,
    getInputField('category').value,
    getInputField('date').value,
    getInputField('urgency').value,
    getResponsibleId()
  );

  saveTask(newTask);
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

function getInputField(field) {
  let inputFields = document.querySelector('.task-form').elements;
  return inputFields['task__' + field];
}

function getResponsibleId() {
  return responsibles.map((r) => r.id);
}

function saveTask(newTask) {
  if (selectedUser.length > 0) {
    executeSaving(newTask);
  } else{
    toggleAssignWarning();
    addWarningRemove();
  }
}

function executeSaving(newTask){
  if (newTask) {
    tasks.push(newTask);
  }
  console.log(tasks)
  backend.setItem('tasks', JSON.stringify(tasks));
  showTaskSavedModal();
  closeForm();
}

function showTaskSavedModal() {
  document.querySelector('.form__inner-modal').classList.remove('d-none');
  document.querySelector('.task-saved__confirmation').classList.remove('d-none');
}

function closeForm() {
  setTimeout(() => {
    resetForm();
    resetVariables();
    document.querySelector('.section').style.overflowY = 'auto';
    document.querySelector('.form__inner-modal').classList.add('d-none');
    document.querySelector('.task-saved__confirmation').classList.add('d-none');
    if (document.URL.includes('board.html')) {
      window.location.href = './board.html';
    } else {
      window.location.href = './backlog.html';
    }
  }, 1000);
}

function cancelAddTask() {
  window.location.href = './board.html';
  resetVariables();
}

function resetForm() {
  ['title', 'category', 'description', 'date', 'urgency'].forEach((e) => (getInputField(e).value = ''));
  document.querySelector('.task-responsibles').innerHTML = '';
}

function resetVariables() {
  selectedUser = [];
  responsibles = [];
}

function toggleAssignWarning(){
document.querySelector('.assign-to').classList.toggle('assign-warning');
}

function addWarningRemove(){
  document.body.addEventListener('click', function(){
    toggleAssignWarning();
  }, {once: true});
}

/* --------------- ASSIGN TASK TO USERS ---------------- */

function assignTask() {
  document.querySelector('.form__inner-modal').classList.remove('d-none');
  document.querySelector('.assign-task').classList.remove('d-none');
  showUsers();
}

function showUsers() {
  users.forEach((user) => {
    document.querySelector('.assign-task__user-list').insertAdjacentHTML('beforeend', createUserHTML(user));
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
    <div class="assign__user-details">
      <div class="user__username">${user.username}</div>
      <div class="user__mail">${user.mail}</div>
    </div>
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
  document.querySelector('.form__inner-modal').classList.add('d-none');
  document.querySelector('.assign-task').classList.add('d-none');
  document.querySelector('.assign-task__user-list').innerHTML = '';
}

function showResponsibles() {
  /* setResponsiblesHeight(); */
  document.querySelector('.task-responsibles').innerHTML = '';
  responsibles.forEach((user, index) => {
    document.querySelector('.task-responsibles').insertAdjacentHTML('beforeend', createResponsibleHTML(user, index));
  });
}

function setResponsiblesHeight() {
  document.querySelector('.task-responsibles').style.height = document.querySelector('.assign-to').clientHeight + 'px';
}

function createResponsibleHTML(user, index) {
  let responsibleHTML = `
     <div id="responsible${index}" class="user__container responsibles flex-center">
       <img src="${user.image}" class="user__image">
       <div class="assign__user-details">
         <div class="user__username">${user.username}</div>
         <div class="user__mail">${user.mail}</div>
       </div>
       <div class="delete-assignment-btn" onclick="deleteAssignment(${index})">
         <img src="./img/delete1.png" alt="delete assginment" class="delete-assignment-btn__icon">
       </div>
     </div>`;
  return responsibleHTML;
}

function deleteAssignment(index) {
  responsibles.splice(index, 1);
  document.getElementById('responsible' + index).remove();
}

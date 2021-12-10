/* ------------  FILTER SEARCH  ------------ */

function filterTasks(category, target) {
  if (filterIsActive()) {
    unhighlightCategory();
    setTimeout(() => {
      resetFilter(category);
    }, 225);
  } else {
    toggleResetBtn();
  }
  applyFilter(category);
  highlightActiveCategory(category, target);
}

function applyFilter(category) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  if (!matchingTasks(tasks, category).length > 0) {
    showFilterWarning();
  }
  hideDifferingTasks(category);
}

function matchingTasks(tasks, category) {
  return tasks.filter((t) => t.classList.contains(category));
}

function hideDifferingTasks(criterion) {
  /*  let tasks = Array.from(document.getElementsByClassName('rendered-task')); */
  let tasksToHide = getTasksToHide(criterion);
  console.log(tasksToHide)
  tasksToHide.forEach((t) => {
    t.classList.add('filter-animation--hide');
    setTimeout(() => {
      t.classList.remove('filter-animation--hide');
      t.classList.add('d-none');
    }, 225);
  });
}

function getTasksToHide(criterion) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  let tasksToHide = [];
  if (typeof criterion == 'object') {
   let regEx = new RegExp(criterion.toString().replace(/,/g, '|'));
    tasksToHide = tasks.filter((t) => !regEx.test(t.id));
  } else {
    tasksToHide = tasks.filter((t) => !t.classList.contains(criterion));
  }
  return tasksToHide;
}

function resetFilter(category) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  if (category) {
    tasks = tasks.filter((t) => t.classList.contains(category));
  } else {
    unhighlightCategory();
    toggleResetBtn();
  }
  tasks.forEach((t) => showHiddenTask(t));
}

function showHiddenTask(t) {
  t.classList.add('filter-animation--show');
  t.classList.remove('d-none');
  setTimeout(() => {
    t.classList.remove('filter-animation--show');
  }, 225);
}

function filterIsActive() {
  return !document.getElementById('reset-filter-btn').classList.contains('d-none');
}

function highlightActiveCategory(category, target) {
  if (/high|middle|low/.test(category)) {
    target.classList.add('legend__urgency--active');
  } else {
    target.classList.add('legend__category-td--active');
  }
}

function unhighlightCategory() {
  let highlighted = document.querySelector('.legend__category-td--active, .legend__urgency--active');
  highlighted.classList.remove('legend__category-td--active', 'legend__urgency--active');
}

function toggleResetBtn() {
  document.getElementById('reset-filter-btn').classList.toggle('d-none');
}

function showFilterWarning() {
  let extrabar = document.getElementById('extrabar');
  extrabar.classList.add('filter__warning');
  setTimeout(() => {
    extrabar.classList.remove('filter__warning');
  }, 2250);
}

/* --------------  INPUT SEARCH  --------------- */

function showSearchInput() {
  document.getElementById('search-input').style.visibility = 'visible';
  document.getElementById('search-input').style.width = '200px';
  document.getElementById('search-btn').setAttribute('onclick', 'hideSearchInput();');
}

function hideSearchInput() {
  document.getElementById('search-input').style.visibility = 'hidden';
  document.getElementById('search-input').style.width = '0px';
  document.getElementById('search-btn').setAttribute('onclick', 'showSearchInput();');
}

function startSearch() {
  let search = document.getElementById('search-input').value;
  if(!search){
   resetFilter();
  }
  search = search.toLowerCase();
  searchTasks(search);
}

function searchTasks(search) {
  let matchingTasks = getMatchingTasks(search);
  let matchingTasksIds = matchingTasks.map((m) => {
    return m.id;
  });
  hideDifferingTasks(matchingTasksIds);
}

function getMatchingTasks(search) {
  return tasks.filter((t) => t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search));
}

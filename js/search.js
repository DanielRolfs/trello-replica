/* ------------  FILTER SEARCH  ------------ */

function filterTasks(category, target) {
  if (filterIsActive()) {
    unhighlightCategory();
    setTimeout(() => {
      resetFilter(category);
    }, 225);
  }
  showResetBtn();
  applyFilter(category);
  highlightActiveCategory(category, target);
}

function filterIsActive() {
  return !document.getElementById('reset-filter-btn').classList.contains('d-none');
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
  let tasksToHide = getTasksToHide(criterion);
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
  let tasksToHide = tasks.filter((t) => !t.classList.contains(criterion));
  if (criterionHasTaskIds(criterion)) {
    tasksToHide = getTasksWithoutMatchingId(tasks, criterion);
  }
  return tasksToHide;
}

function resetFilter(criterion, event) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  if (criterion) {
    tasks = getTasksToShow(criterion);
  } else if (event) {
    hideSearchInput();
    hideResetBtn();
  }
  unhighlightCategory();
  tasks.forEach((t) => showHiddenTask(t));
}

function showHiddenTask(t) {
  t.classList.add('filter-animation--show');
  t.classList.remove('d-none');
  setTimeout(() => {
    t.classList.remove('filter-animation--show');
  }, 225);
}

function getTasksToShow(criterion) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  let tasksToShow = tasks.filter((t) => t.classList.contains(criterion));
  if (criterionHasTaskIds(criterion)) {
    tasksToShow = getTasksWithMatchingId(tasks, criterion);
  }
  return tasksToShow;
}

function criterionHasTaskIds(criterion) {
  return typeof criterion == 'object' && criterion.length > 0;
}

function getTasksWithMatchingId(tasks, criterion) {
  let regEx = new RegExp(criterion.toString().replace(/,/g, '|'));
  let tasksToShow = tasks.filter((t) => regEx.test(t.id));
  return tasksToShow;
}

function getTasksWithoutMatchingId(tasks, criterion) {
  let regEx = new RegExp(criterion.toString().replace(/,/g, '|'));
  let tasksToHide = tasks.filter((t) => !regEx.test(t.id));
  return tasksToHide;
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
  if (highlighted) {
    highlighted.classList.remove('legend__category-td--active', 'legend__urgency--active');
  }
}

function showResetBtn() {
  document.getElementById('reset-filter-btn').classList.remove('d-none');
}

function hideResetBtn() {
  document.getElementById('reset-filter-btn').classList.add('d-none');
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
  document.getElementById('search-input').classList.add('search-input--open');
  document.getElementById('search').classList.add('search--open');
  document.getElementById('search').setAttribute('onclick', 'hideSearchInput(event);');
}

function hideSearchInput(event) {
  if (!event || event.target.id != 'search-input') {
    document.getElementById('search-input').classList.remove('search-input--open');
    document.getElementById('search').classList.remove('search--open');
    document.getElementById('search-input').value = '';
    document.getElementById('search').setAttribute('onclick', 'showSearchInput();');
    hideResetBtn();
  }
  if (event && event.target.id == 'search-icon') {
    resetFilter();
  }
}

function startSearch() {
  let search = document.getElementById('search-input').value;
  if (!search) {
    resetFilter();
  } else {
    search = search.toLowerCase();
    searchTasks(search);
    showResetBtn();
  }
}

function searchTasks(search) {
  let matchingTasks = getMatchingTasks(search);
  let matchingTasksIds = matchingTasks.map((m) => {
    return m.id;
  });
  hideDifferingTasks(matchingTasksIds);
  setTimeout(() => {
    resetFilter(matchingTasksIds);
  }, 250);
}

function getMatchingTasks(search) {
  return tasks.filter((t) => t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search));
}

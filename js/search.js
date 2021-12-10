/* ------------  FILTER SEARCH  ------------ */

function filterTasks(category, target) {
  if (filterIsActive()) {
    unhighlightCategory();
    setTimeout(() => {
      resetFilter(category);
    }, 225);
  } /* else {
    toggleResetBtn();
  } */
  showResetBtn();
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
  let tasksToHide = [];
  if (typeof criterion == 'object' && criterion.length > 0) {
    let regEx = new RegExp(criterion.toString().replace(/,/g, '|'));
    tasksToHide = tasks.filter((t) => !regEx.test(t.id));
  } else {
    tasksToHide = tasks.filter((t) => !t.classList.contains(criterion));
  }
  return tasksToHide;
}

function resetFilter(criterion) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  if (criterion) {
    tasks = getTasksToShow(criterion);
  } else {
    unhighlightCategory();
    /* toggleResetBtn(); */
    hideResetBtn();
    resetSearchInput();
  }
  tasks.forEach((t) => showHiddenTask(t));
}

function getTasksToShow(criterion) {
  let tasks = Array.from(document.getElementsByClassName('rendered-task'));
  let tasksToShow = [];
  if (typeof criterion == 'object' && criterion.length > 0) {
    let regEx = new RegExp(criterion.toString().replace(/,/g, '|'));
    tasksToShow = tasks.filter((t) => regEx.test(t.id));
  } else {
    tasksToShow = tasks.filter((t) => t.classList.contains(criterion));
  }
  return tasksToShow;
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

/* function toggleResetBtn() {
  document.getElementById('reset-filter-btn').classList.toggle('d-none');
} */

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
  console.log(search);
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
  console.log(matchingTasksIds);
  hideDifferingTasks(matchingTasksIds);
  setTimeout(() => {
    resetFilter(matchingTasksIds);
  }, 250);
}

function getMatchingTasks(search) {
  return tasks.filter((t) => t.title.toLowerCase().includes(search) || t.description.toLowerCase().includes(search));
}

function resetSearchInput(){
 document.getElementById('search-input').value = '';
 hideSearchInput();
}
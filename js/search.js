// filter-search

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
   hideTasks(tasks, category);
}

function matchingTasks(tasks, category) {
 return tasks.filter((t) => t.classList.contains(category));
}

function hideTasks(tasks, category) {
 let tasksToHide = tasks.filter((t) => !t.classList.contains(category));
 tasksToHide.forEach((t) => {
   t.classList.add('filter-animation--hide');
   setTimeout(() => {
     t.classList.remove('filter-animation--hide');
     t.classList.add('d-none');
   }, 225);
 });
}

function resetFilter(category) {
 let tasks = Array.from(document.getElementsByClassName('rendered-task'));
 if (category) {
   tasks = tasks.filter((t) => t.classList.contains(category));
 } else {
   unhighlightCategory();
   toggleResetBtn();
 }
 tasks.forEach((t) => showTask(t));
}

function showTask(t) {
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

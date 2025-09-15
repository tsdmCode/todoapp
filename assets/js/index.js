import { retrieveData } from './retrieveData.js';
import populateList from './populateList.js';
import viewAdd from './viewAdd.js';
import deleteView from './deleteView.js';
import viewEdit from './viewEdit.js';
import saveData from './saveData.js';

//service worker mumbojumbo
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then((reg) => console.log('Service Worker registered with scope:', reg.scope))
    .catch((err) => console.error('Service Worker registration failed:', err));
}

const viewport = document.getElementById('viewport');
const listHead = document.getElementById('list-default');
let activeList = '';
let appState = '';

function buildPage() {
  const data = retrieveData();

  //TODO: lav om på det så den kun smider EN liste op og kun når den bliver kaldt
  //loop der skaber hver liste

  populateList();
}

function setActiveList(val) {
  activeList = val;
  console.log(val, ' is currently active');
}

function setAppstate(val) {
  appState = val;
}

const data = {
  darkMode: true,
  lists: [
    {
      name: 'Sample',
      id: '2',
      tasks: [
        { text: 'sample text', done: false },
        { text: 'Another sample text', done: true },
      ],
    },
    {
      name: 'Sample2',
      id: '3',
      tasks: [
        { text: 'sample text', done: false },
        { text: 'Another sample text', done: true },
      ],
    },
  ],
};

buildPage();

function applyTheme() {
  const data = retrieveData();
  if (data.darkMode) {
    document.body.classList.add('dark-mode');
    viewport.classList.add('dark-mode');
    document.getElementById('global-header').classList.add('dark-mode');
    document.getElementById('toggleTheme').checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    viewport.classList.remove('dark-mode');
    document.getElementById('global-header').classList.remove('dark-mode');
    document.getElementById('toggleTheme').checked = false;
  }
}

function toggleTheme() {
  const data = retrieveData();
  data.darkMode = !data.darkMode;
  saveData(data);
  applyTheme();
}

document.getElementById('toggleTheme').addEventListener('change', toggleTheme);

window.addEventListener('DOMContentLoaded', applyTheme);

//event listeners
document.getElementById('addTask').addEventListener('click', () => {
  console.log(activeList);
  if (activeList === '') {
    alert('Vælg en liste!');
    return;
  }
  viewAdd(activeList, 'task');
});
document.getElementById('addList').addEventListener('click', () => {
  viewAdd(activeList, 'list');
});
document.getElementById('deleteList').addEventListener('click', () => {
  deleteView(null, activeList, null, 'list');
});

document.getElementById('editListBtn').addEventListener('click', () => {
  // Pass current list name, listId, null for taskIndex, and 'list' as mode
  const data = retrieveData();
  const list = data.lists.find((l) => l.id === activeList);
  if (list) {
    viewEdit(list.name, list.id, null, 'list');
  }
});

export { viewport, listHead, activeList, setActiveList };

/*
Så jeg kan huske hvordan man gør tingene

data.lists.forEach((element) => {
  console.log(element.name);
});

data.lists[0].tasks.push({ text: 'Some add stuff', done: false });

console.log(data);

const sampleIndex = data.lists.findIndex((list) => list.name === 'Sample');

data.lists[sampleIndex].name = 'Fuck you';

console.log(data);
 */

import { retrieveData } from './retrieveData.js';
import fetchList from './fetchList.js';
import populateList from './populateList.js';

export default function editItem(listId, mode, editDiag, name, taskIndex) {
  const data = retrieveData();
  const { lists } = data;

  if (mode === 'list') {
    const list = lists.find((l) => l.id === listId);
    if (list) {
      list.name = name;
      localStorage.setItem('todoapp_data', JSON.stringify(data));
      fetchList(listId);
    }
  } else if (mode === 'task') {
    const list = lists.find((l) => l.id === listId);
    if (list && list.tasks[taskIndex]) {
      list.tasks[taskIndex].text = name;
      localStorage.setItem('todoapp_data', JSON.stringify(data));
      fetchList(listId);
    }
  }
  populateList();
  editDiag.close();
}

function applyTheme() {
  if (retrieveData().darkMode) {
    document.body.classList.add('dark-mode');
    viewport.classList.add('dark-mode');
    document.getElementById('global-header').classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    viewport.classList.remove('dark-mode');
    document.getElementById('global-header').classList.remove('dark-mode');
  }
}

function toggleTheme() {
  const data = retrieveData();
  data.darkMode = !data.darkMode;
  localStorage.setItem('todoapp_data', JSON.stringify(data));
  applyTheme();
}

document.getElementById('toggleTheme').addEventListener('click', toggleTheme);

window.addEventListener('DOMContentLoaded', applyTheme);

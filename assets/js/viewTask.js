import { retrieveData } from './retrieveData.js';
import fetchList from './fetchList.js';
import deleteView from './deleteView.js';
import viewEdit from './viewEdit.js';

export default function viewTask(task, listId, taskIndex) {
  const dialog = document.createElement('dialog');
  const menu = document.getElementById('menu');
  dialog.classList.add('task-dialog');

  let { text, done } = task;

  let btnText = done ? 'Not Done' : 'Done';

  dialog.innerHTML = `<i id="close-dialog" class="fa-solid fa-xmark"></i><h2>${text}</h2></div><button id="edit">Edit</button><button id="doneBtn">${btnText}</button><button id="deleteBtn">DELETE</button>`;
  document.body.append(dialog);
  dialog.showModal();

  dialog.querySelector('#doneBtn').onclick = (e) => {
    e.preventDefault();
    done = !done;
    btnText = done ? 'Not Done' : 'Done';
    dialog.querySelector('#doneBtn').textContent = btnText;

    const data = retrieveData();
    // Finder listen med task'en i
    const list = data.lists.find((l) => l.id === listId);
    if (list && list.tasks[taskIndex]) {
      list.tasks[taskIndex].done = done;
      localStorage.setItem('todoapp_data', JSON.stringify(data));

      fetchList(listId);
    }
    //console.log('Updated done:', done);
    dialog.close();
    dialog.remove();
  };

  dialog.querySelector('#deleteBtn').onclick = (e) => {
    deleteView(text, listId, taskIndex, 'task');
    dialog.close();
    dialog.remove();
  };
  dialog.querySelector('#edit').onclick = (e) => {
    viewEdit(text, listId, taskIndex, 'task');
    dialog.close();
    dialog.remove();
  };

  dialog.querySelector('#close-dialog').onclick = () => {
    dialog.close();
    dialog.remove();
  };
}

import { retrieveData } from './retrieveData.js';
import updateView from './updateView.js';
import fetchList from './fetchList.js';
import { activeList } from './index.js';
import deleteView from './deleteView.js';
import viewEdit from './viewEdit.js';

export default function viewTask(task, listId, taskIndex) {
  // console.log('I have been called with', task);
  const dialog = document.createElement('dialog');
  dialog.classList.add('task-dialog');

  let { text, done } = task;
  //  console.log(done);
  let btnText = done ? 'Not Done' : 'Done';

  dialog.innerHTML = `<div id="close-dialog">X<div>${text}</div><button id="edit">Edit</button><button id="doneBtn">${btnText}</button><button id="deleteBtn">DELETE</button>`;
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
  };

  dialog.querySelector('#deleteBtn').onclick = (e) => {
    deleteView(text, listId, taskIndex, 'task');
  };
  dialog.querySelector('#edit').onclick = (e) => {
    viewEdit(text, listId, taskIndex, 'task');
  };

  dialog.querySelector('#close-dialog').onclick = () => dialog.close();
}

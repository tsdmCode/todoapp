import { activeList, viewport } from './index.js';
import viewTask from './viewTask.js';

export default function updateView(list) {
  viewport.innerHTML = '';

  if (activeList === '') {
    return;
  }

  const { name, tasks } = list;

  const listHead = document.createElement('ul');
  const listName = document.createElement('li');

  listName.innerText = name;
  listName.classList.add('list-head');
  listHead.append(listName);

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.innerText = task.text;
    item.classList.add('list-item');
    if (task.done) {
      item.classList.add('done');
    }

    listHead.append(item);

    item.addEventListener('click', () => {
      viewTask(task, list.id, index);
    });
  });

  viewport.append(listHead);
}

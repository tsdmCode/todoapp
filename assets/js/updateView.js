import { viewport } from './index.js';
import viewTask from './viewTask.js';

export default function updateView(list) {
  console.log('my list is ', list);
  viewport.innerHTML = '';
  const { name, tasks } = list;

  const listHead = document.createElement('ul');
  const listName = document.createElement('li');
  listName.innerText = name;
  listHead.append(listName);

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.innerText = task.text;

    if (task.done) {
      item.classList.add('done');
    }

    listName.append(item);

    item.addEventListener('click', () => {
      viewTask(task, list.id, index);
    });
  });

  viewport.append(listHead);
}

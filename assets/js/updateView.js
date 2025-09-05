import { viewport } from './index.js';

export default function updateView(list) {
  console.log('my list is ', list);
  viewport.innerHTML = '';
  const { name, tasks } = list;

  const listHead = document.createElement('ul');
  const listName = document.createElement('li');
  listName.innerText = name;
  listHead.append(listName);

  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.innerText = task.text;

    if (task.done) {
      item.classList.add('done');
    }
    listName.append(item);

    task.addEventListener('click', () => {
      viewTask(task);
    });
  });

  viewport.append(listHead);
}

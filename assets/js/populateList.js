import { retrieveData } from './retrieveData.js';
import { listHead } from './index.js';
import fetchList from './fetchList.js';

export default function populateList() {
  const data = retrieveData();
  const listMenu = document.getElementById('list-select');

  listMenu.innerHTML = '';

  const { lists } = data;
  //console.log(lists);
  if (lists.length > 0) {
    listHead.innerHTML = 'Select';

    lists.forEach((element) => {
      const list = document.createElement('li');

      list.innerHTML = element.name;
      list.dataset.id = element.id;

      list.addEventListener('click', (e) => {
        listHead.innerHTML = list.innerText;

        fetchList(e.currentTarget.dataset.id);
      });

      listMenu.append(list);
    });
  }
  // der her skal genbruges
  /* lists.forEach((element) => {
    //skaber listen's header
    const list = document.createElement('ul');
    const listTitle = document.createElement('li');
    listTitle.classList.add('list-title');
    listTitle.innerText = element.name;

    //loop der smider hver task ind under den relevante liste
    element.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.innerText = task.text;
      taskItem.classList.add(task.done ? 'finished' : 'unfinished');
      listTitle.append(taskItem);
    });
    list.append(listTitle);
    viewport.append(list);
  }); */
}

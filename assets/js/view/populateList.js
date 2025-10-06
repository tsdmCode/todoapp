import { retrieveData } from '../model/retrieveData.js';
import { listHead } from '../controller/index.js';
import fetchList from '../controller/fetchList.js';

export default function populateList() {
  const data = retrieveData();
  const listMenu = document.getElementById('list-select');

  listMenu.innerHTML = '';

  const { lists } = data;

  if (lists.length > 0) {
    listHead.innerHTML = 'Select';

    lists.forEach((element) => {
      const list = document.createElement('li');

      list.innerHTML = element.name;
      list.dataset.id = element.id;
      list.tabIndex = 1;
      list.addEventListener('click', (e) => {
        listHead.innerHTML = list.innerText;

        fetchList(e.currentTarget.dataset.id);
      });

      listMenu.append(list);
    });
  }
}

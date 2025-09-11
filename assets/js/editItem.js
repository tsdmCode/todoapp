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

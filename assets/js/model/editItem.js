import { retrieveData } from './retrieveData.js';
import fetchList from '../controller/fetchList.js';
import populateList from '../view/populateList.js';
import saveData from './saveData.js';

export default function editItem(listId, mode, editDiag, name, taskIndex) {
  const data = retrieveData();
  const { lists } = data;

  if (mode === 'list') {
    const list = lists.find((l) => l.id === listId);
    if (list) {
      list.name = name;
      saveData(data);
      fetchList(listId);
    }
  } else if (mode === 'task') {
    const list = lists.find((l) => l.id === listId);
    if (list && list.tasks[taskIndex]) {
      list.tasks[taskIndex].text = name;
      saveData(data);
      fetchList(listId);
    }
  }
  populateList();
  editDiag.close();
  editDiag.remove();
}

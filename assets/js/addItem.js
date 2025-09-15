import { retrieveData } from './retrieveData.js';
import fetchList from './fetchList.js';
import populateList from './populateList.js';
import saveData from './saveData.js';

export default function addItem(listId, mode, addDiag, name) {
  const data = retrieveData();

  const { lists } = data;

  if (mode === 'list') {
    lists.push({ name, id: crypto.randomUUID(), tasks: [] });

    saveData(data);
    fetchList(lists[lists.length - 1].id);
  } else {
    const listIndex = lists.findIndex((l) => l.id === listId);

    lists[listIndex].tasks.push({ text: name, done: false });

    saveData(data);
    fetchList(listId);
  }
  populateList();
  addDiag.close();
  addDiag.remove();
}

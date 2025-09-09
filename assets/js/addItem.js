import { retrieveData } from './retrieveData.js';
import fetchList from './fetchList.js';
import populateList from './populateList.js';

export default function addItem(listId, mode, addDiag, name) {
  const data = retrieveData();

  const { lists } = data;

  if (mode === 'list') {
    lists.push({ name, id: crypto.randomUUID(), tasks: [] });

    localStorage.setItem('todoapp_data', JSON.stringify(data));
    fetchList(lists[lists.length - 1].id);
  } else {
    const listIndex = lists.findIndex((l) => l.id === listId);

    lists[listIndex].tasks.push({ text: name, done: false });

    localStorage.setItem('todoapp_data', JSON.stringify(data));

    fetchList(listId);
  }
  populateList();
  addDiag.close();
}

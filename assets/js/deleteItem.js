import { setActiveList } from './index.js';
import populateList from './populateList.js';
import { retrieveData } from './retrieveData.js';
import saveData from './saveData.js';
import updateView from './updateView.js';

export default function deleteItem(listId, taskIndex, mode, deleteDiag) {
  //console.log('NU SLETTER JEG ', task);
  const data = retrieveData();
  const list = data.lists.find((l) => l.id === listId);

  switch (mode) {
    case 'task':
      list.tasks.splice(taskIndex, 1);
      saveData(data);
      deleteDiag.close();
      deleteDiag.remove();
      updateView(list);
      break;
    case 'list':
      const listIndex = data.lists.findIndex((l) => l.id === listId);

      if (listIndex !== -1) {
        data.lists.splice(listIndex, 1);
        saveData(data);
        deleteDiag.close();
        deleteDiag.remove();
        setActiveList('');
        updateView(list);
        populateList();
        console.log('List deleted:', listId);
      }
      break;
    default:
      console.log('Error: invalid view');
      break;
  }
}

import { retrieveData } from './retrieveData.js';
import updateView from './updateView.js';

export default function deleteItem(task, listId, taskIndex, mode, deleteDiag) {
  //console.log('NU SLETTER JEG FUCKING', task);
  const data = retrieveData();
  const list = data.lists.find((l) => l.id === listId);

  switch (mode) {
    case 'task':
      list.tasks.splice(taskIndex, 1);
      localStorage.setItem('todoapp_data', JSON.stringify(data));
      deleteDiag.close();
      updateView(list);
      break;
    case 'list':
      const listIndex = data.lists.findIndex((l) => l.id === listId);
      if (listIndex !== -1) {
        data.lists.splice(listIndex, 1);
        localStorage.setItem('todoapp_data', JSON.stringify(data));
        deleteDiag.close();
        updateView(list);
        console.log('List deleted:', listId);
      }
    default:
      console.log('Error: invalid view');
      break;
  }
}

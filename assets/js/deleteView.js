import { retrieveData } from './retrieveData.js';
import updateView from './updateView.js';
export default function deleteView(task, listId, taskIndex, mode) {
  console.log('Hej med dig jeg hedder kaj', task, listId, taskIndex, mode);

  const deleteDiag = document.createElement('dialog');

  deleteDiag.innerHTML = `<h2>vil du virkelig slette ${task}?</h2><div class="buttonContainer"><button id="confirmDelete">SLET</button><button id="close-dialog" onclick="deleteDiag.close()">FORTRYD</button></div>`;

  document.body.append(deleteDiag);

  deleteDiag.querySelector('#confirmDelete').onclick = (e) => {
    console.log('NU SLETTER JEG FUCKING', task);
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

          console.log('List deleted:', listId);
        }
      default:
        break;
    }
  };

  deleteDiag.querySelector('#close-dialog').onclick = () => deleteDiag.close();

  deleteDiag.showModal();
}

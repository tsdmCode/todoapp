import { retrieveData } from './retrieveData.js';
import deleteItem from './deleteItem.js';

export default function deleteView(item, listId, taskIndex, mode) {
  console.log('Hej med dig jeg hedder kaj', item, listId, taskIndex, mode);

  const deleteDiag = document.createElement('dialog');
  let displayName = item;

  if (mode === 'list') {
    const data = retrieveData();
    const foundList = data.lists.find((l) => l.id === listId);
    console.log('Trying to find list:', listId, foundList);
    if (foundList) {
      displayName = foundList.name;
    }
  }

  deleteDiag.innerHTML = `<h2>vil du virkelig slette ${
    mode === 'task' ? 'tasken' : 'listen'
  } ${displayName}?</h2><div class="buttonContainer"><button id="confirmDelete">SLET</button><button id="close-dialog" onclick="deleteDiag.close()">FORTRYD</button></div>`;

  document.body.append(deleteDiag);

  deleteDiag.querySelector('#confirmDelete').onclick = (e) => {
    //console.log('NU SLETTER JEG FUCKING', item);
    deleteItem(listId, taskIndex, mode, deleteDiag);
  };

  deleteDiag.querySelector('#close-dialog').onclick = () => {
    deleteDiag.close();
    deleteDiag.remove();
  };

  deleteDiag.showModal();
}

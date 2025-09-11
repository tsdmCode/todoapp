import editItem from './editItem.js';

export default function viewEdit(name, listId, taskIndex, mode) {
  //text, listId, taskIndex, 'task'
  const editDiag = document.createElement('dialog');
  const prompt = document.createElement('h2');
  prompt.innerText = `Hvad skal ${mode === 'list' ? 'listen' : 'tasken'} nu hedde?`;
  const nameOfItem = document.createElement('input');
  nameOfItem.value = name;
  const saveButton = document.createElement('button');
  saveButton.innerText = 'Gem';
  const discardButton = document.createElement('button');
  discardButton.innerText = 'Annulér';

  editDiag.append(prompt);
  editDiag.append(nameOfItem);
  editDiag.append(saveButton);
  editDiag.append(discardButton);

  document.body.append(editDiag);

  editDiag.showModal();

  saveButton.addEventListener('click', () => {
    const name = nameOfItem.value;

    if (mode === 'list') {
      editItem(listId, mode, editDiag, name, taskIndex);
    } else {
    }
  });
}

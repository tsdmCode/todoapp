import addItem from '../model/addItem.js';
import sanitizeInput from '../model/santizeInput.js';

export default function viewAdd(listId, mode) {
  const addDiag = document.createElement('dialog');
  const prompt = document.createElement('h2');
  prompt.innerText = `Hvad skal ${mode === 'list' ? 'listen' : 'tasken'} hedde?`;
  const nameOfItem = document.createElement('input');
  const saveButton = document.createElement('button');
  saveButton.innerText = 'Gem';
  const discardButton = document.createElement('button');
  discardButton.innerText = 'Annulér';

  addDiag.append(prompt);
  addDiag.append(nameOfItem);
  addDiag.append(saveButton);
  addDiag.append(discardButton);

  document.body.append(addDiag);

  addDiag.showModal();

  saveButton.addEventListener('click', () => {
    const name = nameOfItem.value;
    const isValid = sanitizeInput(name);

    if (isValid) {
      addItem(listId, mode, addDiag, name);
    } else {
      alert('Dit input er for vildt my guy');
    }
  });

  discardButton.addEventListener('click', () => {
    addDiag.close();
    addDiag.remove();
  });
}

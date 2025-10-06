import updateView from '../view/updateView.js';
import { retrieveData } from '../model/retrieveData.js';
import { setActiveList } from './index.js';

export default function fetchList(str) {
  setActiveList(str);

  const data = retrieveData();
  const foundList = data.lists.find((list) => list.id === str);

  if (foundList) {
    console.log('Found list:', foundList);

    updateView(foundList);
  } else {
    console.log('No list found with id:', str);
  }
}

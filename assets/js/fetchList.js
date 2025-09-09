import updateView from './updateView.js';
import { retrieveData } from './retrieveData.js';
import { activeList, setActiveList } from './index.js';

export default function fetchList(str) {
  setActiveList(str);
  console.log(activeList);
  const data = retrieveData();
  const foundList = data.lists.find((list) => list.id === str);

  if (foundList) {
    console.log('Found list:', foundList);
    // You can add code here to display the list or update the UI
    //TODO add en global activelist variable
    updateView(foundList);
  } else {
    console.log('No list found with id:', str);
  }
}

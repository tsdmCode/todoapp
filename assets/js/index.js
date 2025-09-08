import { retrieveData } from './retrieveData.js';
import populateList from './populateList.js';
import updateView from './updateView.js';
const viewport = document.getElementById('viewport');
const listHead = document.getElementById('list-default');
let activeList = '';
let appState = '';

function buildPage() {
  const data = retrieveData();

  //TODO: lav om på det så den kun smider EN liste op og kun når den bliver kaldt
  //loop der skaber hver liste

  populateList();
}

function setActiveList(val) {
  activeList = val;
  console.log(val, ' is currently active');
}

function setAppstate(val) {
  appState = val;
}

const data = {
  darkMode: false,
  lists: [
    {
      name: 'Sample',
      id: '2',
      tasks: [
        { text: 'sample text', done: false },
        { text: 'Another sample text', done: true },
      ],
    },
    {
      name: 'Sample2',
      id: '3',
      tasks: [
        { text: 'sample text', done: false },
        { text: 'Another sample text', done: true },
      ],
    },
  ],
};

buildPage();

/*
Så jeg kan huske hvordan man gør tingene

data.lists.forEach((element) => {
  console.log(element.name);
});

data.lists[0].tasks.push({ text: 'Some add stuff', done: false });

console.log(data);

const sampleIndex = data.lists.findIndex((list) => list.name === 'Sample');

data.lists[sampleIndex].name = 'Fuck you';

console.log(data);
 */

export { viewport, listHead, activeList, setActiveList };

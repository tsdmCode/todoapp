import { retrieveData } from './retrieveData';
const viewport = document.getElementById('viewport');
console.log(retrieveData());

function buildPage() {
  const data = retrieveData();

  //TODO: lav om på det så den kun smider EN liste op og kun når den bliver kaldt
  //loop der skaber hver liste
}

buildPage();

//skal populate vores select element
function populateList() {
  const data = retrieveData();
  const listMenu = document.getElementById('list-select');

  listMenu.innerHTML = '';

  const { lists } = data;

  if (lists.length > 0) {
    const listHead = document.getElementById('list-default');
    lists.forEach((element) => {
      const list = document.createElement('li');
      list.classList.add('list-item');
      list.innerHTML = element.name;

      list.addEventListener('click', () => {
        listHead.innerHTML = list.innerText;

        fetchList(listHead.innerText);
      });

      listMenu.append('list');
    });
  }

  /* lists.forEach((element) => {
    //skaber listen's header
    const list = document.createElement('ul');
    const listTitle = document.createElement('li');
    listTitle.classList.add('list-title');
    listTitle.innerText = element.name;

    //loop der smider hver task ind under den relevante liste
    element.tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.innerText = task.text;
      taskItem.classList.add(task.done ? 'finished' : 'unfinished');
      listTitle.append(taskItem);
    });
    list.append(listTitle);
    viewport.append(list);
  }); */
}

const data = {
  darkMode: false,
  lists: [
    {
      name: 'Sample',
      id: crypto.randomUUID(),
      tasks: [
        { text: 'sample text', done: false },
        { text: 'Another sample text', done: true },
      ],
    },
    {
      name: 'Sample2',
      id: crypto.randomUUID(),
      tasks: [
        { text: 'sample text', done: false },
        { text: 'Another sample text', done: true },
      ],
    },
  ],
};

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

function retrieveData() {
  const userData = localStorage.getItem('todoapp_data');
  return userData
    ? JSON.parse(userData)
    : {
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

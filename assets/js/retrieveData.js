function retrieveData() {
  const userData = localStorage.getItem('todoapp_data');

  return userData
    ? JSON.parse(userData)
    : {
        darkMode: false,
        lists: [
          {
            name: 'Sample',
            id: 'fick you',
            tasks: [
              { text: 'sample text', done: false },
              { text: 'Another sample text', done: true },
            ],
          },
          {
            name: 'Sample2',
            id: 'die',
            tasks: [
              { text: 'sample text', done: false },
              { text: 'Another sample text', done: true },
            ],
          },
        ],
      };
}

export { retrieveData };

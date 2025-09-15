function retrieveData() {
  const userData = localStorage.getItem('todoapp_data');

  return userData
    ? JSON.parse(userData)
    : {
        darkMode: true,
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
          {
            name: 'Jeg siger hejhej',
            id: '4',
            tasks: [
              { text: 'sample text', done: false },
              { text: 'Another sample text', done: true },
              { text: 'Babbaganoosh', done: true },
              { text: 'Noget mere', done: false },
              { text: 'Troels', done: true },
              { text: 'Har', done: false },
              { text: 'A man', done: true },
              { text: 'A plan', done: false },
              { text: 'a canal', done: true },
              { text: 'Panama', done: false },
            ],
          },
        ],
      };
}

export { retrieveData };



const socket = require('socket.io-client')('http://localhost:3000',
  {
    query: {
      entityId: 'soso',
      token: 'soso',
      guid: 'soso',
      app_version: 'soso',
    },
  });



socket.on('connect', () => {
  console.log('connected client 1 done');
});

socket.on('ping', () => {
  console.log('client 1 pingoooo');
});


socket.on('teet', (data, callback) => {
  console.log(`------------------teet-------------------------`);
});

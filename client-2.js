

const socket = require('socket.io-client')('http://localhost:5000',
  {
    query: {
      entityId: 'soso',
      token: 'soso',
      guid: 'soso',
      app_version: 'soso',
    },
  });



socket.on('connect', () => {
  console.log('connected client 2 done');
});

socket.on('ping', () => {
  console.log('client 2 pingoooo');
});


socket.on('teet', (data, callback) => {
  console.log(`------------------teet-------------------------`);
});

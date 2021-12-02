const net = require('net');
const { connect } = require('./client');
const { setupInput } = require('./input');

const server = net.createServer();

console.log('Connecting...');
let newConnection = connect();
setupInput(newConnection);

server.on('connection', (client) => {
  console.log('New client connected!');
  
  client.write('Welcome to my awesome server! 🍿');
});

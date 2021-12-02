const net = require('net');
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  //translates incoming data as text
  conn.setEncoding('utf8');

  //retrieve data from the server and console.log the output
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //display name of my snake
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: HC');
  });

  return conn;
};

module.exports = { connect };

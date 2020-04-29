const io = require('socket.io-client');
const url = 'http://localhost:3000';

const options = {
  transports: ['websocket'],
  'force new connection': true
};

exports.connectPlayer = (name, callback) => {
  const socket = io.connect(url, options);
  const player = { socket };

  socket.on('connect', () => {
    socket.emit('name', name);
    socket.on('name response', (response) => {
      player.nameResponse = response;
    });

    callback(player);
  });
};

exports.connectPlayers = function (names, callback) {
  connectPlayers(names, [], callback);
};

function connectPlayers(names, players, callback) {
  if (names.length === 0) {
    callback(players);
    return;
  }

  exports.connectPlayer(names[0], player => {
    players.push(player);
    connectPlayers(names.slice(1), players, callback);
  });
}

exports.disconnectPlayers = players => {
  players.forEach(player => {
    player.disconnect();
  });
};

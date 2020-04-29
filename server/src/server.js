const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const program = require('commander');

const Game = require('./game');
const Player = require('./player');

const PORT = 3000;

program
	.version('0.1')
	//.option('-w, --webclient <directory>', 'The directory served')
  .parse(process.argv);

//app.use(express.static(program.webclient));

const onConnect = (game) => (socket) => {
  socket.on('name', onPlayerName(game, socket));
};

const onPlayerName = (game, socket) => (name) => {
  try {
    const player = new Player(name, socket.id);
    game.addPlayer(player);
    console.log('A user identified as [' + name + "]");
    socket.emit('name response', true);
  } catch (error) {
    console.log('User cannot join : ', error.message);
    socket.emit('name response', false, error.message);
  }
};

io.on('connection', onConnect(new Game()));

http.listen(PORT, () => {
  console.log('Online boulette server listening on port ' + PORT);
});

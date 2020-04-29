class Player {
  constructor(name, socketId) {
    this.name = name;
    this.socketId = socketId;
    this.score = 0;
  }

  incrementScore() {
    this.score++;
  }

  decrementScore() {
    this.score--;
  }
}

module.exports = Player;

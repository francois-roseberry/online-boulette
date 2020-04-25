class Player {
    constructor(name) {
        this.name = name;
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
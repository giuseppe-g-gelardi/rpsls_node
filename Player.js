const prompt = require('prompt-sync')()

class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.playerMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    this.choice;
  }
}

module.exports = {
  Player: Player
}
const prompt = require('prompt-sync')()

class Player {
  constructor(name, score) {
    this.name = name
    this.score = score
    this.playerMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  }
}

module.exports = {
  Player: Player
}
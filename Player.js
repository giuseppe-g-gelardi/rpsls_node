const prompt = require('prompt-sync')()

class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.playerMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  }
}

module.exports = {
  Player: Player
}
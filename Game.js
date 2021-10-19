const prompt = require('prompt-sync')()
const { Player } = require('./player')
const { Human } = require('./human')
const { AI } = require('./ai')

class Game {
  constructor(name) {
    console.log('hello player1, what is your name?')
    let player1Name = prompt()
    this.player1 = Human(player1Name)
    this.player2 = AI('computer')
  }

  runGame() {
    // this method will run the game
  }

}

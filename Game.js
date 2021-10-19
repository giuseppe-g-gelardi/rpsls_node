const prompt = require('prompt-sync')()
const { Player } = require('./player') // required? prob not
const { Human } = require('./human')
const { AI } = require('./ai')

class Game {
  constructor() {
    console.log('hello player1, what is your name?')
    let player1Name = prompt()
    this.player1 = new Human(player1Name)
    this.player2 = new AI('computer')

  }

  // method that controls the flow of the game
  runGame() {
    this.gameMessage()
  }

  // displays opening game message
  gameMessage() {

    console.log(`${this.player1.player1} has entered the fray`)
    console.log('Welcome to rock, paper, scissors, lizard, spock!')
    console.log('best of 3 wins!')
    console.log(`
    \nTHE RULES!\n
    \nScissors cut Paper
    \nPaper covers Rock
    \nRock crushes Lizard
    \nLizard poisons Spock
    \nSpock smashes Scissors
    \nScissors decapitates Lizard
    `)
  }

}


module.exports = {
  Game: Game
}


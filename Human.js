const { Player } = require('./Player')
const prompt = require('prompt-sync')()

class Human extends Player {
  constructor() {
    super(name)
      this.player1 = name
      this.player2 = name
  }

  gestures() {
    console.log('please choose: rock, paper, scissors, lizard or spock')
    this.playerChoice = prompt().toLowerCase()
    for (let i = 0; i < this.playerMoves.length; i++) {
      if (this.playerMoves[i] === this.playerChoice) {
        console.log(this.playerChoice)
      } else {
        console.log('sorry, invalid choice')
        console.log('please choose: rock, paper, scissors, lizard or spock')
        this.playerChoice = prompt().toLowerCase()
      }
   

    }

  }
}

module.exports ={
  Human: Human
}
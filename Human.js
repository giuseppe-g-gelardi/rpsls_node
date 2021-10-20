const prompt = require('prompt-sync')()
const { Player } = require('./player')

class Human extends Player {
  constructor(name) {
    super(name)
  }

  gestures() {
    console.log('please choose: rock, paper, scissors, lizard or spock')
    let playerChoice = prompt()
    
    this.choice = this.playerMoves.find(move => move === playerChoice)

    if (this.choice === undefined) {
      console.log('invalid choice, please try again')
      this.gestures()
    } else {
      console.log(this.choice)
    }
  }
}

module.exports ={
  Human: Human
}
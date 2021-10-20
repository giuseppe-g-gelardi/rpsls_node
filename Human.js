const { Player } = require('./player')
const prompt = require('prompt-sync')()

class Human extends Player {
  constructor(name) {
    super()
      this.player1 = name
      this.player2 = name
  }

  gestures() {
    console.log('please choose: rock, paper, scissors, lizard or spock')
    let playerChoice = prompt()
    
    let choice = this.playerMoves.find(move => move === playerChoice.toLowerCase())

    if (choice === undefined) {
      console.log('invalid choice, please try again')
      player1.gestures()
    } else {
      console.log(choice)
    }

  }
}

// let player1 = new Human('player')
// player1.gestures()

module.exports ={
  Human: Human
}
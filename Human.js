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
    
    let player1move = this.playerMoves.find(move => move === playerChoice.toLowerCase())

    if (player1move === undefined) {
      console.log('invalid choice, please try again')
      player1.gestures()
    } else {
      console.log(player1move)
    }

  }
}

// let player1 = new Human('player')
// player1.gestures()

module.exports ={
  Human: Human
}
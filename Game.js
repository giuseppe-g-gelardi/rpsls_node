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
    this.gestureCompare()
  }

  // displays opening game message
  gameMessage() {
    console.clear()
    console.log(`${this.player1.player1} has entered the fray...`)
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

  gestureCompare() {
    while (this.player1.score < 3 && this.player2.score < 3) {
      this.player1.gestures()
      this.player2.gestures()



      if (this.player1.choice === this.player2.choice) {
        console.log('tie! play again!')
      } else if (this.player1.choice === 'rock' && this.player2.choice === 'scissors' || 
                this.player1.choice === 'scissors' && this.player2.choice === 'paper' ||
                this.player1.choice === 'paper' && this.player2.choice === 'rock' ||
                this.player1.choice === 'rock' && this.player2.choice === 'lizard' ||
                this.player1.choice === 'lizard' && this.player2.choice === 'spock' ||
                this.player1.choice === 'spock' && this.player2.choice === 'scissors' ||
                this.player1.choice === 'lizard' && this.player2.choice === 'paper' ||
                this.player1.choice === 'paper' && this.player2.choice === 'spock' ||
                this.player1.choice === 'spock' && this.player2.choice === 'rock' ||
                this.player1.choice === 'scissors' && this.player2.choice === 'lizard') {
                  this.player1.score += 1
                  console.log(`${this.player1.choice} beats! ${this.player2.choice}. Player 1 wins!`)
                  console.log(`score is Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
                  return this.gestureCompare()
                } else {
                  this.player2.score += 1
                  console.log(`${this.player2.choice} beats! ${this.player1.choice}. Player 2 wins!`)
                  console.log(`score is Player 1: ${this.player1.score}, Player 2: ${this.player2.score}`)
  
                }
    }

    
  }





}


module.exports = {
  Game: Game
}


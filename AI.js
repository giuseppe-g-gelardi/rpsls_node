const { Player } = require('./player')

class AI extends Player {
  constructor(name) {
    super()
    this.name = name
  }

  // ai() {
  //   this.ai = new AI('Mr. Roboto')
  // }

  // computerChoice() {
  //   let rand = Math.floor(Math.random() * 5)
  //   let opponentMove = this.playerMoves[rand]
  //   console.log(this.playerMoves)
  //   console.log(opponentMove)
  // }

  gestures() {
    let rand = Math.floor(Math.random() * 5)
    let choice = this.playerMoves[rand]
    // console.log(this.playerMoves)
    // console.log(choice)

    console.log(`player picked ${choice}`)
  }
}

// testing the random number generator
// let asdf = new AI('maggy')
// asdf.computerChoice()

module.exports = {
  AI: AI
}
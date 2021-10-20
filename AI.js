const { Player } = require('./player')

class AI extends Player {
  constructor(name) {
    super(name)
  }

  // ai() {
  //   this.ai = new AI('Mr. Roboto')
  // }

  gestures() {
    let rand = Math.floor(Math.random() * 5)
    this.choice = this.playerMoves[rand]

    console.log(`player picked ${this.choice}`)
  }
}

module.exports = {
  AI: AI
}
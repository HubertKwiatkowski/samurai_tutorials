class Statistics {
  constructor() {
    this.gameResults = [];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      win: win,
      bid: bid,
    }
    this.gameResults.push(gameResult)
  }

  showGameStatistics() {
    let gamesTotal = this.gameResults.length
    let gamesWon = this.gameResults.filter(result => result.win).length
    let gamesLost = this.gameResults.filter(result => !result.win).length
  

    return [gamesTotal, gamesWon, gamesLost]
  }
}
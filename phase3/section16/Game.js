class Game {
  constructor() {

    this.stats = new Statistics();
    this.wallet = new Wallet(100);

    document.getElementById('start').addEventListener('click', this.startGame.bind(this));
    this.spanWallet = document.querySelector('.panel span,wallet');
    this.boards = [...document.querySelectorAll('div.color')];
    this.inputBid = document.getElementById('bid');
    this.spanResult = document.querySelector('.score span.result');
    this.spanGames = document.querySelector('.score span.number');
    this.spanWins = document.querySelector('.score span.win');
    this.spanLossess = document.querySelector('.score span.loss');

    this.render()
  }

  render(
    colors = ['gray', 'gray', 'gray'],
    money = this.wallet.getWalletValue(), 
    stats = [0, 0, 0], 
    result = "", 
    bid = 0, 
    moneyWon = 0
    ) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index]
    })

    this.spanWallet.textContent = money;
    if (result) {
      result = `Wygrales $${moneyWon}`;
    } else if (!result && result !== "") {
      result = `Przegrales $${bid}`
    }
    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLossess.textContent = stats[2];

    // this.inputBid.value = "";

  }

  startGame() {
    if (this.inputBid.value < 1) return alert('Za mala kwota');
    const bid = Math.floor(this.inputBid.value);

    if (!this.wallet.checkCanPlay(bid)) {
      return alert("masz za malo srodkow lub podano za mala wartosc")
    }

    this.wallet.changeWallet(bid, '-');

    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.checkIfWon(colors);
    const moneyWon = Result.moneyWonInGame(win, bid);
    this.wallet.changeWallet(moneyWon);
    this.stats.addGameToStatistics(win, bid);

    this.render(
      colors,
      this.wallet.getWalletValue(), 
      this.stats.showGameStatistics(), 
      win, 
      bid, 
      moneyWon
      )

  }
}
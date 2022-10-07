

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
}

const game = {
  playerHand: "",
  aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach(hand => hand.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 4px red';
}

function aiChoice() {
  const aiHand = hands[Math.floor(Math.random()*3)].dataset.option;
  return aiHand
}

function checkResult(player, ai) {
  if (player === ai) {
    gameSummary.draws++;
    return 'draw'
  } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
    gameSummary.wins++;
    return 'win'
  } else {
    gameSummary.losses++;
    return 'loss'
  }
}

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  gameSummary.numbers++;
  document.querySelector('p.numbers span').textContent = gameSummary.numbers
  document.querySelector('p.wins span').textContent = gameSummary.wins
  document.querySelector('p.losses span').textContent = gameSummary.losses
  document.querySelector('p.draws span').textContent = gameSummary.draws

  if (result === "win") {
    document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś"
  } else if (result === "loss") {
    document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś"
  } else {
    document.querySelector('[data-summary="who-win"]').textContent = "Remis"
  }
}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
  game.playerHand = "";
  game.aiHand = "";
}

function startGame() {
  if (!game.playerHand) return alert('wybierz dłoń')

  game.aiHand = aiChoice();

  const gameResult = checkResult(game.playerHand, game.aiHand);

  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);
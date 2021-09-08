let myCards = [],
  sumOfCards = 0,
  hasBlackJack = false,
  isAlive = false,
  message = "",
  messageEl = document.getElementById("message-el"),
  sumEl = document.getElementById("sum-el"),
  cardsEl = document.getElementById("cards-el"),
  player = {
    name: "Roman",
    money: 145 },
  playerEl = document.getElementById("player-el");
  playerEl.textContent = player.name + ": $" + player.money

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
} else {
  return randomNumber;
}
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard(),
  secondCard = getRandomCard();
  sumOfCards = firstCard + secondCard;
  myCards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  if (sumOfCards <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sumOfCards === 21) {
    message = "Woohoo! You`ve got blackjack!";
    hasBlackJack = true;
  } else {
    message = "You`re out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sumOfCards;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < myCards.length; i++) {
    cardsEl.textContent += myCards[i] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard();
  sumOfCards += card;
  myCards.push(card);
  renderGame();
  }
}
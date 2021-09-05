let firstCard = 11,
  secondCard = 10,
  sumOfCards = firstCard + secondCard,
  hasBlackJack = false,
  isAlive = true,
message = "",
messageEl = document.getElementById("message-el"),
sumEl = document.getElementById("sum-el"),
cardsEl = document.getElementById("cards-el");

function startGame() {
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
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
}

function newCard() {
    console.log("Draw a new card")
}
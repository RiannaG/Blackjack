let drawBtn = document.getElementById("draw-btn");
let cardsValueContainer = document.getElementById("cards-value");
let resultContainer = document.getElementById("result-message");
let cardNumber = document.getElementById("card-number");
let nCardsContainer = document.getElementById("nCards-message");

//Generate random numbers for the cards
let maximum = 11;
let minimum = 2;

let firstCard;
let secondCard;
let thirdCard;
let sum;

let i = 0;
let y = 0;

function drawCards(y) {
  nCardsContainer.textContent = "Numbers of cards: ";
  if (i > 1) {
    return;
  } else if (i > 0) {
    cardNumber.textContent = "3";
    thirdCard = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    sum = firstCard + secondCard + thirdCard;
    cardsValueContainer.textContent = sum;
    //The casino can chose if draw the third card
    if (casinoSum < 13) {
      drawCasinoOneCard();
    }
    calculateWinner();
    i++;
  } else {
    cardNumber.textContent = "2";
    firstCard = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    secondCard = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    sum = firstCard + secondCard;
    cardsValueContainer.textContent = sum;
    i++;
    drawCasinoTwoCards(y);
    return casinoSum;
  }
}
//Adding stop function to end the game with 2 cards and disable de draw button
function stopCards() {
  drawBtn.hidden = true;
  if (casinoSum < 15) {
    drawCasinoOneCard();
  }
  calculateWinner();
}

//Calculate the sum for the Casino
let casinoCardsValueContainer = document.getElementById("casino-cards-value");
let casinoNcardsContainer = document.getElementById("nCards-message2");
let casinoCardNumber = document.getElementById("casino-card-number");

let casinoFirstCard;
let casinoSecondCard;
let casinoThirdCard;
let casinoSum;

function drawCasinoTwoCards() {
  casinoNcardsContainer.textContent = "Numbers of cards: ";
  casinoCardNumber.textContent = "2";
  casinoFirstCard =
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  casinoSecondCard =
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  casinoSum = casinoFirstCard + casinoSecondCard;
  casinoCardsValueContainer.textContent = casinoSum;
  y++;
  console.log("casino draw 2 card");
}

function drawCasinoOneCard() {
  casinoCardNumber.textContent = "3";
  casinoThirdCard =
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  casinoSum = casinoFirstCard + casinoSecondCard + casinoThirdCard;
  casinoCardsValueContainer.textContent = casinoSum;
  console.log("casino draw 1 card");
}

function calculateWinner() {
  if (sum > 21) {
    resultContainer.textContent = "You loose";
  } else if (casinoSum > 21) {
    resultContainer.textContent = "You win";
  } else if (sum > casinoSum && sum < 21) {
    resultContainer.textContent = "You win";
  } else if (casinoSum > sum && casinoSum < 21) {
    resultContainer.textContent = "You loose";
  } else {
    resultContainer.textContent = "You loose";
  }
}

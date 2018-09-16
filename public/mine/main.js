// where the game message is displayed
let displayStatus =  document.querySelector(".winlose");
//where the dealers total is displayed
let dealersHand = document.querySelector(".dealertotal");
//where the players total is displayed
// let playersHand = document.querySelector(".playertotal");
let dealerHand = []
let playerHand = []
let deck = []
const checkWinner = () => {
  console.log("check winner");
  if (dealersHand < playersHand) {
    displayStatus.textContent = "DEALER HAS " + `${dealersCount}` + ", YOU LOSE.";
  };
  if  (dealersHand > playersHand) {
    displayStatus.textContent = "YOU HAVE " + `${playersCount}` + ", YOU WIN!";
  };
  if  (dealersHand === playerHand) {
    displayStatus.textContent = "IT'S A DRAW, THE DEALER WINS.";
  };
};




// const noMore = () => {
//   console.log("stay");
//   dealersCount.textContent = `${dealersCount}`;
//   // show dealer hidden card and show total then continue down
//   if (dealersHand < 17) {
//     //initalise dealers next turn then restart funcntion
//     noMore ();
//   };
//   if (dealersHand >= 17 && dealersHand <= 21) {
//     checkWinner();
//   };
//   if (dealersHand > 21) {
//     displayStatus.textContent = "DEALER BUSTED, YOU WIN!";
//   };
//
//
// };
//





// const letsGo = () => {
//   console.log("new game");
//   //initalise new deal
//   playersHand.textContent = `${playersCount}`;
//   if (playersHand <= 21) {
//     displayStatus.textContent = "HIT OR STAY?";
//   }
//   if (playersHand > 21) {
//     displayStatus.textContent = "YOU BUSTED, PLAY AGAIN"
//
//   }
// };
// // const giveMore = () => {
//   console.log("hit");
//   // link to fucntion to initialize players next card
//   if (playersHand > 21) {
//     displayStatus.textContent = "YOU BUSTED, PLAY AGAIN"
//
//   };
// };
const giveMore = upOrDown => {
  // Take one card from the deck
  let card = deck.pop()

  // Place that card in the dealer's hand
  playerHand.push(card)

  // Go find my dealer-hand div
  const playerHandDiv = document.querySelector('.playershand')

  // Make a new image tag in memory
  let image = document.createElement('deck')

  // Tell that image tag where it's image is. We do this dynamically
  // based on the face and the suit
  image.src = `/deck/${card.face}${card.suit}.jpg`

  if (upOrDown === 'down') {
    // Do something to display this card down
    image.src = `/img/backofcard.jpg`
    // image.className = 'swing'
  }

  // Push that image tag into the DIV as a child
  playerHandDiv.appendChild(image)
}

const noMore = upOrDown => {
  // Take one card from the deck
  let card = deck.pop()

  // Place that card in the dealer's hand
  dealerHand.push(card)

  // Go find my dealer-hand div
  const dealerHandDiv = document.querySelector('.dealershand')

  // Make a new image tag in memory
  let image = document.createElement('deck')

  // Tell that image tag where it's image is. We do this dynamically
  // based on the face and the suit
  image.src = `/deck/${card.face}${card.suit}.jpg`

  if (upOrDown === 'down') {
    // Do something to display this card down
    image.src = `/img/backofcard.jpg`
    // image.className = 'swing'
  }

  // Push that image tag into the DIV as a child
  dealerHandDiv.appendChild(image)
}



const main = () => {

// // new game button
//   const playAgain = document.querySelector(".newgame");
//   playAgain.addEventListener("click", letsGo);
// // hit button
//   const hitMe = document.querySelector(".hit");
//   hitMe.addEventListener("click", giveMore);
// // stay button
//   const imStaying = document.querySelector(".stay");
//   imStaying.addEventListener("click", noMore);
// //sarts game at load, no need to force restart
//   // letsGo();
  dealersHand.textContent = "?"

  let suits = ['C', 'S', 'D', 'H']
  let cards = [
    { value: 2, face: '2' },
    { value: 3, face: '3' },
    { value: 4, face: '4' },
    { value: 5, face: '5' },
    { value: 6, face: '6' },
    { value: 7, face: '7' },
    { value: 8, face: '8' },
    { value: 9, face: '9' },
    { value: 10, face: '10' },
    { value: 10, face: 'J' },
    { value: 10, face: 'Q' },
    { value: 10, face: 'K' },
    { value: 11, face: 'A' }
  ]

  // loop through all the suits
  suits.forEach(suit => {
    // Do this for each suit

    // For this suit go through the cards
    cards.forEach(card => {
      // make a new card to put in the deck
      let newCardForTheDeck = {
        suit: suit,
        value: card.value,
        face: card.face
      }

      // add it to the deck
      deck.push(newCardForTheDeck)
    })
  })

  // Shuffle the deck into a random order
  //
  // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
  for (let i = 52 - 1; i > 1; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let firstCard = deck[i]
    let secondCard = deck[j]
    deck[i] = secondCard
    deck[j] = firstCard
  }
  giveMore("up")
  giveMore("up")
  noMore('up')
  noMore('down')

  document.querySelector('.hit').addEventListener('click', giveMore)
  document.querySelector('.stay').addEventListener('click', noMore)
}

document.addEventListener('DOMContentLoaded', main)

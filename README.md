<h1 style={text-align: 'center'}>Black Jack</h1>
<img style={margin:'0' 'auto'} src=./public/blackjack.png>

<p style={margin:'0' '20%'}>This was the first major project from my first week of learning <a href="https://www.javascript.com/">JavaScript</a> at SDG. Checkout the game for yourself on <a href="http://black-jack-justin.surge.sh/">Surge</a>. This was also the first weekend the cohort met on weekend to try and tackle the problem together. We had the logic for the deck already and I had figured out the logic to see who won. We were stuck on how get the count of the cards in the player and dealer hands. After hours of bouncing ideas back and forth, I came up with the solution to have a functioning game. Although I know better ways of doing it now, figuring out the code below was a big accomplishment from that week.</p>
<p>Here is the code for the logic to count the players hand.</p>
    
`let countDealer = () => {
  if (dealerHand.length === 2) {
    dealerCount = dealerHand[0].value + dealerHand[1].value
    showDealer.textContent = dealerCount
  }
  if (dealerHand.length === 3) {
    dealerCount = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value
    showDealer.textContent = dealerCount
  }
  if (dealerHand.length === 4) {
    dealerCount = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value + dealerHand[3].value
    showDealer.textContent = dealerCount
  }
  if (dealerHand.length === 5) {
    dealerCount = dealerHand[0].value + dealerHand[1].value + dealerHand[2].value + dealerHand[3].value + dealerHand[4].value
    showDealer.textContent = dealerCount
    checkWinner()
  }
}`

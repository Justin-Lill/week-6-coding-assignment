
//Creating the deck

const Suits = ['Spade', 'Diamond', 'Clubs', 'Hearts']
const Values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']




class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length
    }

    pop() {
        return this.cards.shift()
      }
    
    

    push(card) {
        return this.cards.push(card)
    }

    flipCards() {
        inRound = true
    }
}

class Card {
    constructor(suit, value){
        this.value = value
        this.suit = suit
    }

getHTML() {
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card")
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
}


}

const Card_Value_Map = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10":10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

// Puts all the cards into a single array
function newDeck() {
    return Suits.flatMap(suit => {
        return Values.map(value => {
            return new Card(suit, value);

        })
    })
}
//Things to do:
//Build a new deck
//give both players 26 cards
//create a for loop lets the players compare the cards against each other
startGame()
function startGame() {
    const deck = newDeck()
}

const deck = new Deck()

let playerDeck, computerDeck, inRound, stop

document.addEventListener('click', () =>{
    if (stop) {
        startGame()
        return 
    }
})

if(inRound) {
    playCards()
}

//Splits the deck in half. Gives each player 26 cards
const deckMidpoint = Math.ceil(deck.numberOfCards/ 2)
playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
inRound = false
stop = false

console.log(playerDeck)

function playCards(){
    inRound = true
    
//Deals 1 card from the pile of cards
const playerCard = playerDeck.pop()
const computerCard = computerDeck.pop()
console.log(computerCard)
console.log(playerCard)
}

//Declares winner of the round
function isRoundWinner(cardOne, cardTwo) {
    return Card_Value_Map[cardOne.value] > Card_Value_Map[cardTwo.value]
}

//Decides the winner of the game. Whoever has cards left in their pile is declared the winner
  if( playerDeck.length === 0 || computerDeck.length === 0 ){
    // game over
    if( playerDeck.length > 0 ){
      console.log('Player Won');
    } else {
      console.log('CPU Won');
    }

    if (isGameOver(playerDeck)) {
        text.innerText = "You Lose"
        stop = true
      } else if (isGameOver(computerDeck)) {
        text.innerText = "You Win!"
        stop = true
      }
    }

function isGameOver(deck) {
    return deck.numberOfCards === 0
}

playCards()
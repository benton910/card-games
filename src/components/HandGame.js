import React from 'react'
import Hand from './Hand'
import { generateRandomCard, generateCardFromDeck } from '../utils';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useAtom } from 'jotai';
import { deckAtom, playerHandAtom } from '../utils/atoms';
import BurnPile from './BurnPile';

//add an argument to this function that takes in a flag of whether or not it came from burn pile?
function addCardToHand() {
  let newCard = generateRandomCard();
  return newCard;
}

function drawCardFromDeck(deck) {
  const cardIdx = Math.floor(Math.random() * deck.length);
  const drawnCard = deck[cardIdx];
  console.log(drawnCard);
  console.log(deck);
  deck.splice(cardIdx, 1);
  return {
    updatedDeck: deck,
    drwnCard: drawnCard
  }
}

function HandGame() {

  const [handCardsAtom, setHandCardsAtom] = useAtom(playerHandAtom);
  const [deck, setDeck] = useAtom(deckAtom);

  let deckIsEmpty = deck.length === 0;
  let cardDraw;

  return (
    <DndProvider backend={HTML5Backend}>
      <div class="container flex flex-col items-center
      h-full w-full m-0 bg-[url('../public/cards/green_bkgrd.jpg')] bg-cover">
        <div>
          <header>
            Welcome to Hand, Your favorite game ever!
          </header>
          <h1>Click on the deck to draw a card</h1>
        </div>
        <div class="container h-full w-full flex flex-col 
        items-center justify-end content-between">
          <div class="flex flex-row justify-center align-center">
            <BurnPile></BurnPile>
            <button
            disabled = {deckIsEmpty}
            onClick={() => {
              console.log('before: ' + deck.length);
              cardDraw = drawCardFromDeck(deck);
              handCardsAtom.push(cardDraw.drwnCard);
              setHandCardsAtom([...handCardsAtom]);
              setDeck([...cardDraw.updatedDeck]);
              console.log(deck.length + ': after');
            }}>
              <img src="../cards/BLUE_BACK.svg" class="flex h-20 w-15" alt="deck"></img>
            </button>
          </div>
          <Hand></Hand>
        </div>
      </div>
    </DndProvider>
  )
}

export default HandGame
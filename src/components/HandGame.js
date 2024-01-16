import React from 'react'
import { useState } from "react"
import Hand from './Hand'
import { generateRandomCard } from '../utils';

//add an argument to this function that takes in a flag of whether or not it came from burn pile
function addCardToHand() {
  let newCard = generateRandomCard();
  return newCard;
}

function HandGame() {

  const [cards, setCards] = useState([]);

  return (
    <div class="container flex flex-col items-center
    h-full w-full m-0 bg-[url('../public/cards/green_bkgrd.jpg')]">
      <div>
        <header>
          Welcome to Hand, Your favorite game ever!
        </header>
        <h1>Click on the deck to draw a card</h1>
      </div>
      <div class="container h-1/2 w-full flex flex-col 
      items-center justify-end content-between">
        <div class="flex justify-center align-center">
          <button onClick={() => {
            cards.push(addCardToHand());
            setCards([...cards]);
          }}>
            <img src="../cards/BLUE_BACK.svg" class="flex h-20 w-15"></img>
          </button>
        </div>
        <Hand cardsInHand={cards}></Hand>
      </div>
    </div>
  )
}

export default HandGame
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
    <div class="container h-full w-full">
      <header>
        Welcome to Hand, Your favorite game ever!
      </header>
      <div class="container h-lvh w-full flex flex-col items-center justify-center content-between">
        <Hand cardsInHand={cards}></Hand>
        <div class="flex justify-center align-bottom">
          <button onClick={() => {
            cards.push(addCardToHand());
            setCards([...cards]);
          }}>
            Draw a Card</button>
        </div>
      </div>
    </div>
  )
}

export default HandGame
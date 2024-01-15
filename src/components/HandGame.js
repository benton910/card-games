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
    <div>
      <header>Hello!</header>
      <div>Welcome to Hand, Your favorite game ever!</div>
      <Hand cardsInHand={cards}></Hand>
      <button onClick={() => {
        cards.push(addCardToHand());
        setCards([...cards]);
      }}>
        Draw a Card</button>
    </div>
  )
}

export default HandGame
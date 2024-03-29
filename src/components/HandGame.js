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

  const [cards, setCards] = useState([
    {
      rank: 1,
      suit: 2
    },
    {
      rank: 11,
      suit: 3
    },
    {
      rank: 12,
      suit: 0
    }
  ])

  return (
    <div>
      <header>Hello!</header>
      <div>Welcome to Hand, The Game You Hate!</div>
      <Hand cardsInHand={cards} onAddCard={() => {
        cards.push(addCardToHand());
        console.log(cards)
        setCards(cards);
      }}></Hand>
    </div>
  )
}

export default HandGame
import React from 'react'
import Card from './Card'

// This component is used to represent a full hand belonging to a player

function Hand({cardsInHand, onAddCard}) {

  return (
    <div className="hand">
      <div className="cards">
        {
          cardsInHand.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit}></Card>
          ))
        }
      </div>
      <button onClick={() => (onAddCard())}>
        Draw a Card</button>
    </div>
  )
}

export default Hand
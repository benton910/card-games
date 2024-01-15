import React from 'react'
import Card from './Card'

// This component is used to represent a full hand belonging to a player

function Hand({cardsInHand}) {

  return (
    <div class="container flex relative h-32 w-32">
      <div class="absolute flex flex-row bottom-0 h-16">
        {
          cardsInHand.map((card, index) => (
            <Card key={index} rank={card.rank} suit={card.suit}></Card>
          ))
        }
      </div>
    </div>
  )
}

export default Hand
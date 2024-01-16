import React from 'react'
import Card from './Card'

// This component is used to represent a full hand belonging to a player

function Hand({cardsInHand}) {

  return (
    <div class="container flex items-end justify-center h-1/3 w-full padding-x pb-4">
      <div class="flex flex-row h-20">
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
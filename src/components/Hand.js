import React from 'react'
import Card from './Card'
import HandSpace from './HandSpace'
import { useAtom } from 'jotai';
import { playerHandAtom } from '../utils/atoms';

// This component is used to represent a full hand belonging to a player

function addLastHandSpace(cardsArr) {
  if (cardsArr.length > 1) {
    return <HandSpace key={cardsArr.length}></HandSpace>
  }
}

function Hand() {
  const [handCardsAtom, setHandCardsAtom] = useAtom(playerHandAtom);

  return (
    <div class="container flex items-end justify-center h-1/3 w-full padding-x pb-4">
      <div class="flex flex-row h-20">
        {
          handCardsAtom.map((card, cardIdx, handSpaceIdx) => {
            if (handCardsAtom.length === 1) {
              return(
                <Card key={cardIdx} rank={card.rank} suit={card.suit}></Card>
              )
            }
            else {
              return(
                <div class="flex flex-row">
                  <HandSpace key={handSpaceIdx}></HandSpace>
                  <Card key={cardIdx} rank={card.rank} suit={card.suit}></Card>
                </div>
              )}
          })
        }
        {
          addLastHandSpace(handCardsAtom)
        }
      </div>
    </div>
  )
}

export default Hand
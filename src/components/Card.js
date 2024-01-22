import { getCardSvg } from "../utils";
import { ItemTypes } from "../utils/modules";
import { useDrag } from 'react-dnd'

//This component is used to represent 1 card in a player's hand

function Card(cardProps) {
  let rank = cardProps.rank;
  let suit = cardProps.suit;
  let key = cardProps.key;
  let cardSvg = getCardSvg(rank, suit);

  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {rank, suit, key},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    <div ref={drag} class="container flex h-full w-1/15">
      <img src={cardSvg} alt="playing card"/>
    </div>
  );
}
export default Card;
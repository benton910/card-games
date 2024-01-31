import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/modules';
import { useAtom } from 'jotai';
import { playerHandAtom } from '../utils/atoms';
import { generateCardFromNumberRep } from '../utils';

//This component is used to represent the drop target spaces between each card
//  in a player's hand

function moveCardInHand(item, hand) {
  console.log("item is: " + item);
  console.log("rank is: " + item.rank);
  console.log("suit is: " + item.suit);
  console.log("index is: " + hand.findIndex((itm) => item === itm))
  console.log("Hand: ");
  console.log(hand[0]);
  // hand.splice(item.index, 0, hand[item.index]);
  return hand;
}

function HandSpace(handSpaceProps) {
  const idx = handSpaceProps.idx;

  const [handCardsAtom, setHandCardsAtom] = useAtom(playerHandAtom);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => {
      setHandCardsAtom([...moveCardInHand(item, handCardsAtom)]);
      console.log("HandSpaceIndex: " + idx);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [idx])

  return (
    <div 
    ref={drop}
    id={idx}
    class="flex h-full w-3"
    style={{
      background: isOver ? 'green' : 'blue'
    }}
    ></div>
  );
}

export default HandSpace;
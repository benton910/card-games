import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/modules';
import { useAtom } from 'jotai';
import { playerHandAtom } from '../utils/atoms';

//This component is used to represent the drop target spaces between each card
//  in a player's hand

function HandSpace(handSpaceProps) {
  const idx = handSpaceProps.key;

  function moveCard(index) {
    console.log("index is: " +index);
    handCardsAtom.splice(index, 0, handCardsAtom[index-1]);
    setHandCardsAtom(...handCardsAtom);
  }

  const [handCardsAtom, setHandCardsAtom] = useAtom(playerHandAtom);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: () => moveCard(idx, handCardsAtom),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [idx])

  return (
    <div id={idx} 
    class="flex h-full w-3"
    style={{
      background: isOver ? 'green' : 'blue'
    }}
    ></div>
  );
}

export default HandSpace;
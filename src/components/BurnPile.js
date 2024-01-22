import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/modules';
import { useAtom } from 'jotai';
import { burnPileAtom, playerHandAtom } from '../utils/atoms';
import Card from './Card';

//This component is used to represent the drop target spaces between each card
//  in a player's hand

function BurnPile() {
  const [burnPile, setBurnPile] = useAtom(burnPileAtom);
  const [handCardsAtom, setHandCardsAtom] = useAtom(playerHandAtom);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (card) => {
      const cardHandIdx = handCardsAtom.findIndex(
        (itm) => itm.rank == card.rank && itm.suit == card.suit
      );
      if (cardHandIdx != -1) {
        handCardsAtom.splice(cardHandIdx, 1);
      }
      setBurnPile([card, ...burnPile]);
      setHandCardsAtom([...handCardsAtom]);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  let pileIsEmpty = burnPile.length < 1 ? true : false;

  return (
    <button onClick={() => {
      console.log(burnPile)
    }}>
      <div
      ref={drop}
      class="flex h-20 w-15 px-3"
      >
        {!pileIsEmpty && <Card rank={burnPile[0].rank} suit={burnPile[0].suit}></Card>}
        { pileIsEmpty && "Burn Pile"
        }
      </div>
    </button>
  );
}

export default BurnPile;
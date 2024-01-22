import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/modules';
import { useAtom } from 'jotai';
import { burnPileAtom } from '../utils/atoms';
import { getCardSvg } from '../utils';
import Card from './Card';

//This component is used to represent the drop target spaces between each card
//  in a player's hand

function BurnPile() {
  const [burnPile, setBurnPile] = useAtom(burnPileAtom);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (card) => setBurnPile([card, ...burnPile]),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  })

  let dummyCard = {
    rank: 2, suit: 2
  }

  let pileIsEmpty = burnPile.length < 1 ? true : false;

  return (
    <button onClick={() => {
      console.log(burnPile)
    }}>
      <div
      ref={drop}
      class="flex h-full w-10"
      style={{
        background:'blue'
      }}
      >
        {!pileIsEmpty && <Card rank={burnPile[0].rank} suit={burnPile[0].suit}></Card>}
      </div>
    </button>
  );
}

export default BurnPile;
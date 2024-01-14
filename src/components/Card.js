
//This component is used to represent 1 card in a player's hand

import { getCardSvg } from "../utils";

function Card(cardProps) {
  let rank = cardProps.rank;
  let suit = cardProps.suit;
  let cardSvg = getCardSvg(rank, suit);

  return (
    <div>
      <img src={cardSvg} alt="playing card"/>
    </div>
  );
}
export default Card;
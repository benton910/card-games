const cardRanks = {
  0: ["Joker", 15],
  1: ["A", 11],
  2: ["2", 2],
  3: ["3", 3],
  4: ["4", 4],
  5: ["5", 5],
  6: ["6", 6],
  7: ["7", 7],
  8: ["8", 8],
  9: ["9", 9],
  10: ["10", 10],
  11: ["J", 10],
  12: ["Q", 10],
  13: ["K", 10]
};

const cardRanksReverse = {
  "Joker": 0,
  "A": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13
};

const suitsMap = {
  0: ["C", "Clubs"],
  1: ["D", "Diamonds"],
  2: ["H", "Hearts"],
  3: ["S", "Spades"]
};

const suitsMapReverse = [
  "C", "D", "H", "S"
]

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomCard() {
  const randomRank = getRandom(14);
  const randomSuit = getRandom(4);
  return { 
    rank: randomRank,
    suit: randomSuit
  }
}

// Generating a card object { rank: , suit: } out of numerical representation
// of card. ex) card = 40 returns a 4 of clubs.
function generateCardFromNumberRep(cardNum) {
  const cardIDArr = cardNum.toString().split("");
  let rank;
  let suit;
  if (cardIDArr.length < 3) {
    rank = cardIDArr[0];
    suit = cardIDArr[1];
  } else if (cardIDArr.length < 4) {
    rank = cardIDArr[0] + cardIDArr[1];
    suit = cardIDArr[2];
  } else {
    rank = 15;
    suit = cardIDArr[5];
  }
  return {
    rank: rank,
    suit: suit
  }
}

// Card here is an entry from our deckAtom, in format "RS" (Rank + Suit)
//  ex) card = "QS"
function generateCardFromDeck(card) {
  const cardIDArr = card.split("");
  let rank;
  let suit;
  if (cardIDArr.length < 3) {
    rank = cardRanksReverse[cardIDArr[0]];
    suit = suitsMapReverse.indexOf(cardIDArr[1]);
  } else if (cardIDArr.length < 4) {
    rank = cardRanksReverse[card[0] + card[1]];
    suit = suitsMapReverse.indexOf(cardIDArr[2]);
  } else {
    rank = 15;
    suit = suitsMapReverse.indexOf(cardIDArr[5]);
  }
  return {
    rank: rank,
    suit: suit
  }
}

function getCardSvg(rank, suit) {
  if (rank === 0) {
    return;
  }
  let svgRank = cardRanks[rank][0];
  let svgSuit = suitsMap[suit][0];
  return "../../cards/" + svgRank + svgSuit + ".svg"
}

  export { getCardSvg, generateRandomCard, generateCardFromDeck, generateCardFromNumberRep, cardRanks, suitsMap };
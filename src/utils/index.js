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

const suitsMap = {
  0: ["C", "Clubs"],
  1: ["D", "Diamonds"],
  2: ["H", "Hearts"],
  3: ["S", "Spades"]
};

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

  function generateCardFromDeck(card) {
    return { 
      rank: card[0], 
      suit: card[-1] 
    }
  }
  
  function getCardSvg(rank, suit) {
    let svgRank = cardRanks[rank][0];
    let svgSuit = suitsMap[suit][0];
    if (svgRank + svgSuit === ('KD' || 'JS')) {
      return "../../cards/" + svgRank + svgSuit + ".sva"
    }
    else {
      return "../../cards/" + svgRank + svgSuit + ".svg"
    }
  }

  export { getCardSvg, generateRandomCard, generateCardFromDeck, cardRanks, suitsMap };
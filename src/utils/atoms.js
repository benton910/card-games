import { atom } from "jotai";

const playerHandAtom = atom([
    {
      rank: 1,
      suit: 2
    },
    {
      rank: 11,
      suit: 3
    },
    {
      rank: 12,
      suit: 0
    } 
  ]);

 const deckAtom = atom([
    "AC", "AD", "AH", "AS", 
    "2C", "2D", "2H", "2S",
    "3C", "3D", "3H", "3S",
    "4C", "4D", "4H", "4S",
    "5C", "5D", "5H", "5S",
    "6C", "6D", "6H", "6S",
    "7C", "7D", "7H", "7S",
    "8C", "8D", "8H", "8S",
    "9C", "9D", "9H", "9S",
    "10C", "10D", "10H", "10S",
    "JC", "JD", "JH", "JS",
    "QC", "QD", "QH", "QS",
    "KC", "KD", "KH", "KS",
    "Joker", "Joker",
    "AC", "AD", "AH", "AS", 
    "2C", "2D", "2H", "2S",
    "3C", "3D", "3H", "3S",
    "4C", "4D", "4H", "4S",
    "5C", "5D", "5H", "5S",
    "6C", "6D", "6H", "6S",
    "7C", "7D", "7H", "7S",
    "8C", "8D", "8H", "8S",
    "9C", "9D", "9H", "9S",
    "10C", "10D", "10H", "10S",
    "JC", "JD", "JH", "JS",
    "QC", "QD", "QH", "QS",
    "KC", "KD", "KH", "KS",
    "Joker", "Joker",
  ]);

  const burnPileAtom = atom([
    {
      rank: 1,
      suit: 2
    }
  ]);

  export { playerHandAtom, deckAtom, burnPileAtom }
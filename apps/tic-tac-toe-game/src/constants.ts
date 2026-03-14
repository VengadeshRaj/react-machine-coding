import { CardValue } from "./TicTacToeGame";

const NO_OF_CARDS = 9;
const CARD_VALUE_OBJ: CardValue = {
  symbole: "",
  isFrozen: false,
  isDone: false,
};
const SYBOLE_PAIR: any = {
  X: "O",
  O: "X",
};

const PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [0, 4, 8],
  [0, 3, 6],
  [2, 5, 8],
];

export { NO_OF_CARDS, CARD_VALUE_OBJ, SYBOLE_PAIR, PATTERNS };

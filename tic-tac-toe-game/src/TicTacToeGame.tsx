import React, { useEffect, useState } from "react";
import Card from "./components/Card";

type CardValue = {
  symbole: "X" | "O" | "";
  isFrozen: boolean;
  isDone: boolean;
};

const TicTacToeGame = () => {
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
  const [symbole, setSymbole] = useState<"X" | "O" | "">("X");
  const [cardValues, setCardValues] = useState<CardValue[]>([]);
  const [isGameComplete, setIsGameComplete] = useState(false);

  useEffect(() => {
    const initialCardValues = [];
    for (let i = 0; i < NO_OF_CARDS; i++) {
      initialCardValues.push(CARD_VALUE_OBJ);
    }
    setCardValues(initialCardValues);
  }, []);

  const checkGameStatus = (newCardValues: CardValue[]): CardValue[] => {
    for (let i = 0; i < PATTERNS.length; i++) {
      const [a, b, c] = PATTERNS[i];
      if (
        newCardValues[a].symbole &&
        newCardValues[a].symbole == newCardValues[b].symbole &&
        newCardValues[a].symbole == newCardValues[c].symbole
      ) {
        newCardValues = newCardValues.map((card, index) => {
          if (PATTERNS[i].includes(index)) {
            return { ...card, isDone: true };
          }
          return card;
        });
        setIsGameComplete(true);
      }
    }
    return newCardValues;
  };

  const cardOnClick = (cardIndex: number) => {
    const newCardValues = cardValues.map((card, i: number) => {
      if (cardIndex == i) {
        return { ...card, symbole: symbole, isFrozen: true };
      }
      return card;
    });
    const checkedCardValues = checkGameStatus(newCardValues);
    console.log("checkedCardValues", checkedCardValues);
    setCardValues([...checkedCardValues]);
    setSymbole(SYBOLE_PAIR[symbole]);
  };

  const buildCards = () =>
    cardValues.map((card, i: number) => (
      <Card
        symbole={card.symbole}
        isDone={card.isDone}
        isFrozen={card.isFrozen}
        index={i}
        onClick={(i: number) => cardOnClick(i)}
        isGameComplete={isGameComplete}
      />
    ));
  return (
    <div className="flex flex-col items-center gap-5 font-bold text-3xl p-10 font-mono">
      <h1>Tic Tac Toe!</h1>
      <div className="flex flex-row gap-2 flex-wrap w-[350px]">
        {buildCards()}
      </div>
      <div>
        {isGameComplete && <h1 className="lg:text-5xl animate-bounce p-10">Player {SYBOLE_PAIR[symbole]} Won!🎉</h1>}
      </div>
    </div>
  );
};

export default TicTacToeGame;

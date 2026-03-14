import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import {
  NO_OF_CARDS,
  CARD_VALUE_OBJ,
  PATTERNS,
  SYBOLE_PAIR,
} from "./constants";

export type CardValue = {
  symbole: "X" | "O" | "";
  isFrozen: boolean;
  isDone: boolean;
};

const TicTacToeGame = () => {
  const [symbole, setSymbole] = useState<"X" | "O" | "">("X");
  const [cardValues, setCardValues] = useState<CardValue[]>([]);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const isMatchDraw =
    !isGameComplete && cardValues.every((card) => card.symbole);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    const initialCardValues = [];
    for (let i = 0; i < NO_OF_CARDS; i++) {
      initialCardValues.push(CARD_VALUE_OBJ);
    }
    setCardValues(initialCardValues);
    setIsGameComplete(false)
  };

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
    <div className="flex flex-col h-screen justify-center items-center gap-5 font-bold text-3xl p-10 font-mono">
      <h1>Tic Tac Toe!</h1>
      <div className="flex flex-row gap-2 flex-wrap w-[350px]">
        {buildCards()}
      </div>
      <div className="flex flex-col items-center">
        {isGameComplete && (
          <h1 className="lg:text-5xl animate-bounce p-10">
            Player {SYBOLE_PAIR[symbole]} Won!🎉
          </h1>
        )}
        {isMatchDraw && (
          <h1 className="lg:text-5xl animate-bounce p-10">
            Match Draw! Try Again!🤓
          </h1>
        )}
        {(isGameComplete || isMatchDraw) && (
          <button className="text-base bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=> startGame()}>
            Try again
          </button>
        )}
      </div>
    </div>
  );
};

export default TicTacToeGame;

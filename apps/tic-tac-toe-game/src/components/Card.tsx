import React, { useState } from "react";

type CardProps = {
  symbole: "X" | "O" | "";
  index: number;
  onClick: (index: number) => void;
  isFrozen: boolean;
  isDone: boolean;
  isGameComplete:boolean
};

const Card = (props: CardProps) => {
  const { symbole, onClick, index, isFrozen, isDone, isGameComplete } = props;
  const cardContainerClass = isDone
    ? `flex w-[100px] h-[100px] bg-green-600 text-center items-center border-[2px] border-gray-500 rounded-md justify-center cursor-not-allowed`
    : `flex w-[100px] h-[100px] bg-gray-200 text-center items-center border-[2px] border-gray-500 rounded-md justify-center  ${
        isFrozen ? "cursor-not-allowed" : "cursor-pointer"} `;

  const cardOnClick = () => {
    if (!isFrozen && !isGameComplete) onClick(index);
  };

  return (
    <div className={cardContainerClass} onClick={() => cardOnClick()}>
      <span className="text-8xl font-bold text-gray-800">{symbole}</span>
    </div>
  );
};

export default Card;

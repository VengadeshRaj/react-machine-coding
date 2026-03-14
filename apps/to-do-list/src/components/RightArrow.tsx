import React from "react";
import { ArrowType } from "../ToDoList";

const RightArrow = ({ onClick, itemIndex }: ArrowType) => (
  <div onClick={() => onClick(itemIndex)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  </div>
);

export default RightArrow;
